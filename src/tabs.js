import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

export default function tabs(){
    const nav = document.createElement('nav');
  nav.classList.add('nav-bar');

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Accueil';
  homeBtn.classList.add('tab-btn');
  homeBtn.addEventListener('click', () => switchTab(createHome));

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  menuBtn.classList.add('tab-btn');
  menuBtn.addEventListener('click', () => switchTab(createMenu));

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';
  contactBtn.classList.add('tab-btn');
  contactBtn.addEventListener('click', () => switchTab(createContact));

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function switchTab(createPageContent) {
  const pageContent = document.getElementById('page-content');
  if (pageContent) {
    pageContent.textContent = ''; // Vider uniquement le contenu sous la navbar
    pageContent.appendChild(createPageContent());
  }
}