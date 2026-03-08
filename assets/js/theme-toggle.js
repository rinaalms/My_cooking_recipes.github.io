/* ============================================================
   CulinArt — Theme Toggle : Sombre ↔ Clair
   ============================================================ */
(function () {
  const STORAGE_KEY = 'culinart-theme';
  const html = document.documentElement;

  /* ── Lire la préférence sauvegardée ou système ── */
  function getPreferred() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  /* ── Appliquer le thème ── */
  function applyTheme(theme, animate) {
    if (animate) {
      html.style.setProperty('--transition-speed', '0.35s');
    }
    html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    /* Mettre à jour tous les boutons toggle */
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.setAttribute('data-tooltip',
        theme === 'dark' ? 'Mode clair' : 'Mode sombre'
      );
      btn.setAttribute('aria-label',
        theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'
      );
      btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
    });
  }

  /* ── Toggle ── */
  function toggle() {
    const current = html.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark', true);
  }

  /* ── Créer le bouton et l'injecter ── */
  function createToggle() {
    const existing = document.querySelector('.theme-toggle');
    if (existing) { existing.addEventListener('click', toggle); return; }

    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Changer de thème');
    btn.innerHTML = `
      <!-- Lune (mode sombre actif) -->
      <svg class="tt-moon" width="20" height="20" viewBox="0 0 24 24"
           fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
      <!-- Soleil (mode clair actif) -->
      <svg class="tt-sun" width="20" height="20" viewBox="0 0 24 24"
           fill="none" stroke="#ea6d0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1"  x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3"  y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
      </svg>`;

    btn.addEventListener('click', toggle);
    document.body.appendChild(btn);
  }

  /* ── Init ── */
  function init() {
    const theme = getPreferred();
    /* Appliquer sans animation au chargement */
    html.setAttribute('data-theme', theme);

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        createToggle();
        applyTheme(theme, false);
      });
    } else {
      createToggle();
      applyTheme(theme, false);
    }

    /* Écouter les changements système */
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'light' : 'dark', true);
      }
    });
  }

  init();
})();
