(function () {
  /* ---- Sticky header shadow on scroll ---- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Mobile nav drawer ---- */
  const nav = document.querySelector('.mobile-nav');
  const openBtn = document.querySelector('[data-nav-open]');
  const closeEls = document.querySelectorAll('[data-nav-close]');
  function setNav(open) {
    if (!nav) return;
    nav.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (openBtn) openBtn.setAttribute('aria-expanded', String(open));
  }
  if (openBtn) openBtn.addEventListener('click', () => setNav(true));
  closeEls.forEach((el) => el.addEventListener('click', () => setNav(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setNav(false); });

  /* ---- Scroll-reveal via IntersectionObserver ---- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-scale');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el, i) => {
      el.style.setProperty('--reveal-delay', (i % 6) * 60 + 'ms');
      io.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---- Toast ---- */
  function ensureToast() {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      toast.innerHTML = '<i data-icon="check-circle"></i><span class="toast-msg"></span>';
      document.body.appendChild(toast);
      if (window.MediSwiftIcons) window.MediSwiftIcons.mount(toast);
    }
    return toast;
  }
  let toastTimer;
  function showToast(message) {
    const toast = ensureToast();
    toast.querySelector('.toast-msg').textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
  }
  window.MediSwiftToast = { show: showToast };

  /* ---- Footer year ---- */
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* ---- Product filter chips (shop page) ---- */
  const chips = document.querySelectorAll('[data-filter]');
  if (chips.length) {
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chips.forEach((c) => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        const value = chip.getAttribute('data-filter');
        document.querySelectorAll('[data-product-card]').forEach((card) => {
          const match = value === 'all' || card.getAttribute('data-category') === value;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }
})();
