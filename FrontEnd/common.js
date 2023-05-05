export const token = localStorage.getItem('token');

export const galerie = document.querySelector('.gallery2');

export function afficherProjects() {
        fetch('http://localhost:5678/api/works')
          .then(response => response.json())
          .then(projects => {
            projects.forEach(works => {
                const workElement = document.createElement('figure');
                const imageElement = document.createElement('img');
                const titleElement = document.createElement('p')
                
                imageElement.src = works.imageUrl;
                titleElement.innerText = 'éditer';
                var imgSupprimerElement = document.createElement('img');
                imgSupprimerElement.src = 'assets/icons/trash-2-16.png';

                // Créer un élément de bouton supprimer et ajouter l'image SVG à l'intérieur
                const boutonSupprimer = document.createElement('button');
                boutonSupprimer.classList.add('bouton-supprimer');
                boutonSupprimer.setAttribute('data-id', works.id);
                boutonSupprimer.appendChild(imgSupprimerElement);

                // Ajout du bouton au DOM  
                galerie.appendChild(workElement);
              workElement.appendChild(imageElement);
              workElement.appendChild(titleElement);
              workElement.appendChild(boutonSupprimer);
              return workElement
            });
            
        })};




    export const validerBouton = document.createElement('input');
    validerBouton.setAttribute('type', 'submit');
    validerBouton.setAttribute('value', "valider");
    validerBouton.classList.add('valider-Bouton');

    export const ajoutPhotoTitle = document.getElementsByName('photo-title');
    
   
