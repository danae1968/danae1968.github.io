(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

  const sections = document.querySelectorAll('main > section:not(.hero)');
  const reveal = (section) => {
    section.classList.remove('reveal-pending');
    observer.unobserve(section);
  };
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) reveal(entry.target);
    }
  }, { rootMargin: '0px 0px -48px 0px' });

  for (const section of sections) {
    if (section.getBoundingClientRect().top < window.innerHeight) continue;
    observer.observe(section);
    section.classList.add('reveal-section', 'reveal-pending');
  }

  document.addEventListener('focusin', (event) => {
    const section = event.target.closest('.reveal-pending');
    if (section) reveal(section);
  });
  reducedMotion.addEventListener('change', (event) => {
    if (!event.matches) return;
    observer.disconnect();
    for (const section of sections) section.classList.remove('reveal-pending');
  });
})();
