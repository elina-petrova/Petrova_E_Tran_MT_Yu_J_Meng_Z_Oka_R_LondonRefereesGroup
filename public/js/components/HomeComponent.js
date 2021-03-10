import SocialMedia from "./socialMediaComponent.js";



var slider;
var member;
var members;
var currentSlide;
var i;
var offset;
var slideWidth;
var margin;
var allNoShow;
var mountedCount = 0;

export default {
    template: `
    <section class="transition" v-once>
    <social-media class="noshow"></social-media>
    <section v-once class="heroSection">
        </div>
        <!-- <h2 id="tweet">TWEEET!</h2> -->
        <div class="hero-content-wrapper">
            <div id="man" class="manAnimation"><img src="./public/images/man.svg"></div>
            <div id="tweet">
            <div id="heroMainContent" class="noshow">
                <h1>LONDON REFEREES GROUP</h1>
            </div>
             <!-- <span>TWE</span>EET! -->
                             <svg id="tweetText" viewBox="0 0 504.87 230.63" fill="white">
                    <path id="curve" fill="transparent"
                        d="M36.4,181.5c10.5-11.7,30.4-30.8,61-44c24-10.4,45.7-13.3,60-14c121,0,242,0,383,0" />
                    <text width="500">
                        <textPath class="textPathAnimation text-path redTweet" xlink:href="#curve">
                            T
                            <animate attributeName="startOffset" from="0" to="138" begin="1s" dur="1.4s"
                                fill="freeze" />
                        </textPath>
                        <textPath class="textPathAnimation text-path redTweet" xlink:href="#curve">
                            w
                            <animate attributeName="startOffset" from="5" to="186" begin="1s" dur="1.3s"
                                fill="freeze" />
                        </textPath>
                        <textPath class="textPathAnimation text-path redTweet" xlink:href="#curve">
                            e
                            <animate attributeName="startOffset" from="10" to="257" begin="1s" dur="1.2"
                                fill="freeze" />
                        </textPath>
                        <textPath class="textPathAnimation text-path" xlink:href="#curve">
                            e
                            <animate attributeName="startOffset" from="15" to="304" begin="1s" dur="1.1s"
                                fill="freeze" />
                        </textPath>
                        <textPath class="textPathAnimation text-path" xlink:href="#curve">
                            e
                            <animate attributeName="startOffset" from="15" to="350" begin="1s" dur="1s" fill="freeze" />
                        </textPath>
                        <textPath class="textPathAnimation text-path" xlink:href="#curve">
                            t
                            <animate attributeName="startOffset" from="35" to="395" begin="1s" dur="0.9s"
                                fill="freeze" />
                        </textPath>
                        <textPath class="textPathAnimation text-path lastT" xlink:href="#curve">
                            !
                            <animate attributeName="startOffset" from="40" to="443" begin="1s" dur="0.8s"
                                fill="freeze" />
                        </textPath>
                    </text>
                </svg>
             </div>
        </div>
    </section>


    <section id="refereeSection" class="sectionShell white-bg">
        <h1> <span>
<svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857" viewBox="0 0 43.373 36.857">
  <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
    <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z" transform="translate(710.954 4491.438)" fill="#1D1B1D"/>
  </g>
</svg>


         </span> The Referee</h1>
        <div class="features">
            <div class="feature">
                <div class="number">1</div>
                <div class="feature-text">
                    <h2>The role</h2>
                    <p>We focus on delivering
                        the fairness and safety of hockey,
                        and ensuring all individuals
                        are respected. </p>
                </div>
            </div>

            <div class="feature">
                <div class="number">2</div>
                <div class="feature-text">
                    <h2>Certificates</h2>
                    <p>Our officials are all certified, and
                        we ensure all guidelines and
                        rules are followed.</p>
                </div>
            </div>

            <div class="feature">
                <div class="number">3</div>
                <div class="feature-text">
                    <h2>Commitment</h2>
                    <p>We commit to our vision
                        and mission. We encourage
                        a high standard of ethics
                        and cooperation.
                        We deeply understand
                        the role of the referee.</p>
                </div>
            </div>

            <div class="feature">
                <div class="number">4</div>
                <div class="feature-text">
                    <h2>Skills</h2>
                    <p>We are a team of experienced
                        and capable on ice officials
                        with great communicate skills
                        and social intelligence skills.</p>
                </div>
            </div>

            <div class="feature">
                <div class="number">5</div>
                <div class="feature-text">
                    <h2>Training involved</h2>
                    <p>We are trained to be physically
                        and mentally prepared for each game,
                        from new rules interpretations
                        to officiating techniques.</p>
                </div>
            </div>

            <div class="feature">
                <div class="number">6</div>
                <div class="feature-text">
                    <h2>Training camps</h2>
                    <p>Our training programs
                        and camps assist
                        young officials in learning
                        and officiating their skills.</p>
                </div>
            </div>

        </div>
        <div class="button meetTheTeamButton">
            <a href="/team">Meet the team</a>
        </div>

    </section>

    <section id="goals" class="sectionShell">
        <h1 class="heading"><span>
                <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857" viewBox="0 0 43.373 36.857">
  <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
    <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z" transform="translate(710.954 4491.438)" fill="#c10e10"/>
  </g>
</svg> </span> Our Goals </h1>
        <div class="goals_wrap">
            <div class="goals_col">
                <div class="goal red">
                    <h3>PASSION</h3>
                </div>
                <div class="goal">
                    <h3>FAIRNESS</h3>
                </div>
                <div class="goal red">
                    <h3>COMMUNICATION</h3>
                </div>
            </div>
            <div class="goals_col">
                <div class="goal">
                    <h3>LEADERSHIP</h3>
                </div>
                <div class="goal red">
                    <h3>RESPECT</h3>
                </div>
                <div class="goal">
                    <h3>SAFE PLAY</h3>
                </div>
            </div>
        </div>

        <div class="goalsText">
            <p>At “LRG”, everything we do is resolved <br>
                around the six principles that shaped our organization. </p>
        </div>

        <div class="button goalsButton"><a href="/">Learn more</a></div>

    </section>

    <section id="officials" class="sectionShell white-bg">
        <h1><span>
        <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857" viewBox="0 0 43.373 36.857">
  <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
    <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z" transform="translate(710.954 4491.438)" fill="#1D1B1D"/>
  </g>
</svg>
 </span> Our Officials </h1>

        <div class="gallery_button btn-left go-next" v-on:click="slideNext">
            <img src="./public/images/officials-button.svg">
        </div>

        <div class="gallery_button btn-right go-prev" v-on:click="slide">
            <img src="./public/images/officials-button.svg">
        </div>

        <div class="officialsGalleryWrap">
        <div class="officialsGallery">

            <div class="member">
                <div class="member-img-wrap">
                    <img src="./public/images/hockey-junior-player-bw.jpg" alt="member-img">
                </div>
                <div class="memberInfoWrap">
                    <div class="memberInfo">
                        <div class="memberText">
                            <p>“ I just graduated from the Junior Mentorship Program
                                at LRG. It was an amazing experience. I appreciate all
                                the support from my mentors and referees. They were
                                awesome! ….”</p>
                        </div>

                        <div>
                            <h3> John Doe </h3>
                            <p>Junior Membership Program Graduate</p>
                        </div>
                        <div class="button">
                            <a href="/"> Learn more </a>
                        </div>

                    </div>



                </div>


            </div>

            <div class="member transparent">
                <div class="member-img-wrap">
                    <img src="./public/images/hockey-junior-player2-bw.jpg" alt="member-img">
                </div>
                <div class="memberInfoWrap">
                    <div class="memberInfo">
                        <div class="memberText">
                            <p>“ I just graduated from the Junior Mentorship Program
                                at LRG. It was an amazing experience. I appreciate all
                                the support from my mentors and referees. They were
                                awesome! ….”</p>
                        </div>

                        <div>
                            <h3> John Doe </h3>
                            <p>Junior Membership Program Graduate</p>
                        </div>
                        <div class="button">
                            <a href="/"> Learn more </a>
                        </div>

                    </div>
                </div>
            </div>

            <div class="member transparent">
                <div class="member-img-wrap">
                    <img src="./public/images/hockey-junior-player3-bw.jpg" alt="member-img">
                </div>
                <div class="memberInfoWrap">
                    <div class="memberInfo">
                        <div class="memberText">
                            <p>“ I just graduated from the Junior Mentorship Program
                                at LRG. It was an amazing experience. I appreciate all
                                the support from my mentors and referees. They were
                                awesome! ….”</p>
                        </div>

                        <div>
                            <h3> John Doe </h3>
                            <p>Junior Membership Program Graduate</p>
                        </div>
                        <div class="button">
                            <a href="/"> Learn more </a>
                        </div>

                    </div>



                </div>


            </div>

        </div>
</div>
    </section>

    <section id="partnersSection" class="sectionShell">
        <h1><span>
        <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857" viewBox="0 0 43.373 36.857">
  <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
    <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z" transform="translate(710.954 4491.438)" fill="#c10e10"/>
  </g>
</svg>  </span> Partners</h1>
        <div class="logos">
            <div class="partner-logo-wrap"><img class="partner-logo" src="./public/images/alliance-hockey-gs.png" alt="Alliance Hockey Logo">
            <a href="https://alliancehockey.com/" target="_blank"><img class="partner-logo-color" src="./public/images/alliance-hockey.png" alt="Alliance Hockey Logo"></a>
            </div>
            <div class="partner-logo-wrap"><img class="partner-logo" src="./public/images/hockey-canada-gs.svg" alt="Alliance Hockey Logo">
            <a href="https://www.hockeycanada.ca/en-ca/home" target="_blank"><img class="partner-logo-color" src="./public/images/hockey-canada.svg" alt="Alliance Hockey Logo"></a>
            </div>
            <div class="partner-logo-wrap"><img class="partner-logo" src="./public/images/OMHA-gs.svg" alt="Alliance Hockey Logo">
            <a href="https://www.omha.net/" target="_blank"><img class="partner-logo-color" src="./public/images/OMHA.svg" alt="Alliance Hockey Logo"></a></div>
            <div class="partner-logo-wrap"><img class="partner-logo" src="./public/images/sportability-gs.png" alt="Alliance Hockey Logo">
            <a href="https://sportabilitybc.ca/" target="_blank"><img class="partner-logo-color" src="./public/images/sportability.png" alt="Alliance Hockey Logo"></a>
            </div>
            <div class="partner-logo-wrap"><img class="partner-logo" src="./public/images/OHF-gs.svg" alt="Alliance Hockey Logo">
            <a href="https://www.ohf.on.ca/" target="_blank"><img class="partner-logo-color" src="./public/images/OHF.svg" alt="Alliance Hockey Logo"></a></div>
            <div class="partner-logo-wrap"><img class="partner-logo" src="./public/images/OWHA-gs.svg" alt="Alliance Hockey Logo">
            <a href="https://www.owha.on.ca/" target="_blank"><img class="partner-logo-color" src="./public/images/OWHA.svg" alt="Alliance Hockey Logo"></a></div>
        </div>
    </section>


</section>
        `,

    components: {
        "social-media": SocialMedia
    },
    mounted: function () {
        slider = document.querySelector(".officialsGallery");
        member = document.querySelector(".member");
        members = document.querySelectorAll(".member");
        allNoShow = document.querySelectorAll(".noshow");
        margin = 5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        currentSlide = members[0];
        i = 0;
        offset = 0;
        slideWidth = member.offsetWidth;
        if (mountedCount != 0) {
            allNoShow.forEach(element => element.classList.remove("noshow"));
            document.querySelector(".manAnimation").classList.remove("manAnimation");
            document.querySelectorAll(".textPathAnimation").forEach(element => element.classList.remove("textPathAnimation"));

        }
        mountedCount += 1;
    },
    methods: {
        slide: function (e) {
            if (currentSlide != members[members.length - 1]) {
                offset -= slideWidth + margin;
                gsap.to(slider, { x: offset, rotation: 0.001, ease: Power1.easeInOuteaseInOut, duration: 0.5 });
                i += 1;
                gsap.to(currentSlide, { opacity: .5 });
                currentSlide = members[i];
                gsap.to(currentSlide, { opacity: 1 });

                gsap.to(".btn-left", { display: 'block' });
            } if (currentSlide == members[members.length - 1]) {
                gsap.to(".btn-right", { display: 'none', duration: 0.01 });
            }
        },
        slideNext: function (e) {

            if (currentSlide != members[0]) {
                offset += slideWidth + margin;
                gsap.to(slider, { x: offset, rotation: 0.001, ease: Power1.easeInOuteaseInOut, duration: 0.5 });
                i -= 1;
                gsap.to(currentSlide, { opacity: .5 });
                currentSlide = members[i];
                gsap.to(currentSlide, { opacity: 1 });

                gsap.to(".btn-right", { display: 'block' });
            } if (currentSlide == members[0]) {
                gsap.to(".btn-left", { display: 'none', duration: 0.01 });
            }
        },

    }

}