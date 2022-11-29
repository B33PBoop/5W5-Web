function setupHomeIcon(){
    const iconContainer = document.querySelector(".house_icon_container")
    const iconLink = document.querySelector(".house_icon_container a")
    iconLink.innerHTML = ""
    const icon = document.createElement("img")
    icon.setAttribute("id", "houseIcon")
    icon.setAttribute("src", "./images/home.png")

    iconContainer.appendChild(icon)
}

setTimeout(() => {
    setupHomeIcon();
}, 100);