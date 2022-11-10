


let mouvement = 0;

window.addEventListener("resize", ()=>{
    console.log("resize");
})

// function pour un carousel
function carousel(side){
    const container = document.querySelector(".container_carousel");
    const img = document.querySelector(".container_carousel img");
    const contenueCarousel = document.querySelectorAll(".container_carousel img");
    const deplacement = img.offsetWidth;

    //si on clique à gauche ou à droite déplace le carousel dans une direction différente
    const maxGauche = screen.width - (contenueCarousel.length*deplacement);
    if(side == "droite"){
            if(mouvement < 0){
                mouvement += deplacement;
                container.style.transform = `translateX(${mouvement}px)`;
            }
    }else if(side == "gauche"){
            if(mouvement-100 > maxGauche){
                mouvement -= deplacement;
                container.style.transform = `translateX(${mouvement}px)`;
            }
    }

}

