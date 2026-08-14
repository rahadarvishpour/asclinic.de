(function () {
  "use strict";

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
