////////////////////////////variables/////////////////////////////
let gallery = document.querySelector("#gallery");




fetch('http://localhost:5678/api/works')

.then (res => res.json()
    .then(data => {
        for(let id  of data ){
            
            let newFigure = document.createElement("figure");
            let newImg = document.createElement("img");
            let newFigcaption = document.createElement("figcaption");
/////////////////// ajouter boucle qui navigue dans le ttableu pour ajouter 1 a data a chacue loop
            newImg.src = data[0].imageUrl
            newFigcaption.textContent = data[0].title   
            
            
        gallery.appendChild(newFigure);
        newFigure.appendChild(newImg);
        newFigure.appendChild(newFigcaption);
        
        }
        console.log(gallery);
        console.log(data);
    }))
    


    
    