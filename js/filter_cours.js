function createSelection(){
    const target = document.querySelector(".main-cours");
    if(target){
    const container = document.createElement("div");
    container.classList.add("selection");
    target.appendChild(container);

    const coursWeb = document.querySelectorAll(".Web");
    const cours3D = document.querySelectorAll(".Modelisation");
    const coursJeux = document.querySelectorAll(".Jeux");
    const coursDesign = document.querySelectorAll(".Design");

    const tableDesCours = [coursWeb, coursJeux, coursDesign, cours3D];

    const typeCours = ["Modelisation", "Design" , "Jeux", "Web"];

    typeCours.forEach(e => {
        const button = document.createElement("div");
        button.innerHTML = e;
        button.classList.add("button");

        button.addEventListener("click", () => {
            const value = e;
                tableDesCours.forEach(e => {
                    e.forEach(e =>{
                        if(e.className.includes(`${value}`)){
                            e.style.display = "flex";
                        }
                        else{
                            e.style.display = "none";
                        }
                    })
                    
                });
        })
        container.appendChild(button);

    });
}
}

setTimeout(()=>{
    createSelection();
}, 100)