export default {
    template: `
    <section>
       <section id="heroSection">
            <div class="Herofooter">
                <div id="socialMedia" class="noshow">
                    <ul class="socialMediaContainer">
                        <li><a href=""><img src="./public/images/instagram.svg" alt="Instagram"></a></li>
                        <li><a href=""><img src="./public/images/twitter.svg" alt="Twitter"></a></li>
                        <li><a href=""><img src="./public/images/youtube.svg" alt="Instagram"></a></li>
                        <li><a href=""><img src="./public/images/facebook.svg" alt="Facebook"></a></li>
                        <li></li>
                    </ul>
                </div>
            </div>

            </div>
            <!-- <h2 id="tweet">TWEEET!</h2> -->
            <div class="hero-content-wrapper">
                <div id="man"><img src="./public/images/man.svg"></div>
                <div id="tweet"> <span>TWE</span>EET!</div>
                <div id="heroMainContent" class="noshow">
                    <h1>LONDON REFEREES GROUP</h1>

                </div>
            </div>
        </section>


        <section id="refereeSection">
            <h1> <span>I  </span>The Referee</h1>
            <!-- <feature-component v-for="feature in features" :feature="feature" :key="feature.id"></feature-component> -->
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
                <a href="/team"><span>Meet the team</span></a>
            </div>

            <!-- design -->


            <div id="triangle-down"></div>


        </section>

        <section id="goals">
        <h1 class="heading"><span>I  </span> Our Goals </h1>
        <div class="goals_wrap"> 
        <div class="goals_col">
        <div class="goal red"> <h2>PASSION</h2> </div>
        <div class="goal"> <h2>FAIRNESS</h2> </div>
        <div class="goal red"> <h2>COMMUNICATION</h2> </div>
        </div>
        <div class="goals_col">
        <div class="goal"> <h2>LEADERSHIP</h2> </div>
        <div class="goal red"> <h2>RESPECT</h2> </div>
        <div class="goal"> <h2>SAFE PLAY</h2> </div>
        </div>
        </div>

         <div class="goalsText">
                <p>At “LRG”, everything we do is resolved <br>
                around the six principles that shaped our organization. </p>
        </div>

        <div class="button goalsButton"><a href="/">Learn more</a></div>

        </section>
        
                <section id="partnersSection">
            <h1><span>I  </span>Partners</h1>
            <div class="logos">
                <div class="partner-logo-wrap"><img src="./public/images/alliance-hockey-gs.png" alt="Alliance Hockey Logo"></div>
                <div class="partner-logo-wrap"><img src="./public/images/hockey-canada-gs.svg" alt="Alliance Hockey Logo"></div>
                <div class="partner-logo-wrap"><img src="./public/images/OMHA-gs.svg" alt="Alliance Hockey Logo"></div>
                <div class="partner-logo-wrap"><img src="./public/images/sportability-gs.png" alt="Alliance Hockey Logo"></div>
                <div class="partner-logo-wrap"><img src="./public/images/OHF-gs.svg" alt="Alliance Hockey Logo"></div>
                <div class="partner-logo-wrap"><img src="./public/images/OWHA-gs.svg" alt="Alliance Hockey Logo"></div>
            </div>
        </section>

        
        </section>
        `
}