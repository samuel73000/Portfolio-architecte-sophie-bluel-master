// envoie du formulaire à l'api pour l'ajout

function createWork(){
 let ajoutPhotoTitle = document.querySelector('.photo-title');
 let ajoutPhotoCategorie = document.querySelector('.photo-categorie');
 let inputAjoutPhoto = document.querySelector('.inputphoto');
  if (ajoutPhotoTitle.value==''){
    alert('le titre est obligatoire')
    return
  }
  if (ajoutPhotoCategorie.value==''){
    alert('la catégorie est obligatoire')
    return
  }
  if (inputAjoutPhoto.value==''){
   alert('la photo est obligatoire')
   return
  }
  let formData = new FormData();
  formData.append("image", inputAjoutPhoto.files[0])
  formData.append("title", ajoutPhotoTitle.value)
  formData.append("category", ajoutPhotoCategorie.value)
  
  fetch('http://localhost:5678/api/works', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + token
    },
    body: formData
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('erreur lors du transfert');
  })
  .then(data => {
    console.log(data);
    document.querySelector('.js-modal-close').click();
    afficherProjects();
    afficherProjectsModale();

  })
  .catch(error => {
    console.error(error);
  });
}

 

 