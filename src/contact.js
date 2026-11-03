// src/contact.js

export default function createContact() {
    const content = document.createElement('div');
    content.classList.add('contact-container');

    const title = document.createElement('h1');
    title.textContent = 'Nous Contacter';

    const address = document.createElement('p');
    const strong = document.createElement('strong');
    strong.textContent = "Adresse :";
    address.append(strong);
    address.append('15 Rue de la Gastronomie, 75001 Paris');

    const phone = document.createElement('p');
    const strongPhone = document.createElement('strong');
    phone.append(strongPhone);
    strongPhone.textContent = "Téléphone :";
    phone.append('01 23 45 67 89');


    // La bonne pratique sans innerHTML
    const email = document.createElement('p');
    const strongEmail = document.createElement('strong');
    strongEmail.textContent = 'Email : ';

    // On ajoute le libellé fort et le texte séparément
    email.appendChild(strongEmail);
    email.append('contact@legourmetnomade.fr');

    const hours = document.createElement('p');
    const strongHours = document.createElement('strong');
    strongHours.textContent = "Heures d'ouverture :";
    hours.append(strongHours);
    
    hours.append('Mardi - Dimanche : 12h00 - 14h30 / 19h00 - 22h30');
   
    content.appendChild(title);
    content.appendChild(address);
    content.appendChild(phone);
    content.appendChild(email);
    content.appendChild(hours);

    return content;
}