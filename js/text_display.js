// event listener pour réajuster le style quand la page est redimensionner
window.addEventListener("resize", ()=>{
    const container = document.querySelectorAll(".container");
    const containerText = document.querySelectorAll(`.container .add_button p`);
    if(window.innerWidth > 780){
        //réajuste le css de chaque container
        container.forEach(e => {
            e.style.marginBottom = "0px";
            e.style.paddingTop = "0px";
            e.style.backgroundColor = "rgb(14, 14, 14)";
          })
        containerText.forEach(e => {
            e.style.display = "flex";

          })
    }else if(window.innerWidth < 780){
        //réajuste le css de chaque container
        container.forEach(e => {
            e.style.marginBottom = "0px";
            e.style.backgroundColor = "rgba(0, 0, 0, 0)";
            e.style.paddingBottom = "clamp(200px, 12vw, 250px)";
          })
        containerText.forEach(e => {
            e.style.display = "none";

        })
    }
})



//function pour display le text lorsqu'on clique sur le bouton
function displayText(nb){
    const containerText = document.querySelectorAll(".container .container_text p");
    const containerDessous = document.querySelectorAll(".container");

    const arrow = document.querySelectorAll(".container .material-symbols-outlined");
    //ajuste le css des élements sélectionnés
    if(containerText[nb].style.display == "flex"){
        containerText[nb].style.display = "none";
        containerDessous[nb].style.paddingBottom = "clamp(200px, 12vw, 250px)";   
        containerDessous[nb].style.backgroundColor = "rgba(0, 0, 0, 0)";
        arrow[nb].innerHTML = "keyboard_arrow_down";
    }
    else{
        containerText[nb].style.display = "flex";
        containerDessous[nb].style.paddingBottom = "400px";
        containerDessous[nb].style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        arrow[nb].innerHTML = "keyboard_arrow_up";
    }
}
//function pour créer les bouton dans le DOM
function createButton(){
    //seclectionne chaque container .container_text et leur donne un bouton
    const target = document.querySelectorAll(".container .add_button");
    for (i=0; i < target.length; i++){
        const element = document.createElement("div");
        element.classList.add("bouton");
        element.innerHTML = "<span class='material-symbols-outlined'>keyboard_arrow_down</span>";
        const nb = i + 1;  
        target[nb-1].addEventListener("click", ()=>{
            if(window.innerWidth < 780){
                displayText(nb - 1);
            }
        })
        target[i].appendChild(element);;
    }

}

setTimeout(()=>{
    createButton();
}, 100)