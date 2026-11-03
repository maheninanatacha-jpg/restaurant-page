import createHome from "./home.js";
import createTabs from "./tabs.js";
import './style.css';

//fonction pour initialiser la page
function initialize(){
    const contentDiv = document.getElementById('content');

    //vider le contenu existant
    contentDiv.textContent = "";

    //ajouter la navigation en premier
    contentDiv.appendChild(createTabs());

    //zone dédié au contenu modifiable
    const pageContent = document.createElement("div");
    pageContent.id = "page-content";
    pageContent.appendChild(createHome());

    
    //changer la page d'accueil par défaut
    contentDiv.appendChild(pageContent);
}

initialize();