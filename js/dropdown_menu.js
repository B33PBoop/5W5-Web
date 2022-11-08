let dropdown_container
let dropdown_menu
let dropdown_icon_left
let dropdown_icon_right

function addEvents(){
    dropdown_container = document.querySelector(".sub-menu-container")
    dropdown_menu = document.querySelector(".sub-menu")
    dropdown_icon_left = document.querySelector("#barre_1")
    dropdown_icon_right = document.querySelector("#barre_2")

    dropdown_container.addEventListener("click", toggleDropdown);
    console.log("EventListener Activé!")
}

setTimeout(() => {
    addEvents();
}, 10);

function toggleDropdown(){
    dropdown_icon_left.classList.toggle("ouvert");
    dropdown_icon_right.classList.toggle("ouvert");
    dropdown_menu.classList.toggle("ouvert")
}
