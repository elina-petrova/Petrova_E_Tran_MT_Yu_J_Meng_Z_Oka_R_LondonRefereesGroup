console.log('i do not support modules');


const SocialMedia = {
    template: '<div class="Herofooter"> \
            <div id="socialMedia" class="show_desktop">\
                <ul class="socialMediaContainer">\
                    <li><a href=""><img src="./public/images/instagram.svg" alt="Instagram"></a></li>\
                    <li><a href=""><img src="./public/images/twitter.svg" alt="Twitter"></a></li>\
                    <li><a href=""><img src="./public/images/youtube.svg" alt="Instagram"></a></li>\
                    <li><a href=""><img src="./public/images/facebook.svg" alt="Facebook"></a></li>\
                    <li></li>\
                </ul>\
            </div>\
        </div>\
        '
}

const Home = {
    template: '<section class="transition">\
    <section class="heroSection">\
    <social-media></social-media>\
        </div>\
        <!-- <h2 id="tweet">TWEEET!</h2> -->\
        <div class="hero-content-wrapper">\
            <div id="man"><img src="./public/images/man.svg"></div>\
            <div id="tweet"> <span>TWE</span>EET!</div>\
            <div id="heroMainContent" class="noshow">\
                <h1>LONDON REFEREES GROUP</h1>\
            </div>\
        </div>\
    </section>\
    <section id="refereeSection" class="sectionShell">\
        <h1> <span>I </span>The Referee</h1>\
        <div class="features">\
            <div class="feature">\
                <div class="number">1</div>\
                <div class="feature-text">\
                    <h2>The role</h2>\
                    <p>We focus on delivering\
                        the fairness and safety of hockey,\
                        and ensuring all individuals\
                        are respected. </p>\
                </div>\
            </div>\
            <div class="feature">\
                <div class="number">2</div>\
                <div class="feature-text">\
                    <h2>Certificates</h2>\
                    <p>Our officials are all certified, and\
                        we ensure all guidelines and\
                        rules are followed.</p>\
                </div>\
            </div>\
            <div class="feature">\
                <div class="number">3</div>\
                <div class="feature-text">\
                    <h2>Commitment</h2>\
                    <p>We commit to our vision\
                        and mission. We encourage\
                        a high standard of ethics\
                        and cooperation.\
                        We deeply understand\
                        the role of the referee.</p>\
                </div>\
            </div>\
            <div class="feature">\
                <div class="number">4</div>\
                <div class="feature-text">\
                    <h2>Skills</h2>\
                    <p>We are a team of experienced\
                        and capable on ice officials\
                        with great communicate skills\
                        and social intelligence skills.</p>\
                </div>\
            </div>\
            <div class="feature">\
                <div class="number">5</div>\
                <div class="feature-text">\
                    <h2>Training involved</h2>\
                    <p>We are trained to be physically\
                        and mentally prepared for each game,\
                        from new rules interpretations\
                        to officiating techniques.</p>\
                </div>\
            </div>\
            <div class="feature">\
                <div class="number">6</div>\
                <div class="feature-text">\
                    <h2>Training camps</h2>\
                    <p>Our training programs\
                        and camps assist\
                        young officials in learning\
                        and officiating their skills.</p>\
                </div>\
            </div>\
        </div>\
        <div class="button meetTheTeamButton">\
            <a href="/team">Meet the team</a>\
        </div>\
    </section>\
    <section id="goals" class="sectionShell">\
        <h1 class="heading"><span>I </span> Our Goals </h1>\
        <div class="goals_wrap">\
            <div class="goals_col">\
                <div class="goal red">\
                    <h3>PASSION</h3>\
                </div>\
                <div class="goal">\
                    <h3>FAIRNESS</h3>\
                </div>\
                <div class="goal red">\
                    <h3>COMMUNICATION</h3>\
                </div>\
            </div>\
            <div class="goals_col">\
                <div class="goal">\
                    <h3>LEADERSHIP</h3>\
                </div>\
                <div class="goal red">\
                    <h3>RESPECT</h3>\
                </div>\
                <div class="goal">\
                    <h3>SAFE PLAY</h3>\
                </div>\
            </div>\
        </div>\
        <div class="goalsText">\
            <p>At “LRG”, everything we do is resolved <br>\
                around the six principles that shaped our organization. </p>\
        </div>\
        <div class="button goalsButton"><a href="/">Learn more</a></div>\
    </section>\
    <section id="officials" class="sectionShell">\
        <h1><span>I </span> Our Officials </h1>\
        <div class="gallery_button btn-left go-next">\
            <img src="./public/images/officials-button.svg">\
        </div>\
        <div class="gallery_button btn-right go-prev">\
            <img src="./public/images/officials-button.svg">\
        </div>\
        <div class="officialsGalleryWrap">\
        <div class="officialsGallery">\
            <div class="member">\
                <div class="member-img-wrap">\
                    <img src="./public/images/hockey-junior-player-bw.jpg" alt="member-img">\
                </div>\
                <div class="memberInfoWrap">\
                    <div class="memberInfo">\
                        <div class="memberText">\
                            <p>“ I just graduated from the Junior Mentorship Program\
                                at LRG. It was an amazing experience. I appreciate all\
                                the support from my mentors and referees. They were\
                                awesome! ….”</p>\
                        </div>\
                        <div>\
                            <h3> John Doe </h3>\
                            <p>Junior Membership Program Graduate</p>\
                        </div>\
                        <div class="button">\
                            <a href="/"> Learn more </a>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <div class="member transparent">\
                <div class="member-img-wrap">\
                    <img src="./public/images/hockey-junior-player2-bw.jpg" alt="member-img">\
                </div>\
                <div class="memberInfoWrap">\
                    <div class="memberInfo">\
                        <div class="memberText">\
                            <p>“ I just graduated from the Junior Mentorship Program\
                                at LRG. It was an amazing experience. I appreciate all\
                                the support from my mentors and referees. They were\
                                awesome! ….”</p>\
                        </div>\
                        <div>\
                            <h3> John Doe </h3>\
                            <p>Junior Membership Program Graduate</p>\
                        </div>\
                        <div class="button">\
                            <a href="/"> Learn more </a>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <div class="member transparent">\
                <div class="member-img-wrap">\
                    <img src="./public/images/hockey-junior-player3-bw.jpg" alt="member-img">\
                </div>\
                <div class="memberInfoWrap">\
                    <div class="memberInfo">\
                        <div class="memberText">\
                            <p>“ I just graduated from the Junior Mentorship Program\
                                at LRG. It was an amazing experience. I appreciate all\
                                the support from my mentors and referees. They were\
                                awesome! ….”</p>\
                        </div>\
                        <div>\
                            <h3> John Doe </h3>\
                            <p>Junior Membership Program Graduate</p>\
                        </div>\
                        <div class="button">\
                            <a href="/"> Learn more </a>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
</div>\
    </section>\
    <section id="partnersSection" class="sectionShell">\
        <h1><span>I </span>Partners</h1>\
        <div class="logos">\
            <div class="partner-logo-wrap"><img class="partner-logo" src="./public/images/alliance-hockey-gs.png" alt="Alliance Hockey Logo">\
            <img class="partner-logo-color" src="./public/images/alliance-hockey.png" alt="Alliance Hockey Logo">\
            </div>\
            <div class="partner-logo-wrap"><img class="partner-logo" src="./public/images/hockey-canada-gs.svg" alt="Alliance Hockey Logo">\
            <img class="partner-logo-color" src="./public/images/hockey-canada.svg" alt="Alliance Hockey Logo">\
            </div>\
            <div class="partner-logo-wrap"><img class="partner-logo" src="./public/images/OMHA-gs.svg" alt="Alliance Hockey Logo">\
            <img class="partner-logo-color" src="./public/images/OMHA.svg" alt="Alliance Hockey Logo"></div>\
            <div class="partner-logo-wrap"><img class="partner-logo" src="./public/images/sportability-gs.png" alt="Alliance Hockey Logo">\
            <img class="partner-logo-color" src="./public/images/sportability.png" alt="Alliance Hockey Logo">\
            </div>\
            <div class="partner-logo-wrap"><img class="partner-logo" src="./public/images/OHF-gs.svg" alt="Alliance Hockey Logo">\
            <img class="partner-logo-color" src="./public/images/OHF.svg" alt="Alliance Hockey Logo"></div>\
            <div class="partner-logo-wrap"><img class="partner-logo" src="./public/images/OWHA-gs.svg" alt="Alliance Hockey Logo">\
            <img class="partner-logo-color" src="./public/images/OWHA.svg" alt="Alliance Hockey Logo"></div>\
        </div>\
    </section>\
</section>',

    components: {
        "social-media": SocialMedia
    }
}

