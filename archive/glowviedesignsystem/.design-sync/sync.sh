#!/usr/bin/env bash
# The off-script driver for this repo: build -> anchor -> validate.
# package-build.mjs cannot run here (no npm package, no React, no Storybook),
# so build-ds-bundle.py stands in for it. The validation gate is unchanged.
set -euo pipefail
cd "$(dirname "$0")/.."
python3 .design-sync/build-ds-bundle.py "$@"
node .design-sync/write-sync-anchor.mjs ds-bundle
node .ds-sync/package-validate.mjs ds-bundle
