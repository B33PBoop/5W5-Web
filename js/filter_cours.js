function createSelection(){
    const target = document.querySelector(".main-cours");
    if(target){
    const container = document.createElement("div");
    container.classList.add("selection");
    target.appendChild(container);

    const coursWeb = document.querySelectorAll(".web");
    const cours3D = document.querySelectorAll(".troisD");
    const coursJeux = document.querySelectorAll(".jeux");
    const coursDesign = document.querySelectorAll(".design");

    const tableDesCours = [coursWeb, coursJeux, coursDesign, cours3D];

    const typeCours = ["3D", "Design" , "Jeux", "Web"];

    typeCours.forEach(e => {
        const test = document.createElement("div");
        test.innerHTML = e;
        test.classList.add("button");

        test.addEventListener("click", () => {
            const value = e;
            if(e === "3D"){
                tableDesCours.forEach(e => {
                    e.forEach(e =>{
                        if(e.className.includes("troisD")){
                            e.style.display = "flex";
                        }
                        else{
                            e.style.display = "none";
                        }
                    })
                    
                });
            }
            if(e === "Design"){
                tableDesCours.forEach(e => {
                    e.forEach(e =>{
                        if(e.className.includes("design")){
                            e.style.display = "flex";
                        }
                        else{
                            e.style.display = "none";
                        }
                    })
                    
                });
            }
            if(e === "Jeux"){
                tableDesCours.forEach(e => {
                    e.forEach(e =>{
                        if(e.className.includes("jeux")){
                            e.style.display = "flex";
                        }
                        else{
                            e.style.display = "none";
                        }
                    })
                    
                });
            }
            if(e === "Web"){
                tableDesCours.forEach(e => {
                    e.forEach(e =>{
                        if(e.className.includes("web")){
                            e.style.display = "flex";
                        }
                        else{
                            e.style.display = "none";
                        }
                    })
                    
                });
            }
        })
        container.appendChild(test);

    });
}
}

setTimeout(()=>{
    createSelection();
}, 100)