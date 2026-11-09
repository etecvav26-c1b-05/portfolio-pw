const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    menuToggle.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
    menuToggle.classList.toggle('is-open', !open);
    mainNav.classList.toggle('is-open', !open);
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      menuToggle.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

const form = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

if (form && formStatus) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = new FormData(form).get('name').trim();
    formStatus.textContent = `Valeu, ${name}! Sua resposta apareceu nesta demonstração.`;
    formStatus.classList.add('is-success');
    form.reset();
  });
}
