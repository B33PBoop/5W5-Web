function addDivs(){
    const main_menu = document.querySelector(".sub-menu-container")
    

    const icon = document.createElement("span")
    icon.setAttribute("id", "icon")
    icon.setAttribute("class", "material-symbols-outlined")
    icon.innerHTML = "keyboard_arrow_down"

    main_menu.appendChild(icon)
    console.log(document.querySelector("#icon"))
}

setTimeout(() => {
    addDivs();
}, 100);

