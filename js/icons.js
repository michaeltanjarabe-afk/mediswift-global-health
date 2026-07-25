/* Lightweight inline-SVG icon set (stroke-based, 24x24, currentColor).
   Usage: <i data-icon="cart"></i>  -> replaced with inline <svg> on load. */
(function () {
  const ICONS = {
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    cart: '<path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="9.5" cy="20" r="1.4" fill="currentColor" stroke="none"/><circle cx="17.5" cy="20" r="1.4" fill="currentColor" stroke="none"/>',
    phone: '<path d="M6.6 3.5h3l1.4 4.6-2.2 1.6a13 13 0 0 0 5.7 5.7l1.6-2.2 4.6 1.4v3a1.6 1.6 0 0 1-1.7 1.6A16.4 16.4 0 0 1 5 5.2a1.6 1.6 0 0 1 1.6-1.7Z"/>',
    mail: '<rect x="3.2" y="5.5" width="17.6" height="13" rx="2"/><path d="M4 6.5l8 6.5 8-6.5"/>',
    pin: '<path d="M12 22s7-7.4 7-12.6A7 7 0 0 0 5 9.4C5 14.6 12 22 12 22Z"/><circle cx="12" cy="9.4" r="2.4"/>',
    clock: '<circle cx="12" cy="12" r="8.6"/><path d="M12 7.4V12l3.4 2"/>',
    facebook: '<path d="M14.5 21v-7.2h2.4l.4-2.9h-2.8v-1.9c0-.8.3-1.5 1.6-1.5h1.3V4.9c-.2 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7v2.4H9.3v2.9h2.4V21h2.8Z" fill="currentColor" stroke="none"/>',
    messenger: '<path d="M12 3.5c-5 0-9 3.6-9 8.2 0 2.6 1.3 5 3.4 6.5V21l3.2-1.8c.8.2 1.6.3 2.4.3 5 0 9-3.6 9-8.3s-4-8.2-9-8.2Z"/><path d="M6.8 13.4l3.1-3.3 2.6 2 3-3.3-3.1 3.4-2.6-2-3 3.2Z" fill="currentColor" stroke="none"/>',
    'chevron-right': '<path d="M9 5.5l7 6.5-7 6.5"/>',
    'chevron-down': '<path d="M5.5 9l6.5 7 6.5-7"/>',
    check: '<path d="M4.5 12.5l5 5 10-11"/>',
    'check-circle': '<circle cx="12" cy="12" r="8.6"/><path d="M8.2 12.3l2.7 2.7 5-5.6"/>',
    'shield-check': '<path d="M12 3.2 19 6v5.6c0 4.8-3 8-7 9.2-4-1.2-7-4.4-7-9.2V6Z"/><path d="M8.7 12.2l2.4 2.4 4.3-4.8"/>',
    star: '<path d="M12 3.2l2.7 5.6 6.1.8-4.5 4.3 1.1 6.1L12 17l-5.4 3 1.1-6.1-4.5-4.3 6.1-.8Z"/>',
    quote: '<path d="M9.5 7.5c-2.8 0-4.8 2.1-4.8 5.3 0 2.7 1.6 4.5 3.9 4.5.2 2-1.1 3.4-3 3.9l.5 1.3c3.2-.7 5.2-3 5.2-6.6V7.5Zm9 0c-2.8 0-4.8 2.1-4.8 5.3 0 2.7 1.6 4.5 3.9 4.5.2 2-1.1 3.4-3 3.9l.5 1.3c3.2-.7 5.2-3 5.2-6.6V7.5Z" fill="currentColor" stroke="none"/>',
    search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="M20 20l-4.3-4.3"/>',
    plus: '<path d="M12 4.5v15M4.5 12h15"/>',
    minus: '<path d="M4.5 12h15"/>',
    trash: '<path d="M4.5 7h15M9.5 7V5a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 5v2m3 0-.8 12.2a2 2 0 0 1-2 1.8H9.3a2 2 0 0 1-2-1.8L6.5 7"/>',
    'arrow-right': '<path d="M4.5 12h15M13.5 5.5 20 12l-6.5 6.5"/>',
    'arrow-up-right': '<path d="M6.5 17.5 17.5 6.5M9 6.5h8.5V15"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.2"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/>',
    users: '<circle cx="9" cy="8.4" r="3.2"/><path d="M3.2 19c.7-3 3-4.8 5.8-4.8s5.1 1.8 5.8 4.8"/><circle cx="17" cy="9" r="2.6"/><path d="M15.8 14.4c2.4.2 4.2 1.9 4.8 4.4"/>',
    house: '<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9.5h12V10"/><path d="M9.8 19.5V14h4.4v5.5"/>',
    truck: '<rect x="2.5" y="8" width="12" height="9" rx="1.4"/><path d="M14.5 11h3.6L21 14.4V17h-6.5"/><circle cx="7" cy="19" r="1.7"/><circle cx="17.2" cy="19" r="1.7"/>',
    'graduation-cap': '<path d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5Z"/><path d="M6.5 11.5v4c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4"/><path d="M21 10v5"/>',
    heart: '<path d="M12 20s-7.5-4.6-9.5-9.3C1.2 7.2 3.4 4 6.8 4c2 0 3.5 1 5.2 3 1.7-2 3.2-3 5.2-3 3.4 0 5.6 3.2 4.3 6.7C19.5 15.4 12 20 12 20Z"/>',
    'first-aid': '<rect x="3" y="6.5" width="18" height="13" rx="2"/><path d="M8.5 6.5V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5"/><path d="M12 10.5v6M9 13.5h6"/>',
    stethoscope: '<path d="M6 3.5v6.3a4 4 0 0 0 8 0V3.5"/><path d="M8 3.5H5.4M14 3.5h2.6"/><path d="M18.5 12v2.8a5.5 5.5 0 0 1-11 0V12"/><circle cx="19.6" cy="12" r="2"/>',
    syringe: '<path d="M20 4 16 8m-.7 1.7L4.6 20.4 3 18.8 13.7 8.1M18.3 5.7l-4.6 4.6M11 6l7 7"/>',
    pill: '<rect x="3.5" y="9" width="17" height="7" rx="3.5" transform="rotate(-30 12 12.5)"/><path d="M9.2 8.4 15 16" />',
    bag: '<path d="M4 9.5h16l-1 10.5H5Z"/><path d="M8.5 9.5V7a3.5 3.5 0 0 1 7 0v2.5"/><path d="M12 12v4.5M9.7 14.2h4.6"/>',
    thermometer: '<path d="M12 3.5a2.2 2.2 0 0 0-2.2 2.2v8.3a3.8 3.8 0 1 0 4.4 0V5.7A2.2 2.2 0 0 0 12 3.5Z"/><path d="M12 10.5v5"/>',
    hospital: '<rect x="4" y="4" width="16" height="16.5" rx="1.6"/><path d="M12 8v6M9 11h6"/><path d="M8 21v-2.5M16 21v-2.5"/>',
    sparkle: '<path d="M12 3.5 13.4 9l5.1 1.4-5.1 1.4L12 17.3 10.6 11.8 5.5 10.4l5.1-1.4Z" fill="currentColor" stroke="none"/>',
    filter: '<path d="M4 5.5h16l-6.2 7.4v5.4l-3.6 1.8v-7.2Z"/>',
    send: '<path d="M4 12 20 4l-7 16-2.6-6.4L4 12Z"/>',
    lock: '<rect x="5" y="10.5" width="14" height="9.5" rx="1.8"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
    award: '<circle cx="12" cy="9" r="5.5"/><path d="M9 13.8 7.5 21 12 18.5 16.5 21 15 13.8"/>',
    clipboard: '<rect x="5.5" y="4.5" width="13" height="16" rx="2"/><rect x="9" y="3" width="6" height="3" rx="1"/><path d="M8.5 11h7M8.5 14.5h7M8.5 18h4.5"/>',
    home: '<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9.5h12V10"/>',
    'shield-plus': '<path d="M12 3.2 19 6v5.6c0 4.8-3 8-7 9.2-4-1.2-7-4.4-7-9.2V6Z"/><path d="M12 8.5v6.5M8.7 11.8h6.6"/>',
  };

  function mount(root) {
    (root || document).querySelectorAll('[data-icon]').forEach((el) => {
      const name = el.getAttribute('data-icon');
      const body = ICONS[name];
      if (!body) return;
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '1.75');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      svg.setAttribute('aria-hidden', 'true');
      svg.classList.add('ms-icon');
      if (el.className) svg.setAttribute('class', 'ms-icon ' + el.className);
      const inlineStyle = el.getAttribute('style');
      if (inlineStyle) svg.setAttribute('style', inlineStyle);
      svg.innerHTML = body;
      el.replaceWith(svg);
    });
  }

  window.MediSwiftIcons = { mount, list: ICONS };
  document.addEventListener('DOMContentLoaded', () => mount());
})();
