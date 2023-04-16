////////////////////////////variables/////////////////////////////
let gallery = document.querySelector("#gallery");
let newFigure = document.createElement("figure");
let newImg = document.createElement("img");
let newFigcaption = document.createElement("figcaption");



fetch('http://localhost:5678/api/works')

.then (res => res.json()
    .then(data => {
        newImg.src = data[0].imageUrl
        newFigcaption.textContent = data[0].title
    }))



    gallery.appendChild(newFigure);
    newFigure.appendChild(newImg);
    newFigure.appendChild(newFigcaption);
console.log(gallery);







    