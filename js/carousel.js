let mouvement = 0;

window.addEventListener("resize", ()=>{
    const contenueCarousel = document.querySelectorAll(".is-layout-flex.wp-block-gallery-2.wp-block-gallery.has-nested-images.columns-6.is-cropped.container figure.wp-block-image:not(#individual-image)");
    const container = document.querySelector(".is-layout-flex.wp-block-gallery-2.wp-block-gallery.has-nested-images.columns-6.is-cropped.container");
    container.style.backgroundColor = "white";
    container.style.padding = "0px";
    console.log(container.style.backgroundColor);
    if(contenueCarousel){
        
        contenueCarousel.forEach(element =>{
            element.style.transform = `translateX(0px)`;
        })
        mouvement = 0;
    }
})

function carousel(){
    const container = document.querySelector(".is-layout-flex.wp-block-gallery-2.wp-block-gallery.has-nested-images.columns-6.is-cropped.container");

    const boutonGauche = document.createElement("div");
    boutonGauche.classList.add("bouton_carousel");
    boutonGauche.classList.add("gauche");
    boutonGauche.innerHTML = `<div><span class='material-symbols-outlined'>keyboard_arrow_left</span></div>`;
    boutonGauche.addEventListener("click", ()=>{
        activationCarousel("gauche");
    })

    const boutonDroit = document.createElement("div");
    boutonDroit.classList.add("bouton_carousel"); 
    boutonDroit.classList.add("droit"); 
    boutonDroit.innerHTML = `<div><span class='material-symbols-outlined'>keyboard_arrow_right</span></div>`;
    boutonDroit.addEventListener("click", ()=>{
        activationCarousel("droite");
    })

    container.appendChild(boutonGauche);
    container.appendChild(boutonDroit);
}

// function pour un carousel
function activationCarousel(side){

    const img = document.querySelector(".is-layout-flex.wp-block-gallery-2.wp-block-gallery.has-nested-images.columns-6.is-cropped.container figure.wp-block-image:not(#individual-image)");

    const contenueCarousel = document.querySelectorAll(".is-layout-flex.wp-block-gallery-2.wp-block-gallery.has-nested-images.columns-6.is-cropped.container figure.wp-block-image:not(#individual-image)");

    let deplacement = img.offsetWidth;
    //si on clique à gauche ou à droite déplace le carousel dans une direction différente
    let maxGauche = window.innerWidth - (contenueCarousel.length*deplacement);
    if(side == "gauche"){
            if(mouvement < 0){
                mouvement += deplacement;
                console.log(mouvement);
                contenueCarousel.forEach(element => {
                    element.style.transform = `translateX(${mouvement}px)`;
                });
            }
    }else if(side == "droite"){
            if(mouvement-50 > maxGauche){
                mouvement -= deplacement;
                console.log(mouvement);
                contenueCarousel.forEach(element => {
                    element.style.transform = `translateX(${mouvement}px)`;
                });
            }
    }
}


setTimeout(()=>{
    carousel();
}, 100)
