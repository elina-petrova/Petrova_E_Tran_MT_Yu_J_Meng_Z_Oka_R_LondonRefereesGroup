
const menuIcon = document.querySelector(".menu_icon");
const mobileMenu = document.querySelector(".mobile_menu");

function showMenu(e) {
    mobileMenu.classList.toggle('slideLeft');
}

menuIcon.addEventListener('click', showMenu);


//slider home page

// var slider = document.querySelector(".officialsGallery");
// var member = document.querySelector(".member");
// var members = document.querySelectorAll(".member");
// var navPrev = document.querySelector(".go-prev");
// var navNext = document.querySelector(".go-next");

// var currentSlide = members[0];
// var i = 0;

// var offset = 0;
// var sliderWidth = slider.offsetWidth;
// var slideWidth = member.offsetWidth;

// function slide() {
//     if (currentSlide != members[members.length - 1]) {
//         offset -= slideWidth + 50;
//         gsap.to(slider, { x: offset, rotation: 0.001, ease: Power1.easeInOuteaseInOut, duration: 0.5 });
//         i += 1;
//         gsap.to(currentSlide, { opacity: .5 });
//         currentSlide = members[i];
//         gsap.to(currentSlide, { opacity: 1 });
//     }
// }

// function slideBack() {
//     if (currentSlide != members[0]) {
//         offset += slideWidth + 50;
//         gsap.to(slider, { x: offset, rotation: 0.001, ease: Power1.easeInOuteaseInOut, duration: 0.5 });
//         i -= 1;
//         gsap.to(currentSlide, { opacity: .5 });
//         currentSlide = members[i];
//         gsap.to(currentSlide, { opacity: 1 });
//     }
// }

// function scrollToTop() {
//     rootElement.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     })
// }

// var scrollToTopBtn = document.querySelector(".toTopButton");
// var rootElement = document.documentElement;

// scrollToTopBtn.addEventListener("click", scrollToTop)
// navPrev.addEventListener("click", slide);
// navNext.addEventListener("click", slideBack);

