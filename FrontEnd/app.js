// token = localStorage.getItem('token');

 if (typeof token === 'string' && token.length > 0){
/* header partie haute*/
const header = document.querySelector('.header-elements')
header.style.display='flex';
const boutonPublication = document.createElement('button');
const modeEdition = document.createElement('p')
boutonPublication.innerText = 'publier les changements';
modeEdition.innerText = 'Mode édition';
header.appendChild(modeEdition);
header.appendChild(boutonPublication);
 
/* affichage modale*/
const modifierTarget = document.querySelector('.titlewrapper .lienmodal');
modifierTarget.style.display = 'block'; 
let modal = null;
const openModal = function(e) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    target.style.display = null;
    target.removeAttribute('aria-hidden');
    target.setAttribute('aria-modal', 'true');
    modal = target;
    modal.addEventListener('click', closeModal); 
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal);
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation);
};

const galerie = document.querySelector('.gallery2');
   function afficherProjectsModale() {
        fetch('http://localhost:5678/api/works')
          .then(response => response.json())
          .then(projects => {
            galerie.innerHTML='';
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

afficherProjectsModale()

/*fermeture de la modale*/

const closeModal = function(e) {
    if (modal === null) return;
    e.preventDefault();
    document.querySelector('.retour-bouton').click();
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
    modal.removeEventListener('click', closeModal);
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal);
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation);
    
    modal = null;
};

const stopPropagation = function(e) {
    e.stopPropagation();
};

document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click', openModal);
});



const h3 = document.querySelector('.modal-wrapper h3');
const wrapperGalerie= document.querySelector('.wrapper-gallery');
const boutonsGalerie = document.querySelector('.bouttons')

// modal ajout photo
const ajouterPhoto = document.querySelector('.ajouter-photo');
const ajouterModal = document.querySelector('.modal-wrapper')

ajouterPhoto.addEventListener ( 'click', ajoutPhotoModal )

