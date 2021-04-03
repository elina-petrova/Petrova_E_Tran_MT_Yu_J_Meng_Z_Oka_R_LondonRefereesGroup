import SocialMedia from "./socialMediaComponent.js";
var rootElement = document.documentElement;
export default {
    name: 'OfficiatingProgramComponent',
    template: `
     <section class="page-content">
         <h1 class="hidden">Programs page</h1>
    <social-media></social-media>
    <section class="sectionShell pro-hero">
        <div class="pro-hero-content">

            <div>
                <h1> OUR PROGRAMS</h1>
                <article class="relativeAboutHeroText">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857"
                            viewBox="0 0 43.373 36.857">
                            <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
                                <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z"
                                    transform="translate(710.954 4491.438)" fill="#c10e10" />
                            </g>
                        </svg></span>
                </article>
                <p>Our training program is designed to develop the skills
                    necessary to ensure a safe and fair hockey game.</p>
            </div>
        </div>
    </section>


    <section id="training" class="sectionShell white-bg">
        <div class='training_header'><span>
                <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857" viewBox="0 0 43.373 36.857">
                    <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
                        <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z"
                            transform="translate(710.954 4491.438)" fill="#c10e10" />
                    </g>
                </svg>
            </span>
            <h1 class="mobileHeading">TRAINING <br> AND MENTORSHIP </h1>
            <h1 class="desktopHeading">TRAINING AND MENTORSHIP </h1>
        </div>

        <div class="training_content">
            <div class="trainingText">
                <p>Officials play a vital role in the game, they are often described
                    as the third team on the ice.The basic role of the on-ice ofcials
                    can be broken down into two simple words – safe and fair. For a
                    referee to view and ofciate the game with these two words in
                    mind, they should be able to call a game that is acceptable to all
                    of the participants.</p>
            </div>
            <div class="trainingImg"><img src="public/images/trainingReferee.svg"></div>
        </div>
    </section>

    <section class="sectionShell pro-membership">
        <div class='training_header'><span>
                <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857" viewBox="0 0 43.373 36.857">
                    <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
                        <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z"
                            transform="translate(710.954 4491.438)" fill="#fff" />
                    </g>
                </svg>
            </span>
            <h1 class="mobileHeading">JUNIOR<br>MEMBERSHIP<br>PROGRAM </h1>
            <h1 class="desktopHeading">JUNIOR MEMBERSHIP PROGRAM </h1>
        </div>

        <div class="pro-membership-text">
            <p>
                The LRG training and development program is designed to assist young
                officials learn their role in the game and develop the skills necessary to ensure
                a safe and fair hockey game.<br>
                This program consistently proves to be instrumental with guiding young
                officials for improvement of:
            </p>
        </div>


        <div class="pro-membership-posters">
            <div class="memb_col">
                <div class="membership-skills skills_col_one">
                    <div class="memb_skill">
                        <h2>COMMUNICATION SKILLS</h2>
                        <div class="memb_underline">
                            <div class="memb_line line_one"></div>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857"
                                    viewBox="0 0 43.373 36.857">
                                    <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
                                        <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z"
                                            transform="translate(710.954 4491.438)" fill="#c10e10" />
                                    </g>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div class="memb_skill margin_left">
                        <h2 class="right_align">ON ICE AWARENESS</h2>
                        <div class="memb_underline right_flex">

                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857"
                                    viewBox="0 0 43.373 36.857">
                                    <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
                                        <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z"
                                            transform="translate(710.954 4491.438)" fill="#c10e10" />
                                    </g>
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857"
                                    viewBox="0 0 43.373 36.857">
                                    <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
                                        <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z"
                                            transform="translate(710.954 4491.438)" fill="#c10e10" />
                                    </g>
                                </svg>
                            </span>
                            <div class="memb_line line_two"></div>
                        </div>
                    </div>

                    <div class="memb-poster poster_one">
                        <img src="public/images/poster1.jpg">
                    </div>

                </div>


            </div>


            <div class="memb_col">
                <div class="membership-skills skills_col_two">
                    <div class="memb-poster poster_two">
                        <img src="public/images/poster2.jpg">
                    </div>
                    <div class="memb_skill">
                        <h2 class="right_align">DECISION MAKING</h2>
                        <div class="memb_underline right_flex">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857"
                                    viewBox="0 0 43.373 36.857">
                                    <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
                                        <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z"
                                            transform="translate(710.954 4491.438)" fill="#c10e10" />
                                    </g>
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857"
                                    viewBox="0 0 43.373 36.857">
                                    <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
                                        <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z"
                                            transform="translate(710.954 4491.438)" fill="#c10e10" />
                                    </g>
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857"
                                    viewBox="0 0 43.373 36.857">
                                    <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
                                        <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z"
                                            transform="translate(710.954 4491.438)" fill="#c10e10" />
                                    </g>
                                </svg>
                            </span>
                            <div class="memb_line line_three"></div>
                        </div>
                    </div>

                    <div class="memb_skill">
                        <h2>BE FAIR AND SAFE</h2>
                        <div class="memb_underline">
                            <div class="memb_line line_four"></div>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857"
                                    viewBox="0 0 43.373 36.857">
                                    <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
                                        <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z"
                                            transform="translate(710.954 4491.438)" fill="#c10e10" />
                                    </g>
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857"
                                    viewBox="0 0 43.373 36.857">
                                    <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
                                        <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z"
                                            transform="translate(710.954 4491.438)" fill="#c10e10" />
                                    </g>
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857"
                                    viewBox="0 0 43.373 36.857">
                                    <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
                                        <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z"
                                            transform="translate(710.954 4491.438)" fill="#c10e10" />
                                    </g>
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857"
                                    viewBox="0 0 43.373 36.857">
                                    <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
                                        <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z"
                                            transform="translate(710.954 4491.438)" fill="#c10e10" />
                                    </g>
                                </svg>
                            </span>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    </section>

    <section id="pro-careerPromo" class="sectionShell">
        <!-- <div class="redPar leftPar"></div>
        <div class="redPar rightPar"></div> -->

        <div class="careerWrap">
        <div class="careerReferee">
            <img src="./public/images/careerReferee.svg" alt="Referee Art">
        </div>
        <div class="careerText">
    <h1>
        <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857"
                                    viewBox="0 0 43.373 36.857">
                                    <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
                                        <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z"
                                            transform="translate(710.954 4491.438)" fill="#c10e10" />
                                    </g>
                                </svg>
                            </span>
        Get started</h1>
    <p>Check out the resources and
information to get you started
as a hockey official.</p>
<div class="button careerButton"><router-link  to="/of-program" @click.native="scrollToTopFot">Learn more</router-link></div>
</div>

</div>
</section>


</section>
        `,
    components: {
        "social-media": SocialMedia,
    },
    methods: {
        scrollToTopFot: function () {
            rootElement.scrollTo({
                top: 0,
            });
            console.log('scrolled to top');
        },
    }
}