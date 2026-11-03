// src/menu.js

export default function createMenu() {
  const content = document.createElement('div');
  content.classList.add('menu-container');

  const title = document.createElement('h1');
  title.textContent = 'Notre Carte';
  content.appendChild(title);

  // 1. Déclaration explicite du tableau
  const menuItems = [
    {
      name: 'Entrée : Velouté de Potimarron',
      price: '12 €',
      description: 'Velouté onctueux, éclats de châtaignes torréfiées.'
    },
    {
      name: 'Plat : Filet de Bœuf Braisé',
      price: '28 €',
      description: 'Pièce de bœuf tendre, jus réduit au thym.'
    }
  ];

  // 2. Vérification de sécurité avant d'itérer (optionnel mais propre)
  if (menuItems && Array.isArray(menuItems)) {
    menuItems.forEach((item) => {
      const itemCard = document.createElement('div');
      itemCard.classList.add('menu-item');

      const itemName = document.createElement('h3');
      itemName.textContent = `${item.name} — ${item.price}`;

      const itemDesc = document.createElement('p');
      itemDesc.textContent = item.description;

      itemCard.appendChild(itemName);
      itemCard.appendChild(itemDesc);
      content.appendChild(itemCard);
    });
  }

  return content;
}