function ajoutPhotoModal () {
  // cacher les éléments
  h3.style.display= 'none';
  wrapperGalerie.style.display= 'none';
  boutonsGalerie.style.display= 'none'; 

  //bouton retour
  const selectBoutonRetour = document.querySelector ('.bouton-retour');
  selectBoutonRetour.style.visibility = 'visible';

  selectBoutonRetour.addEventListener('click', retourBoutonFunction)

  function retourBoutonFunction () {
    modalWrapperAjouter.style.display = 'none';
    h3.style.display= 'block';
  wrapperGalerie.style.display= 'flex';
  boutonsGalerie.style.display= 'flex';
  selectBoutonRetour.style.visibility = 'hidden';
  }

 // Création des éléments de la modal ajout de photo 
 modalEnTrop = document.querySelector('.modal-wrapper-ajouter')
 if(modalEnTrop) modalEnTrop.remove()
 const modalWrapperAjouter = document.createElement('div');
 modalWrapperAjouter.classList.add('modal-wrapper-ajouter');

 
 const titleModalPhoto = document.createElement('h3');
 titleModalPhoto.innerText = 'Ajout Photo';
 
 const formulaireAjout = document.createElement('form'); 
 formulaireAjout.classList.add('formulaire-ajout-photo');
 
 const wrapperAjoutPhoto = document.createElement('div');
 wrapperAjoutPhoto.classList.add('wrapper-ajout-photo');
 const IconePhoto = document.createElement('img');
 IconePhoto.setAttribute('src', './assets/icons/image1.png');
 IconePhoto.setAttribute('alt', 'icone image');
 IconePhoto.classList.add('icone-photo');
 const inputAjoutPhoto = document.createElement('input');
 inputAjoutPhoto.setAttribute('name', 'photo-input');
 inputAjoutPhoto.classList.add('inputphoto');
 inputAjoutPhoto.type = 'file';
 inputAjoutPhoto.setAttribute('id', 'file');

 const boutonAjoutPhoto = document.createElement('label');
 boutonAjoutPhoto.setAttribute('for', 'file');
 boutonAjoutPhoto.classList.add('bouton-ajout-photo');
 boutonAjoutPhoto.innerText = '+ Ajouter photo';
 const specFichier = document.createElement('p');
 specFichier.innerHTML = 'jpg, png : 4mo max';
 specFichier.classList.add('spec-fichier');
 
 
 const divInputTitle = document.createElement('div');
 const ajoutPhotoTitle = document.createElement('input');
 ajoutPhotoTitle.setAttribute('name', 'photo-title');
 ajoutPhotoTitle.classList.add('photo-title');
 const ajoutPhotoTitleP = document.createElement('p');
 ajoutPhotoTitleP.innerText = 'Titre';
 
 const divInputCategorie = document.createElement('div');
 const ajoutPhotoCategorie = document.createElement('select');
 const optionPrincipaleCat= document.createElement('option');
 optionPrincipaleCat.value = '';
optionPrincipaleCat.text = '';
ajoutPhotoCategorie.add(optionPrincipaleCat); 
 ajoutPhotoCategorie.classList.add('photo-categorie');
 ajoutPhotoCategorie.setAttribute('name', 'photo-categorie');
 const ajoutPhotoCategorieP = document.createElement('p');
 ajoutPhotoCategorieP.innerText = 'Catégorie';
 
 
 const validerBouton = document.createElement('input');
 validerBouton.setAttribute('type', 'submit');
 validerBouton.setAttribute('value', "valider");
 validerBouton.classList.add('valider-Bouton');
 
 
 wrapperAjoutPhoto.appendChild(IconePhoto);
 wrapperAjoutPhoto.appendChild(inputAjoutPhoto);
 wrapperAjoutPhoto.appendChild(boutonAjoutPhoto);
 wrapperAjoutPhoto.appendChild(specFichier);
 
 divInputTitle.appendChild(ajoutPhotoTitleP);
 divInputTitle.appendChild(ajoutPhotoTitle);
 
 divInputCategorie.appendChild(ajoutPhotoCategorieP);
 divInputCategorie.appendChild(ajoutPhotoCategorie);
 
 // Ajout des inputs dans le formulaire
 formulaireAjout.appendChild(wrapperAjoutPhoto);
 formulaireAjout.appendChild(divInputTitle);
 formulaireAjout.appendChild(divInputCategorie);
 formulaireAjout.appendChild(validerBouton);
 
 modalWrapperAjouter.appendChild(titleModalPhoto);
 modalWrapperAjouter.appendChild(formulaireAjout);
 ajouterModal.appendChild(modalWrapperAjouter);

 // remplace les éléments de la modal lorsque l'utilisateur charge une image
 inputAjoutPhoto.addEventListener('change', function () {
  const reader = new FileReader();
  reader.onload = function () {
    // Cache les éléments de la modale
    IconePhoto.style.display = "none";
    boutonAjoutPhoto.style.display = "none";
    specFichier.style.display = "none";

    // Créer une image du résultat
    const createImage = document.createElement('img');
    createImage.src = reader.result;
    createImage.onload = function () {
      const aspectRatio = createImage.width / createImage.height;
      const imageWidth = 129; 
      const imageHeight = imageWidth / aspectRatio;

      createImage.width = imageWidth;
      createImage.height = imageHeight;
      wrapperAjoutPhoto.appendChild(createImage);
    };
    
  };
  reader.readAsDataURL(inputAjoutPhoto.files[0]);
});
 
// ajout des catégories dans le selecteur
 fetch('http://localhost:5678/api/categories')
 .then(response => response.json())
 .then(categories => {

   // création des boutons par categorie
   categories.forEach(categorie => {
     const option = document.createElement('option');
     option.value = categorie.id;
     option.text = categorie.name;
     ajoutPhotoCategorie.appendChild(option);
   });
 })
 .catch(error => {
   console.log(error, "impossible de récupérer les categories");
 });

//  // envoie du formulaire à l'api pour l'ajout
 
 validerBouton.addEventListener('click',function (event){
  event.preventDefault()
createWork()

});
 }
 }
