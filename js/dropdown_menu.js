let dropdown_container
let dropdown_menu
let dropdown_icon

function addEvents(){
    dropdown_container = document.querySelector(".sub-menu-container")
    dropdown_menu = document.querySelector(".sub-menu")
    dropdown_icon = document.querySelector("#icon")

    dropdown_container.addEventListener("click", toggleDropdown);
}

setTimeout(() => {
    addEvents();
}, 150);

function toggleDropdown(){
    
    if(dropdown_icon.innerHTML == "keyboard_arrow_down"){
        dropdown_icon.innerHTML = "keyboard_arrow_up"
    } else {
        dropdown_icon.innerHTML = "keyboard_arrow_down"
    }

    dropdown_menu.classList.toggle("ouvert")
}
