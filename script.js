// ===== NAV SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== MOBILE MENU =====
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// ===== MENU TABS =====
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // remove active from all tabs
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // hide all grids
    document.querySelectorAll('.menu-grid').forEach(g => g.classList.add('hidden'));

    // show target
    const target = tab.dataset.tab;
    const grid = document.getElementById(target);
    if (grid) {
      grid.classList.remove('hidden');
      // animate cards
      grid.querySelectorAll('.menu-card').forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 60);
      });
    }
  });
});

// ===== GUEST COUNTER =====
let guestCount = 2;
function changeCount(delta) {
  guestCount = Math.max(1, Math.min(20, guestCount + delta));
  document.getElementById('guestCount').textContent = guestCount;
}

// ===== RESERVATION FORM =====
function submitResa(e) {
  e.preventDefault();
  const form = document.getElementById('resaForm');
  const success = document.getElementById('resaSuccess');

  // Simulate submission
  const btn = form.querySelector('.submit-btn');
  btn.textContent = 'Envoi en cours...';
  btn.disabled = true;

  setTimeout(() => {
    form.classList.add('hidden');
    success.classList.remove('hidden');
  }, 1200);
}

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-card, .g-item, .contact-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});

// ===== SET MIN DATE FOR RESERVATION =====
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}
