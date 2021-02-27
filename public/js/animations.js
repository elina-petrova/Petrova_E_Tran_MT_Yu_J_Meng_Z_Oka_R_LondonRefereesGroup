
const menuIcon = document.querySelector(".menu_icon");
const mobileMenu = document.querySelector(".mobile_menu");

function showMenu(e) {
    mobileMenu.classList.toggle('slideLeft');
}

menuIcon.addEventListener('click', showMenu);


//slider home page

var slider = document.querySelector(".officialsGallery");
var member = document.querySelector(".member");
var members = document.querySelectorAll(".member");
var navPrev = document.querySelector(".go-prev");
var navNext = document.querySelector(".go-next");

var currentSlide = members[0];
var i = 0;

var offset = 0;
var sliderWidth = slider.offsetWidth;
var slideWidth = member.offsetWidth;

function slide() {
    if (currentSlide != members[members.length - 1]) {
        offset -= slideWidth + 50;
        gsap.to(slider, { x: offset, ease: "expo", duration: 1.5 });
        i += 1;
        currentSlide = members[i];
    }
}

function slideBack() {
    if (currentSlide != members[0]) {
        offset += slideWidth + 50;
        gsap.to(slider, { x: offset, ease: "expo", duration: 1.5 });
        i -= 1;
        currentSlide = members[i];
    }
}




navPrev.addEventListener("click", slideBack);
navNext.addEventListener("click", slide);

