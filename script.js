/* ==========================================================================
   SCRIPT.JS — Sunil Gurung Portfolio
   ==========================================================================
   1. Smooth-Scroll Navigation
   2. Active Section Highlight
   3. Scroll-Reveal Animations
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. SMOOTH-SCROLL NAVIGATION
   -------------------------------------------------------------------------- */

function goTo(id) {
  var target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

/* In-page anchor links */
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
   -------------------------------------------------------------------------- */

var navObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-links a').forEach(function (link) {
          link.classList.remove('active');
        });
        var match = document.querySelector(
          '.nav-links a[href="#' + entry.target.id + '"]'
        );
        if (match) match.classList.add('active');
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('section[id]').forEach(function (section) {
  navObserver.observe(section);
});