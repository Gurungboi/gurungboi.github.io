/* ==========================================================================
   SCRIPT.JS — Sunil Gurung Portfolio
   GAMETICS EDITION v2.0
   ==========================================================================
   1. Scroll Progress Bar
   2. Mobile Navigation
   3. Active Section Highlight
   4. Scroll Reveal Animations
   5. Count-Up Animations
   6. Smooth Scroll
   7. Parallax Shapes (optional)
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   1. SCROLL PROGRESS BAR
   -------------------------------------------------------------------------- */
const initScrollProgress = () => {
  const progressBar = document.getElementById('scrollProgress');
  if (!progressBar) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
};

/* --------------------------------------------------------------------------
   2. MOBILE NAVIGATION TOGGLE
   -------------------------------------------------------------------------- */
const initMobileNav = () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navStatus = document.querySelector('.nav-status');

  if (!navToggle || !navLinks) return;

  const closeMenu = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('mobile-open');
    if (navStatus) navStatus.classList.remove('mobile-open');
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    navToggle.setAttribute('aria-expanded', 'true');
    navLinks.classList.add('mobile-open');
    if (navStatus) navStatus.classList.add('mobile-open');
    document.body.style.overflow = 'hidden';
  };

  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    isExpanded ? closeMenu() : openMenu();
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('mobile-open')) {
      closeMenu();
    }
  });
};

/* --------------------------------------------------------------------------
   3. ACTIVE SECTION HIGHLIGHT
   -------------------------------------------------------------------------- */
const initActiveSection = () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  if (!navLinks.length) return;

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.4, rootMargin: '-72px 0px 0px 0px' }
  );

  document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section);
  });
};

/* --------------------------------------------------------------------------
   4. SCROLL REVEAL ANIMATIONS
   -------------------------------------------------------------------------- */
const initScrollReveal = () => {
  const sections = document.querySelectorAll('.section');
  if (!sections.length) return;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Stagger child elements if needed
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
  );

  sections.forEach(section => revealObserver.observe(section));
};

/* --------------------------------------------------------------------------
   5. COUNT-UP ANIMATIONS
   -------------------------------------------------------------------------- */
const initCountUp = () => {
  const countElements = document.querySelectorAll('.count-up[data-target]');
  if (!countElements.length) return;

  const animateCount = (element) => {
    const target = parseInt(element.dataset.target, 10);
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      element.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        element.textContent = target;
      }
    };

    requestAnimationFrame(updateCount);
  };

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  countElements.forEach(el => countObserver.observe(el));
};

/* --------------------------------------------------------------------------
   6. SMOOTH SCROLL FOR ANCHOR LINKS
   -------------------------------------------------------------------------- */
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        e.preventDefault();
        const headerOffset = 72;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};

/* --------------------------------------------------------------------------
   7. PARALLAX SHAPES (subtle mouse movement effect)
   -------------------------------------------------------------------------- */
const initParallaxShapes = () => {
  // Only enable on desktop
  if (window.matchMedia('(max-width: 1024px)').matches) return;

  const shapes = document.querySelectorAll('.geo-shape');
  if (!shapes.length) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = [];
  let currentY = [];

  shapes.forEach((shape, i) => {
    currentX[i] = 0;
    currentY[i] = 0;
  });

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  const animate = () => {
    shapes.forEach((shape, i) => {
      const speed = 0.02 + (i * 0.01);
      currentX[i] += (mouseX * 30 * speed - currentX[i]) * 0.05;
      currentY[i] += (mouseY * 30 * speed - currentY[i]) * 0.05;

      const baseTransform = window.getComputedStyle(shape).transform;
      shape.style.transform = `translate(${currentX[i]}px, ${currentY[i]}px)`;
    });

    requestAnimationFrame(animate);
  };

  animate();
};

/* --------------------------------------------------------------------------
   8. CARD HOVER EFFECTS (add depth on mouse position)
   -------------------------------------------------------------------------- */
const initCardEffects = () => {
  const cards = document.querySelectorAll('.wc, .as-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `translateY(-6px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
};

/* --------------------------------------------------------------------------
   INIT — Run all components
   -------------------------------------------------------------------------- */
const init = () => {
  initScrollProgress();
  initMobileNav();
  initActiveSection();
  initScrollReveal();
  initCountUp();
  initSmoothScroll();
  initParallaxShapes();
  initCardEffects();
};

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}