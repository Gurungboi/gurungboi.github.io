/* ==========================================================================
   META.JS — Head meta tags injected at runtime
   ==========================================================================
   NOTE: Open Graph and Twitter Card tags injected via JS will NOT be read
   by social media crawlers (LinkedIn, Slack, Twitter). If you need link
   previews, move these tags back into the HTML <head> directly.
   ========================================================================== */

(function () {
  var head = document.head;

  var tags = [
    { tag: 'meta', attrs: { name: 'description', content: 'Portfolio of Sunil Gurung — Senior Mobile Engineer with 7 years of iOS, Android, and Kotlin Multiplatform experience. Apple Pay, MVI architecture, and cross-platform expertise.' } },
    { tag: 'meta', attrs: { name: 'author', content: 'Sunil Gurung' } },
    { tag: 'meta', attrs: { name: 'theme-color', content: '#110E0B' } },

    /* Favicon */
    { tag: 'link', attrs: { rel: 'icon', type: 'image/png', href: 'Images/logo.png' } },
    { tag: 'link', attrs: { rel: 'apple-touch-icon', href: 'Images/logo.png' } },

    /* Open Graph */
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:title', content: 'Sunil Gurung — Senior iOS Engineer' } },
    { tag: 'meta', attrs: { property: 'og:description', content: 'From intern to Senior Engineer — 7 years shipping iOS, Android, KMP, and Apple Pay at scale.' } },
    { tag: 'meta', attrs: { property: 'og:image', content: 'Images/logo.png' } },

    /* Twitter Card */
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: 'Sunil Gurung — Senior iOS Engineer' } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: 'From intern to Senior Engineer — 7 years shipping iOS, Android, KMP, and Apple Pay at scale.' } }
  ];

  tags.forEach(function (entry) {
    var el = document.createElement(entry.tag);
    Object.keys(entry.attrs).forEach(function (key) {
      el.setAttribute(key, entry.attrs[key]);
    });
    head.appendChild(el);
  });
})();
