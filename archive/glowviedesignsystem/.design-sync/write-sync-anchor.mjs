// Emit _ds_sync.json for the off-script Glowvie layout.
//
// The skill's guidance: an off-script layout should still produce the anchor
// when it can, so a future re-sync can skip re-verifying unchanged components.
// The hash recipes must match the skill's own byte-for-byte, so they are
// imported from lib/sync-hashes.mjs rather than reimplemented here.
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { styleShaFor, renderHashFor } from '../.ds-sync/lib/sync-hashes.mjs';

const OUT = process.argv[2] ?? 'ds-bundle';
const cards = JSON.parse(readFileSync(join(OUT, '.cards.json'), 'utf8')).cards;
const bundle = readFileSync(join(OUT, '_ds_bundle.js'));

const renderHashes = {};
const sourceKeys = {};
for (const c of cards) {
  renderHashes[c.name] = renderHashFor(OUT, c, {});
  // The grade contract for this shape: the part file the card is generated
  // from, plus the generator itself. Either changing must re-grade.
  sourceKeys[c.name] = createHash('sha256')
    .update(readFileSync(join(OUT, 'components', c.group, c.name, `${c.name}.html`)))
    .digest('hex')
    .slice(0, 16);
}

const scriptsSha = createHash('sha256')
  .update(readFileSync('.design-sync/build-ds-bundle.py'))
  .update(readFileSync('.design-sync/jsxify.py'))
  .digest('hex')
  .slice(0, 16);

writeFileSync(join(OUT, '_ds_sync.json'), JSON.stringify({
  shape: 'package',
  offScript: true,
  styleSha: styleShaFor(OUT, { includeBundleBody: true }),
  renderHashes,
  sourceKeys,
  keyRecipe: 7,
  scriptsSha,
  sourceHashes: JSON.parse(
    /^\/\* @ds-bundle: (.*) \*\//.exec(readFileSync(join(OUT, '_ds_bundle.js'), 'utf8').split('\n', 1)[0])[1],
  ).sourceHashes,
  auxSha: createHash('sha256').update(readFileSync(join(OUT, 'README.md'))).digest('hex').slice(0, 16),
  bundleSha12: createHash('sha256').update(bundle).digest('hex').slice(0, 12),
}, null, 2) + '\n');

console.log(`_ds_sync.json: ${cards.length} render hashes`);
