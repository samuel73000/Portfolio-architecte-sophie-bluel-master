////////////////////////////variables/////////////////////////////
const reponse = await fetch("http://localhost:5678/api/works")
const works = await reponse.json();
let gallery = document.querySelector("#gallery");
let all = document.querySelector("#idAll");
let Objet = document.querySelector("#id1");
let Appartements = document.querySelector("#id2");
let HotelsRestaurants = document.querySelector("#id3");


//  projets 

    function genererfigure(works){ //fonction pour projet
        for(let i=0; i< works.length; i++){ //boucle for pour les projet
            
            let newFigure = document.createElement("figure");// cree un element figure dans le html
            let newImg = document.createElement("img");// cree un element img dans le html
            let newFigcaption = document.createElement("figcaption");// cree un element figcaption dans le html
            newFigure.setAttribute("id",works[i].categoryId);// cree id pour les boutton des filtre 
            newImg.src = works[i].imageUrl // defini les image des projet
            newFigcaption.textContent = works[i].title   // defini les titre des projet
        gallery.appendChild(newFigure);// mais figure dans la div gallery
        newFigure.appendChild(newImg);// mais img dans figure
        newFigure.appendChild(newFigcaption);// mais figcaption dans figure
        }
       
// les non des filtre pour le html 
    fetch('http://localhost:5678/api/categories')
    .then(res => res.json()
    .then (data => {
        let all = document.querySelector("#idAll");// recupere la btn all
        let Objet = document.querySelector("#id1");// recupere la btn objet
        let Appartements = document.querySelector("#id2");// recupere la btn appartements
        let HotelsRestaurants = document.querySelector("#id3");// recupere la btn hotelEtRestau
        Objet.textContent =data[0].name //donne le nom au btn objet
        Appartements.textContent =data[1].name//donne le nom au btn Apartements
        HotelsRestaurants.textContent =data[2].name//donne le nom au btn hotelEtRestau
    }))
    
    }
    genererfigure(works);
//partie filtre

    all.addEventListener('click' , function() {
        const allfiltre = works.filter(function(works){ //variable filtreobjet
            return works.categoryId === 1,2,3;// creee le filtre!!!!!
        });
        document.querySelector("#gallery").innerHTML = "";//suprimer ce qu'il a sur la page
        genererfigure(allfiltre);//faire appararaitre ce qu'il y dans le filtre
    });

    Objet.addEventListener('click' , function() { // ecouter le btn objet
        const objetfiltre = works.filter(function(works){ //variable filtreobjet
            return works.categoryId === 1;// creee le filtre!!!!!
        });
        document.querySelector("#gallery").innerHTML = "";//suprimer ce qu'il a sur la page
        genererfigure(objetfiltre);//faire appararaitre ce qu'il y dans le filtre
    });
    Appartements.addEventListener('click' , function() {
        const appartementfiltre = works.filter(function(works){ //variable filtreobjet
            return works.categoryId === 2;// creee le filtre!!!!!
        });
        document.querySelector("#gallery").innerHTML = "";//suprimer ce qu'il a sur la page
        genererfigure(appartementfiltre);//faire appararaitre ce qu'il y dans le filtre

    });
    HotelsRestaurants.addEventListener('click' , function() {
        const HotelsRestaurantsfiltre = works.filter(function(works){ //variable filtreobjet
            return works.categoryId === 3;// creee le filtre!!!!!
        });
        document.querySelector("#gallery").innerHTML = "";//suprimer ce qu'il a sur la page
        genererfigure(HotelsRestaurantsfiltre);//faire appararaitre ce qu'il y dans le filtre
    });
    
 //function pour lien login 
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