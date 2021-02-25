console.log('hi');

import Home from "./components/HomeComponent.js";
import About from "./components/AboutComponent.js";
import Team from "./components/TeamComponent.js";
import Programs from "./components/ProgramsComponent.js";
import Contact from "./components/ContactComponent.js";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/team", name: "Team", component: Team },
    { path: "/programs", name: "Programs", component: Programs },
    { path: "/contact", name: "Contact", component: Contact },

];

const router = new VueRouter({
    routes
});


const vm = new Vue({
    router,
    data: {
    },

}).$mount("#app");