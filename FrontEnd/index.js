// Création de la galerie d'images

const gallery = document.querySelector('.gallery');
const filtres = document.querySelector('.filtres');

function createWorkElement(works) {
  const workElement = document.createElement('figure');
  const imageElement = document.createElement('img');
  imageElement.src = works.imageUrl;
  const titleElement = document.createElement('figcaption');
  titleElement.textContent = works.title;
  workElement.appendChild(imageElement);
  workElement.appendChild(titleElement);
  return workElement;
}

function afficherProjects() {
  fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(projects => {
      gallery.innerHTML = '';
      projects.forEach(works => {
        const workElement = createWorkElement(works);
        gallery.appendChild(workElement);
      });
    });
}

function filtrerProjetsParCategorie(categorie) {
  fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(data => {
      const projetsFiltres = data.filter(function (works) {
        return works.category.name === categorie;
      });
      gallery.innerHTML = '';
      projetsFiltres.forEach(works => {
        const workElement = createWorkElement(works);
        gallery.appendChild(workElement);
      });
    })
    .catch(error => {
      console.log(error, "impossible de récupérer les works");
    });
}

afficherProjects();

// création du bouton Tous
const boutonTous = document.createElement('button');
boutonTous.classList.add('bouton-tous');
boutonTous.innerHTML = 'Tous';
filtres.appendChild(boutonTous);
boutonTous.addEventListener('click', afficherProjects)

fetch('http://localhost:5678/api/categories')
  .then(response => response.json())
  .then(categories => {

    // création des boutons par categorie
    categories.forEach(categorie => {
      const boutonCategorie = document.createElement('button');
      boutonCategorie.classList.add('bouton-categorie');
      boutonCategorie.innerText = categorie.name;
      filtres.appendChild(boutonCategorie);
      boutonCategorie.addEventListener('click', function () {
        filtrerProjetsParCategorie(categorie.name);
      });
    });
  })
  .catch(error => {
    console.log(error, "impossible de récupérer les categories");
  });
  



     

   
  
