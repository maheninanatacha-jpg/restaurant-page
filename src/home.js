export default function createHome() {
    const content = document.createElement("div");
    content.classList.add("home-container");

    //Nom du restaurant
    const title = document.createElement("h1");
    title.textContent = "Le Gourmet Nomade";

    //Paragraphe d'introduction
    const description = document.createElement('p');
    description.textContent = 'Bienvenue dans notre établissement où fusionnent traditions culinaires et saveurs d\'exception. Des produits frais, cuisinés avec passion.';

    // Image (Webpack gère les assets si configuré, ou une URL externe/locale)
    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4'; // Exemple d'image de restaurant
    image.alt = 'Intérieur du restaurant';
    image.width = 500;

    // Citation / Avis
    const quote = document.createElement('blockquote');
    quote.textContent = '"La meilleure table de la ville, un service irréprochable !" — Critique Gastronomique';

    // Assemblage des éléments dans le conteneur principal
    content.appendChild(title);
    content.appendChild(image);
    content.appendChild(description);
    content.appendChild(quote);

    return content;
}