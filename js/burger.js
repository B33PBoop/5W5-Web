let menu_container
let burger_icon
let menu_burger

function addBurger(){
    menu_container = document.querySelector(".menu-burger-container")

    const icon = document.createElement("span")
    icon.setAttribute("id", "burger_icon")
    icon.setAttribute("class", "material-symbols-outlined")
    icon.innerHTML = "menu"

    icon.addEventListener("click", toggleBurger)

    menu_container.appendChild(icon)
}

setTimeout(() => {
    addBurger();
}, 100);

function toggleBurger(){
    burger_icon = document.querySelector("#burger_icon")
    menu_burger = document.querySelector("#menu-burger")

    burger_icon.classList.toggle("ouvert")
    menu_burger.classList.toggle("ouvert")
}