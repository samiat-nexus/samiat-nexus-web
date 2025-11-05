// responsive.js
(function () {
  // path to your include file
  const SIDEBAR_URL = '/includes/sidebar.html';

  // debounce helper
  function debounce(fn, wait) {
    let t;
    return function () {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, arguments), wait);
    };
  }

  // inject sidebar include and then setup syncing
  function initSidebarInclude() {
    // do nothing if sidebar already exists
    if (document.getElementById('mobileSidebar')) return setupSync();

    fetch(SIDEBAR_URL, { cache: "no-store" })
      .then(res => {
        if (!res.ok) throw new Error('Sidebar include not found: ' + SIDEBAR_URL);
        return res.text();
      })
      .then(html => {
        // create a wrapper and insert the first element (the nav)
        const temp = document.createElement('div');
        temp.innerHTML = html.trim();
        const node = temp.firstElementChild;
        if (!node) return;
        // append to body (as first child so it appears before page content)
        document.body.insertBefore(node, document.body.firstChild);
        setupSync();
      })
      .catch(err => {
        // quietly fail but log to console for debugging
        console.warn('Could not load sidebar include:', err);
      });
  }

  // move buttons between hero and sidebar depending on width
  function setupSync() {
    const heroContent = document.querySelector('.hero-content');
    const heroButtons = document.querySelector('.hero-buttons');
    const sidebar = document.getElementById('mobileSidebar');
    const sidebarPlaceholder = sidebar ? sidebar.querySelector('.sidebar-hero-buttons') : null;

    // if elements missing, nothing to do
    if (!heroButtons || !heroContent || !sidebar || !sidebarPlaceholder) {
      // still attach resize listener so if elements appear later we can re-run
      window.addEventListener('resize', debounce(moveIfNeeded, 120));
      return;
    }

    function moveIfNeeded() {
      const isMobile = window.innerWidth <= 991;

      if (isMobile) {
        // Move hero-buttons into sidebar if not already there
        if (heroButtons.parentElement !== sidebarPlaceholder) {
          sidebarPlaceholder.appendChild(heroButtons);
          // styling for stacked look
          heroButtons.style.display = 'flex';
          heroButtons.style.flexDirection = 'column';
          heroButtons.style.gap = '12px';
        }
        // mark sidebar visible for a11y
        sidebar.setAttribute('aria-hidden', 'false');
      } else {
        // Move hero-buttons back to its original place if not already there
        if (heroButtons.parentElement !== heroContent) {
          heroContent.appendChild(heroButtons);
          heroButtons.style.display = 'flex';
          heroButtons.style.flexDirection = 'row';
          heroButtons.style.gap = '';
        }
        sidebar.setAttribute('aria-hidden', 'true');
      }
    }

    // initial run
    moveIfNeeded();

    // on resize, debounce to avoid thrash
    window.addEventListener('resize', debounce(moveIfNeeded, 120));
  }

  // Start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSidebarInclude);
  } else {
    initSidebarInclude();
  }
})();
