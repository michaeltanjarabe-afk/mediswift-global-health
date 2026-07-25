(function () {
  const section = document.getElementById('scroll-hero');
  if (!section) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const media = document.getElementById('scroll-hero-media');
  const content = document.getElementById('scroll-hero-content');
  const wordLeft = document.getElementById('hero-word-left');
  const wordRight = document.getElementById('hero-word-right');
  const video = media.querySelector('video');

  function isMobile() {
    return window.innerWidth < 768;
  }

  // Reduced motion / small-screen fallback: show the fully expanded,
  // non-interactive hero immediately. No scroll hijacking.
  if (prefersReduced) {
    section.classList.add('is-static-expanded');
    if (video) video.play().catch(() => {});
    return;
  }

  let progress = 0;
  let expanded = false;
  let touchStartY = 0;

  function applyProgress() {
    const baseW = 300;
    const baseH = 400;
    const addW = isMobile() ? 500 : 1150;
    const addH = isMobile() ? 180 : 380;
    media.style.width = baseW + progress * addW + 'px';
    media.style.height = baseH + progress * addH + 'px';

    const translate = progress * (isMobile() ? 32 : 30);
    wordLeft.style.transform = 'translateX(-' + translate + 'vw)';
    wordRight.style.transform = 'translateX(' + translate + 'vw)';

    section.style.setProperty('--hero-bg-opacity', String(1 - progress));

    const showContent = progress >= 1;
    content.style.opacity = showContent ? '1' : '0';
    content.style.pointerEvents = showContent ? 'auto' : 'none';
  }

  function onWheel(e) {
    if (expanded && e.deltaY < 0 && window.scrollY <= 5) {
      expanded = false;
      progress = 0.99;
      applyProgress();
      e.preventDefault();
      return;
    }
    if (!expanded) {
      e.preventDefault();
      progress = Math.min(Math.max(progress + e.deltaY * 0.0009, 0), 1);
      applyProgress();
      if (progress >= 1) expanded = true;
    }
  }

  function onTouchStart(e) {
    touchStartY = e.touches[0].clientY;
  }

  function onTouchMove(e) {
    if (!touchStartY) return;
    const y = e.touches[0].clientY;
    const deltaY = touchStartY - y;

    if (expanded && deltaY < -20 && window.scrollY <= 5) {
      expanded = false;
      progress = 0.99;
      applyProgress();
      e.preventDefault();
      return;
    }
    if (!expanded) {
      e.preventDefault();
      const factor = deltaY < 0 ? 0.008 : 0.005;
      progress = Math.min(Math.max(progress + deltaY * factor, 0), 1);
      applyProgress();
      if (progress >= 1) expanded = true;
      touchStartY = y;
    }
  }

  function onTouchEnd() {
    touchStartY = 0;
  }

  function onScroll() {
    if (!expanded) window.scrollTo(0, 0);
  }

  window.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('touchstart', onTouchStart, { passive: false });
  window.addEventListener('touchmove', onTouchMove, { passive: false });
  window.addEventListener('touchend', onTouchEnd);
  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', applyProgress);

  if (video) video.play().catch(() => {});
  applyProgress();

  window.MediSwiftScrollHero = { setProgress: (p) => { progress = p; expanded = p >= 1; applyProgress(); } };
})();
