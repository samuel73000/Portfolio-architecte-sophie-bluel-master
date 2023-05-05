// import { token, galerie } from './common.js';

const galerie = document.querySelector('.gallery2');
galerie.addEventListener('click', function (event) {
    if (event.target.closest('.bouton-supprimer')) {
      const boutonSupprimer = event.target.closest('.bouton-supprimer');
      const deleteById = boutonSupprimer.getAttribute('data-id');
      console.log(deleteById);
  
    $.confirm({
      title: 'Confirmer!',
      content: 'Vous êtes sûr de vouloir supprimer cette photo?',
      buttons: {
          confirmer: function () {
              // Action à effectuer si l'utilisateur confirme
              fetch(`http://localhost:5678/api/works/${deleteById}`, {
                  method: 'DELETE',
                  headers: {
                      'Authorization': 'Bearer ' + token
                  },
                  body: deleteById
              })
              .then(response => {
                  if (response.ok) {
                      console.log('Element supprimé');
                  } else {
                      throw new Error('Erreur lors de la suppression');
                  }
                //   return response.json();
              })
              .then(data => {
                  console.log(data);
                    afficherProjectsModale();
                    afficherProjects();
              })
              .catch(error => {
                  console.error(error);
              });
          },
          annuler: function () {
          },   
      }
  });
  }});