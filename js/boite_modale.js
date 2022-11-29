console.log("boite modale");

const listeText = document.querySelectorAll(".text");

console.log(listeText);  

function boiteModale(){
    const listeText = document.querySelectorAll(".text");
    const listeCours = document.querySelectorAll(".Cours");

    const cible = document.querySelector(".main-cours");

    const container = document.createElement("div");
    const background = document.createElement("div");
    background.classList.add("background_boite");
    background.style.display = "none";
    cible.appendChild(background);



    container.classList.add("boite_modale");
    container.style.display = "none";
    background.addEventListener("click",()=>{
        container.style.display = "none";
        background.style.display = "none";
    });
    
    cible.appendChild(container);

    const boite = document.querySelector(".boite_modale");

    for(i =0; i < listeCours.length; i++){
        const target = i;
        listeCours[target].addEventListener("click", ()=>{
            container.style.display = "flex";
            const text = listeText[target];
            const clone = text.cloneNode(true);
            clone.style.display = "flex";
            background.style.display = "flex";
            boite.replaceChildren(clone);

        })
    }
}


setTimeout(()=>{
    boiteModale();
}, 500)