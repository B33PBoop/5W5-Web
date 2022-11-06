window.addEventListener("resize", ()=>{
    const container = document.querySelectorAll(".container");
    const containerText = document.querySelectorAll(`.container .container_text p`);
    if(window.innerWidth > 780){
        container.forEach(e => {
            e.style.marginBottom = "40px";
            e.style.paddingTop = "0px";
            e.style.backgroundColor = "rgb(14, 14, 14)";
          })
        containerText.forEach(e => {
            e.style.display = "flex";

          })
    }else if(window.innerWidth < 780){
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




function displayText(nb){
    const containerText = document.querySelector(`.container:nth-of-type(${nb}) .container_text p`);
    let newTarget = parseInt(nb);
    newTarget += 1;
    const containerDessous = document.querySelector(`.container:nth-of-type(${nb})`);
    const arrow = document.querySelector(`.container:nth-of-type(${nb}) .material-symbols-outlined`);

    if(containerText.style.display == "flex"){
        containerText.style.display = "none";
        containerDessous.style.paddingBottom = "clamp(200px, 12vw, 250px)";   
        containerDessous.style.backgroundColor = "rgba(0, 0, 0, 0)";
        //arrow.innerHTML = "keyboard_arrow_down";
    }
    else{
        containerText.style.display = "flex";
        containerDessous.style.paddingBottom = "300px";
        containerDessous.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        //arrow.innerHTML = "keyboard_arrow_up";
    }
}

function createButton(){
    const target = document.querySelectorAll(".container .container_text");
    let nb = 0;
    for (i=0; i < target.length; i++){
        nb += 1;
        const element = document.createElement("div");
        element.classList.add("bouton");
        element.innerHTML = "button";
        const joe = i + 1;  
        element.addEventListener("click", () =>{
            displayText(joe);
        }); 
        target[i].appendChild(element);;
    }

}

setTimeout(()=>{
    createButton();
}, 100)