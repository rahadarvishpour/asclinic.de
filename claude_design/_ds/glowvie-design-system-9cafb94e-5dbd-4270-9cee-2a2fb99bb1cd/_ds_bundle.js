/* @ds-bundle: {"namespace":"Glowvie","components":[],"sourceHashes":{"src/tokens.css":"c5119612e4c1","src/kit.css":"ba676e4b6afc","src/motion.js":"71c437523d1e"},"inlinedExternals":[]} */
/* Glowvie motion runtime. Algorithm verbatim from src/motion.js;
   re-scoped so it can run after a React mount. See README.md. */
(function () {
  var G = (window.Glowvie = window.Glowvie || {});
  var bound = {};
  function bindOnce(evt, fn, opts) {
    if (bound[evt]) return;
    bound[evt] = true;
    window.addEventListener(evt, fn, opts);
  }
  function mountMotion(root) {
    root = root || document;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* stagger: index each child so CSS can offset its delay */
  root.querySelectorAll('.stagger').forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (child, i) {
      child.style.setProperty('--i', i);
    });
  });

  /* counters: data-count="2400" data-suffix="+" */
  function runCount(el) {
    var target = parseFloat(el.dataset.count),
        dec = (el.dataset.count.split('.')[1] || '').length,
        suffix = el.dataset.suffix || '', dur = 1400, t0 = null;
    function tick(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1),
          eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(dec).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if (reduce || !('IntersectionObserver' in window)) {
    root.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-in'); });
    root.querySelectorAll('[data-count]').forEach(function (el) {
      el.textContent = el.dataset.count + (el.dataset.suffix || '');
    });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      if (e.target.dataset.count) runCount(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });

  var watched = [].slice.call(root.querySelectorAll('.reveal, [data-count]'));
  watched.forEach(function (el) { io.observe(el); });

  /* Safety sweep: a fast fling can outrun the observer, so anything already
     scrolled into (or past) the viewport is revealed on the next frame. */
  var sweeping = false;
  function sweep() {
    if (sweeping) return;
    sweeping = true;
    requestAnimationFrame(function () {
      watched = watched.filter(function (el) {
        if (el.classList.contains('is-in')) return false;
        if (el.getBoundingClientRect().top > window.innerHeight) return true;
        el.classList.add('is-in');
        if (el.dataset.count) runCount(el);
        io.unobserve(el);
        return false;
      });
      sweeping = false;
    });
  }
  bindOnce('scroll', sweep, { passive: true });

  /* parallax: data-parallax="0.18" — positive drifts slower than scroll */
  var layers = [].slice.call(root.querySelectorAll('[data-parallax]'));
  if (layers.length) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var vh = window.innerHeight;
        layers.forEach(function (el) {
          var r = el.getBoundingClientRect(),
              progress = (r.top + r.height / 2 - vh / 2) / vh;
          el.style.transform = 'translate3d(0,' + (progress * parseFloat(el.dataset.parallax) * -100).toFixed(2) + 'px,0)';
        });
        ticking = false;
      });
    };
    bindOnce('scroll', onScroll, { passive: true });
    onScroll();
  }
  }
  G.mountMotion = mountMotion;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { mountMotion(); });
  } else {
    mountMotion();
  }
})();
