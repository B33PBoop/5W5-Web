


let mouvement = 0;

window.addEventListener("resize", ()=>{
    const container = document.querySelector(".main-accueil .container_carousel");
    container.style.transform = `translateX(0px)`;
    mouvement = 0;
})

// function pour un carousel
function carousel(side){
    const container = document.querySelector(".container_carousel");
    const img = document.querySelector(".container_carousel img");
    const contenueCarousel = document.querySelectorAll(".container_carousel img");
    let deplacement = img.offsetWidth;
    //si on clique à gauche ou à droite déplace le carousel dans une direction différente
    let maxGauche = screen.width - (contenueCarousel.length*deplacement);

    if(side == "droite"){
            if(mouvement < 0){
                mouvement += deplacement;
                container.style.transform = `translateX(${mouvement}px)`;
            }
    }else if(side == "gauche"){
            if(mouvement-50 > maxGauche){
                mouvement -= deplacement;
                container.style.transform = `translateX(${mouvement}px)`;
            }
    }

}

