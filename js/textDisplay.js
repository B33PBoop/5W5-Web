
window.addEventListener("resize", ()=>{
    const container = document.querySelectorAll(".container");
    const containerText = document.querySelectorAll(`.container .container_text p`);
    if(window.innerWidth > 780){
        container.forEach(e => {
            e.style.marginBottom = "40px";
            e.style.paddingTop = "0px"
            e.style.backgroundColor = "rgb(14, 14, 14)"
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


function displayText(nb){
    const containerText = document.querySelector(`.container:nth-of-type(${nb}) .container_text p`);
    let newTarget = parseInt(nb);
    newTarget += 1;
    const containerDessous = document.querySelector(`.container:nth-of-type(${nb})`);


    if(containerText.style.display == "flex"){
        containerText.style.display = "none";
        containerDessous.style.paddingBottom = "0px";   
    }
    else{
        containerText.style.display = "flex";
        containerDessous.style.paddingBottom = "300px";
        containerDessous.style.backgroundColor = "rgba(0, 0, 0, 0.274)";
    }
}