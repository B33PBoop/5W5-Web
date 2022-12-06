function createSelection(){

        const target = document.querySelector(".main-cours .filter");


    if(target){

        const targetFilter = document.querySelector(".main-cours .filter p");
        targetFilter.classList.add("target_filter");
        targetFilter.innerHTML = "<p> Matière <span class='material-symbols-outlined'>keyboard_arrow_right</span> </p>";

        //création du container pour les buttons
        const container = document.createElement("div");
        const refresh = document.createElement("div");


        let refreshUsed = false;
        
        refresh.innerHTML = "Retour";
        
        refresh.classList.add("refresh");
        container.classList.add("selection");

        target.appendChild(refresh);

        target.appendChild(container);

        const menu = document.querySelector(".main-cours .filter .selection");


    targetFilter.addEventListener("click", ()=>{
        
        if(menu.style.width == "0px"){
            menu.style.width = "58%";
            menu.style.padding = "10px";
            targetFilter.innerHTML = "<p> Matière <span class='material-symbols-outlined'>keyboard_arrow_left</span> </p>";

            refreshUsed = true;
            refresh.style.opacity = "0";
            refresh.style.pointerEvents = "none";
            refresh.style.cursor = "default";
            
        }else{
            menu.style.width = "0px";
            menu.style.padding = "0px";
            targetFilter.innerHTML = "<p> Matière <span class='material-symbols-outlined'>keyboard_arrow_right</span> </p>";

            refreshUsed = false;
            refresh.style.opacity = "100";
            refresh.style.pointerEvents = "fill";
            refresh.style.cursor = "pointer";
        }
    })

    const selectCours = document.querySelectorAll(".Cours");

    const typeCours = ["Modelisation", "Design" , "Jeux", "Web", "Video", "Autres"];

    refresh.addEventListener("click", ()=>{
        if (refreshUsed == true){
            refreshUsed = false;
            refresh.style.opacity = "100";
            refresh.style.pointerEvents = "fill";
            refresh.style.cursor = "pointer";
        }else{
            refreshUsed = true;
            refresh.style.opacity = "0";
            refresh.style.pointerEvents = "none";
            refresh.style.cursor = "default";
        }
        selectCours.forEach(e => {
            if(e.className.includes("Cours")){
                e.style.display = "flex";
            }
            else{
                e.style.display = "none";

            }
    });
    })
    //pour chaque cours dans la liste typeCours créer un bouton avec un event listener personnalisé
    typeCours.forEach(e => {
        const button = document.createElement("div");
        button.innerHTML = e;
        button.classList.add("button");

        button.addEventListener("click", () => {
            refresh.style.opacity = "100";
            refresh.style.pointerEvents = "fill";
            refresh.style.cursor = "pointer";
            refreshUsed = false;
            const value = e;
            refresh.innerHTML = e;
            menu.style.width = "0px";
            menu.style.padding = "0px";
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


//delay la function pour que la page est le temps de charger
setTimeout(()=>{
    createSelection();
}, 100)