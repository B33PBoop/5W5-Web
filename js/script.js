

window.addEventListener("resize", ()=>{
    const container = document.querySelectorAll(".container");
    const containerText = document.querySelectorAll(`.container .container_text p`);
    if(window.innerWidth > 780){
        container.forEach(e => {
            e.style.marginBottom = "40px";

          })
        containerText.forEach(e => {
            e.style.display = "flex";

          })
    }else if(window.innerWidth < 780){
        container.forEach(e => {
            e.style.marginBottom = "0px";
          })
        containerText.forEach(e => {
            e.style.display = "none";

        })
    }
})

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
    let otherContainer = parseInt(nb);
    otherContainer += 1;
    const containerDessous = document.querySelector(`.container:nth-of-type(${nb})`);

    if(containerText.style.display == "flex"){
        containerText.style.display = "none";
        containerDessous.style.marginBottom = "0px";
    }
    else{
        containerText.style.display = "flex";

        containerDessous.style.marginBottom = "150px";
    }
}