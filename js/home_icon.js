function setupHomeIcon(){
    const iconItem = document.querySelector(".house_icon a")
    iconItem.classList.add("material-icons-outlined")
    iconItem.innerHTML = "home"
}

setTimeout(() => {
    setupHomeIcon();
}, 100);