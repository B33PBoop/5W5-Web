
let mouvement = 0;

function carousel(side){
    const container = document.querySelector(".container_carousel");
    const img = document.querySelector(".container_carousel img");
    const contenueCarousel = document.querySelectorAll(".container_carousel img");
    const deplacement = img.offsetWidth;

    const maxGauche = screen.width - (contenueCarousel.length*deplacement);
    if(side == "droite"){
            if(mouvement < 0){
                mouvement += deplacement;
                container.style.transform = `translateX(${mouvement}px)`;
            }
    }else if(side == "gauche"){
            if(mouvement-40 > maxGauche){
                mouvement -= deplacement;
                container.style.transform = `translateX(${mouvement}px)`;
            }
    }

}

function displayText(nb){
    const containerText = document.querySelector(`.container:nth-of-type(${nb}) .container_text p`);

    if(containerText.style.display == "flex"){

        containerText.style.display = "none";
    }
    else{
        containerText.style.display = "flex";
    }
}