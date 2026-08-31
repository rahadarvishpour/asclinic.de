/* ============================================================
   GLOWVIE motion runtime — ~1.5 KB, no dependencies.
   Drives: scroll reveals, staggered children, number counters,
   and decorative parallax. Everything is opt-in via attributes.
   ============================================================ */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* stagger: index each child so CSS can offset its delay */
  document.querySelectorAll('.stagger').forEach(function (group) {
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
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-in'); });
    document.querySelectorAll('[data-count]').forEach(function (el) {
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

  var watched = [].slice.call(document.querySelectorAll('.reveal, [data-count]'));
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
  window.addEventListener('scroll', sweep, { passive: true });

  /* parallax: data-parallax="0.18" — positive drifts slower than scroll */
  var layers = [].slice.call(document.querySelectorAll('[data-parallax]'));
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
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
