////////////////////////////variables/////////////////////////////
let gallery = document.querySelector("#gallery");
let all = document.querySelector("#idAll");
let Objet = document.querySelector("#id1");
let Appartements = document.querySelector("#id2");
let HotelsRestaurants = document.querySelector("#id3")


//  projets 
fetch('http://localhost:5678/api/works')
.then (res => res.json()
    .then(data => {
        for(let id  in data ){
            
            let newFigure = document.createElement("figure");// cree un element figure dans le html
            let newImg = document.createElement("img");// cree un element img dans le html
            let newFigcaption = document.createElement("figcaption");// cree un element figcaption dans le html
            newFigure.setAttribute("id",data[id].categoryId);// cree id pour les boutton des filtre 
            newImg.src = data[id].imageUrl // defini les image des projet
            newFigcaption.textContent = data[id].title   // defini les titre des projet
        gallery.appendChild(newFigure);// mais figure dans la div gallery
        newFigure.appendChild(newImg);// mais img dans figure
        newFigure.appendChild(newFigcaption);// mais figcaption dans figure
        }
  }))


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

// trouver un moyen de faire disparaitre les projet qui on pas la bonne id 

    all.addEventListener('click' , function() {
        console.log("1");
    });

    Objet.addEventListener('click' , function() {
        console.log("2");
    });
    Appartements.addEventListener('click' , function() {
        console.log("3");
    });
    HotelsRestaurants.addEventListener('click' , function() {
        console.log("4");
    });