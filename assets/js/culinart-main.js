/* ============================================================
   CulinArt — Script principal unifié
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── HEADER SCROLL ── */
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  /* ── BURGER MENU ── */
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('open');
    });

    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('open');
      });
    });
  }

  /* ── HERO CAROUSEL ── */
  const slides = document.querySelector('.carousel-slides');
  const dotsContainer = document.querySelector('.carousel-dots');

  if (slides) {
    const slideEls = slides.querySelectorAll('.carousel-slide');
    const total = slideEls.length;
    let current = 0;
    let timer;

    // Build dots
    if (dotsContainer) {
      slideEls.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Diapositive ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      });
    }

    function updateDots() {
      if (!dotsContainer) return;
      dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === current);
      });
    }

    function goTo(index) {
      current = (index + total) % total;
      slides.style.transform = `translateX(-${current * 100}%)`;
      updateDots();
      resetTimer();
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(next, 5000);
    }

    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);

    // Touch / swipe support
    let touchStartX = 0;
    slides.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    slides.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    });

    // Pause on hover
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.addEventListener('mouseenter', () => clearInterval(timer));
      hero.addEventListener('mouseleave', resetTimer);
    }

    resetTimer();
  }

  /* ── HERO CONTENT APPEAR ── */
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    setTimeout(() => heroContent.classList.add('show'), 250);
  }

  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.hidden-top, .fade-in-up');

  function isInView(el) {
    return el.getBoundingClientRect().top <= window.innerHeight * 0.88;
  }

  function revealAll() {
    revealEls.forEach(el => {
      if (isInView(el)) el.classList.add('show');
    });
  }

  window.addEventListener('scroll', revealAll, { passive: true });
  window.addEventListener('load', revealAll);

  /* ── YEAR ── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
