/* ── HOME PAGE JS ── */
document.addEventListener('DOMContentLoaded', () => {

  /* Scroll reveal */
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => observer.observe(el));

  /* Carousel hero split */
  const track = document.querySelector('.home-carousel-track');
  const dotsWrap = document.getElementById('homeDots');
  if (track) {
    const slides = track.querySelectorAll('.home-slide');
    const total = slides.length;
    let current = 0, timer;

    /* Build dots */
    slides.forEach((_, i) => {
      const d = document.createElement('button');
      d.className = 'home-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Slide ' + (i+1));
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    });

    function updateDots() {
      dotsWrap.querySelectorAll('.home-dot').forEach((d, i) => d.classList.toggle('active', i === current));
    }
    function goTo(i) {
      current = (i + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      updateDots();
      clearInterval(timer);
      timer = setInterval(() => goTo(current + 1), 5000);
    }
    timer = setInterval(() => goTo(current + 1), 5000);

    /* Swipe */
    let sx = 0;
    track.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = sx - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    });
  }

  /* Nombre de recettes */
  if (typeof recipes !== 'undefined') {
    const el = document.getElementById('heroRecipesCount');
    if (el) el.textContent = recipes.length;
  } else {
    const el = document.getElementById('heroRecipesCount');
    if (el) el.textContent = '100+';
  }

});
