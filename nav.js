// Shared navigation and language system
const MAILCHIMP_URL = "https://expocourirmtl.us3.list-manage.com/subscribe/post?u=7fe7dbd24e7d56eac640e1bd0&id=2d161b6c83&f_id=00e3cce0f0";

let currentLang = localStorage.getItem('ecm-lang') || 'fr';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('ecm-lang', lang);
  document.getElementById('btn-fr').classList.toggle('active', lang === 'fr');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.querySelectorAll('[data-fr]').forEach(el => {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') return;
    const val = el.getAttribute('data-' + lang);
    if (val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-placeholder-fr]').forEach(el => {
    el.placeholder = el.getAttribute('data-placeholder-' + lang);
  });
  document.documentElement.lang = lang;
}

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function initLang() {
  setLang(currentLang);
}

// Scroll observer for fade-in
function initObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fi, .fi2, .fi3').forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initObserver();
});
