let tripulBar = document.querySelector(".tripul-bar");

tripulBar.addEventListener("click", ()=>{
    let menus = document.querySelector(".menus");
    let menuBar = document.querySelector(".menu-bar");
    menuBar.classList.toggle("menu-Bar");
    menus.classList.toggle("menuList")
})