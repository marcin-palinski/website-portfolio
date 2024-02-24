const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu-box");
const logo = document.querySelector(".logo");

logo.addEventListener('click', () => {
    menu.classList.add("show");
    console.log("click");
})