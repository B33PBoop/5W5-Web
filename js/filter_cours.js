function createSelection(){
    const target = document.querySelector(".main-cours");
    if(target){
    //création du container pour les buttons
    const container = document.createElement("div");
    container.classList.add("selection");
    target.appendChild(container);

    const selectCours = document.querySelectorAll(".cours");

    const typeCours = ["Modelisation", "Design" , "Jeux", "Web", "Test"];

    //pour chaque cours dans la liste typeCours créer un bouton avec un event listener personnalisé
    typeCours.forEach(e => {
        const button = document.createElement("div");
        button.innerHTML = e;
        button.classList.add("button");

        button.addEventListener("click", () => {
            const value = e;
                selectCours.forEach(e => {
                        if(e.className.includes(`${value}`)){
                            e.style.display = "flex";
                        }
                        else{
                            e.style.display = "none";
                        }
                });
        })
        container.appendChild(button);
    });
}
}

//delay la function pour que la page est le temps de charger
setTimeout(()=>{
    createSelection();
}, 100)