// register

const routes = [
    { path: "/", name: "Home", component: Home },
    // {path: "/about", name: "About", component: About },
    // {path: "/team", name: "Team", component: Team },
    // {path: "/programs", name: "Programs", component: Programs },
    // {path: "/contact", name: "Contact", component: Contact },

];

const router = new VueRouter({
    routes: routes
});


const vm = new Vue({
    router: router,
    data: {
    },

    created: function () {
        console.log('vue connected');
    },

}).$mount("#app");




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
        gsap.to(slider, { x: offset, rotation: 0.001, ease: Power1.easeInOuteaseInOut, duration: 0.5 });
        i += 1;
        gsap.to(currentSlide, { opacity: .5 });
        currentSlide = members[i];
        gsap.to(currentSlide, { opacity: 1 });
    }
}

function slideBack() {
    if (currentSlide != members[0]) {
        offset += slideWidth + 50;
        gsap.to(slider, { x: offset, rotation: 0.001, ease: Power1.easeInOuteaseInOut, duration: 0.5 });
        i -= 1;
        gsap.to(currentSlide, { opacity: .5 });
        currentSlide = members[i];
        gsap.to(currentSlide, { opacity: 1 });
    }
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

var scrollToTopBtn = document.querySelector(".toTopButton");
var rootElement = document.documentElement;

scrollToTopBtn.addEventListener("click", scrollToTop)
navPrev.addEventListener("click", slide);
navNext.addEventListener("click", slideBack);

