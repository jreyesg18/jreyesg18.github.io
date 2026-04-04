/* ══════════════════════════════════
   MAIN JS — Javier Reyes | Portfolio
══════════════════════════════════ */

// ── AOS Animations ──
AOS.init({ duration: 650, once: true, offset: 50 });

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#mainNav .nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active-link');
        }
      });
    }
  });
}, { threshold: 0.25, rootMargin: '-80px 0px 0px 0px' });

sections.forEach(sec => observer.observe(sec));

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
      const nc = document.getElementById('navContent');
      if (nc.classList.contains('show')) bootstrap.Collapse.getInstance(nc)?.hide();
    }
  });
});
