(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var header = document.getElementById("site-header");
  var navToggle = document.getElementById("nav-toggle");
  if (navToggle && header) {
    navToggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll(".main-nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll(".accordion-trigger").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var panel = trigger.nextElementSibling;
      var isOpen = trigger.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".accordion-trigger").forEach(function (t) {
        t.setAttribute("aria-expanded", "false");
        t.nextElementSibling.style.maxHeight = null;
      });

      if (!isOpen) {
        trigger.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  // Generic slider: scoped to a root element so multiple sliders can coexist
  function createSlider(options) {
    var root = options.root;
    var track = options.track;
    var slides = options.slides;
    var dots = options.dots;
    var prevBtn = options.prevBtn;
    var nextBtn = options.nextBtn;
    var autoplay = options.autoplay !== false;
    if (!root || !track || !slides.length) return;

    var current = 0;
    var timer = null;

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      track.style.transform = "translateX(-" + current * (100 / slides.length) + "%)";
      dots.forEach(function (dot, i) {
        var isActive = i === current;
        dot.classList.toggle("active", isActive);
        dot.setAttribute("aria-selected", String(isActive));
      });
      slides.forEach(function (slide, i) {
        slide.setAttribute("aria-hidden", String(i !== current));
      });
    }

    function start() {
      if (!autoplay || prefersReducedMotion) return;
      stop();
      timer = setInterval(function () { goTo(current + 1); }, 5500);
    }
    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        goTo(parseInt(dot.dataset.index, 10));
        start();
      });
    });
    if (prevBtn) prevBtn.addEventListener("click", function () { goTo(current - 1); start(); });
    if (nextBtn) nextBtn.addEventListener("click", function () { goTo(current + 1); start(); });

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", start);

    goTo(0);
    start();
  }

  createSlider({
    root: document.getElementById("hero-slider"),
    track: document.getElementById("hero-slider-track"),
    slides: document.querySelectorAll("#hero-slider-track .hero-slide"),
    dots: document.querySelectorAll("#hero-dots .dot")
  });

  createSlider({
    root: document.getElementById("testimonial-slider"),
    track: document.getElementById("testimonial-track"),
    slides: document.querySelectorAll("#testimonial-track .testimonial"),
    dots: document.querySelectorAll("#testimonial-dots .dot"),
    prevBtn: document.getElementById("testimonial-prev"),
    nextBtn: document.getElementById("testimonial-next")
  });

  // Contact form (client-side only, no backend configured yet)
  var form = document.getElementById("kontakt-form");
  var status = document.getElementById("form-status");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      status.textContent = "Danke! Ihre Anfrage wurde übermittelt. Wir melden uns in Kürze bei Ihnen.";
      form.reset();
    });
  }
})();
