// recuperation des inputs email et mdp et btn submit
let user = document.querySelector("#email mdp");
let error = document.querySelector("#error");
let submit = document.querySelector("#submit");
// addeventlistener du btn submit
submit.addEventListener('submit' ,async (event) => {
    event.preventDfault();
// envoyer les info de connexion a l'api pour authentification
const response = await fetch('http://localhost:5678/api/users/login',{
method:'POST',
    headers:{
    'Content-Type': 'application/json;'
},
    body: JSON.stringify(user)
});

if (response.ok){
    //recuperer le token depuis l'api
    const token = await reponse.json();

//enregistrer le token dans le stockage local
    localStorage.setItem('token',token);

//redirige l'utilisateur vers la page d'accueill
    window.location.href='index.html';

}else{
    //Afficher un message d'erreur si les info de connexion sont invalides
    error.textContent = 'Nom d\'utilisateur ou mot de passe incorrect';
}

});


function updateLoginButton(){
    const loginButton = document.querySelector('.lienlogin');
    const tokken = localStorage.getItem('token');
    const isLogged = () => (tokken ? true : false);

    if(isLogged){
        loginButton.innerHTML='Logout';
    }else {
        loginButton.innerHTML='Login'
    }
}
updateLoginButton();