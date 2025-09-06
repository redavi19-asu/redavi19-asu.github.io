// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

// Active link highlight on scroll
const sections = Array.from(document.querySelectorAll('main section[id]'));
const links = Array.from(document.querySelectorAll('#site-nav a[href^="#"]'));
const linkFor = id => links.find(l => l.getAttribute('href') === `#${id}`);

const onScroll = () => {
  let current = sections[0]?.id;
  const fromTop = window.scrollY + 120; // account for sticky header
  for (const sec of sections) {
    if (sec.offsetTop <= fromTop) current = sec.id;
  }
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${current}`));
};
window.addEventListener('scroll', onScroll);
onScroll();
