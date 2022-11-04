function addDivs(){
    const main_menu = document.querySelector(".sub-menu-container")
    

    const barre_1 = document.createElement("div")
    barre_1.setAttribute("id", "barre_1")

    const barre_2 = document.createElement("div")
    barre_2.setAttribute("id", "barre_2")

    main_menu.appendChild(barre_1)
    main_menu.appendChild(barre_2)

    console.log(document.querySelector("#barre_1"))

    console.log(document.querySelector("#barre_2"))

}

setTimeout(() => {
    addDivs();
}, 10);

