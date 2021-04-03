
var menuIcon;
var mobileMenu;
var content;
var mobileLinks;




// var Promise = require('es6-promise').Promise;

import Home from "./components/TheHomeComponent.js";
import About from "./components/TheAboutComponent.js";
import Team from "./components/TheTeamComponent.js";
import Programs from "./components/TheProgramsComponent.js";
import OfficiatingProgram from "./components/TheOfficiatingProgramComponent.js";
import Contact from "./components/TheContactComponent.js";
import PageNotFound from "./components/PageNotFound.js";

var rootElement = document.documentElement;

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/team", name: "Team", component: Team },
    { path: "/programs", name: "Programs", component: Programs },
    { path: "/of-program", name: "Program", component: OfficiatingProgram },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "*", component: PageNotFound }

];

const router = new VueRouter({
    routes
});


const vm = new Vue({
    router,
    data: {
    },

    mounted: function () {

        menuIcon = document.querySelectorAll(".menu_opener");
        mobileMenu = document.querySelector(".mobile_menu");
        content = document.querySelectorAll(".page-content");
        mobileLinks = document.querySelectorAll(".hoverMobileLink");

    },
    methods: {
        scrollToTop: function () {
            rootElement.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },

        scrollToMentor: function () {
            rootElement.scrollTo({
                top: 2000,
                behavior: "smooth"
            });
        },
        scrollToTopFot: function () {
            rootElement.scrollTo({
                top: 0,
            });
        },

        showMenu: function (e) {
            mobileMenu.classList.toggle('slideLeft');
            content = document.querySelectorAll(".page-content");
            content.forEach(page => page.classList.toggle('dont_display'));
        },
        hideMenu: function () {
            mobileMenu.classList.toggle('slideLeft');
            content.forEach(page => page.classList.toggle('dont_display'));
        },



    },

}).$mount("#app");