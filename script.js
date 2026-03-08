/* ==========================================================================
   SCRIPT.JS — Sunil Gurung Portfolio
   ==========================================================================
   Contents:
   1. Smooth-Scroll Navigation
   2. Active Section Highlight
   3. Scroll-Reveal Animations
   ========================================================================== */


/* --------------------------------------------------------------------------
   1. SMOOTH-SCROLL NAVIGATION
   -------------------------------------------------------------------------- */

/**
 * Scroll smoothly to a section by its ID.
 * Used by sidebar nav buttons and in-page anchor links.
 */
function goTo(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

/* Sidebar nav buttons */
document.querySelectorAll('.nav-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var targetId = this.getAttribute('data-target');
    if (targetId) {
      goTo(targetId);
    }
  });
});

/* Hero in-page anchor links (View Work / Get In Touch) */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var targetId = this.getAttribute('href').substring(1);
    var target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


/* --------------------------------------------------------------------------
   2. ACTIVE SECTION HIGHLIGHT
   --------------------------------------------------------------------------
   Watches which <section> is currently in view and toggles
   the .active class on the matching sidebar nav button.
   -------------------------------------------------------------------------- */

var navObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        /* Remove active from all nav buttons */
        document.querySelectorAll('.nav-btn').forEach(function (btn) {
          btn.classList.remove('active');
        });

        /* Activate the matching button */
        var match = document.querySelector(
          '.nav-btn[data-target="' + entry.target.id + '"]'
        );
        if (match) {
          match.classList.add('active');
        }
      }
    });
  },
  { threshold: 0.35 }
);

document.querySelectorAll('section[id]').forEach(function (section) {
  navObserver.observe(section);
});


/* --------------------------------------------------------------------------
   3. SCROLL-REVEAL ANIMATIONS
   --------------------------------------------------------------------------
   Elements with class .reveal fade-in and slide-up when
   they enter the viewport (class .vis is added).
   -------------------------------------------------------------------------- */

var revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(function (el) {
  revealObserver.observe(el);
});
