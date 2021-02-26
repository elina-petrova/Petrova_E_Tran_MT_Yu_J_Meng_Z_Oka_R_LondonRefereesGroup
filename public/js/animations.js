
const menuIcon = document.querySelector(".menu_icon");
const mobileMenu = document.querySelector(".mobile_menu");

function showMenu(e) {
    mobileMenu.classList.toggle('slideLeft');
}

menuIcon.addEventListener('click', showMenu);