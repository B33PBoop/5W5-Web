function createSelection(){
    const target = document.querySelector(".main-cours .filter");
    if(target){
    const targetFilter = document.querySelector(".main-cours .filter p");
    targetFilter.innerHTML = "<p> Matière <span class='material-symbols-outlined'>keyboard_arrow_right</span> </p>";
    if(target){
    //création du container pour les buttons
    const container = document.createElement("div");
    container.classList.add("selection");
    target.appendChild(container);

    const menu = document.querySelector(".main-cours .filter div");

    targetFilter.addEventListener("click", ()=>{
        
        
        if(menu.style.width == "0px"){
            menu.style.width = "60%";
            targetFilter.innerHTML = "<p> Matière <span class='material-symbols-outlined'>keyboard_arrow_left</span> </p>";
            
        }else{
            menu.style.width = "0px";
            targetFilter.innerHTML = "<p> Matière <span class='material-symbols-outlined'>keyboard_arrow_right</span> </p>";
        }
    })

    const selectCours = document.querySelectorAll(".cours");

    const typeCours = ["Modelisation", "Design" , "Jeux", "Web", "cours"];

    //pour chaque cours dans la liste typeCours créer un bouton avec un event listener personnalisé
    typeCours.forEach(e => {
        const button = document.createElement("div");
        button.innerHTML = e;
        button.classList.add("button");

        button.addEventListener("click", () => {
            const value = e;
            menu.style.width = "0px";
            targetFilter.innerHTML = "<p> Matière <span class='material-symbols-outlined'>keyboard_arrow_right</span> </p>";
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
}}
}

//delay la function pour que la page est le temps de charger
setTimeout(()=>{
    createSelection();
}, 100)