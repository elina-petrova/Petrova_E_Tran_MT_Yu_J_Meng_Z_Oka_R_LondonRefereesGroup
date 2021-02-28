import SocialMedia from "./socialMediaComponent.js";

export default {
  template: `
    <section>
    <social-media></social-media>
        <section class="sectionShell about-hero ">
            <section class="about-us-hero-content">
            <span>I </span>
            <div>
                <h1>About us</h1>
                <p>We are an organisation that strives to promote
                    the game through fair and safe play.</p>
                    </div>
            </section>
        </section>

        <section class="aboutSection sectionShell white-bg">
        <h1> <span>I </span> Who we are?</h1>
        <div class="about-article-logo">
        <img src="public/images/LRG_logo.svg" alt="LRG logo">
        </div>

        <div class="about-article">

        <div class="ab-col acol-1">
        <p>
        In 2007, the London Referee
Group, also known as the LRG,
was established.This was the
merger of the Forest City Referees
Association (FCRA) and the
London Hockey Referees
Association (LHRA).
London Referees Group is a nonprot membership-based
organization that acts as a
resource for hockey ofcials in the
City of London and surrounding
area.

        </p>
        </div>

        <div class="ab-col acol-2">
        <p>
        We provide on ice ofcials for
games at various levels of hockey,
such as: minor hockey, high
school, sledge, and adult. As an
organization we strive to maintain
an environment that embodies the
core values of integrity,
leadership, perseverance, respect
and teamwork while enhancing
self-esteem, promoting selfcondence and cultivating a
lifelong passion for the game.
        </p>
        </div>

        </div>
        </section>




        <section class="about-goals sectionShell">
        <div class="goals">

        <div class="ref">
                 
                    <div class="goals-text-wrap">
                    <h1><span>I  </span>OUR VISION</h1>
                    <p>To promote the game of hockey through fair and safe play, and a
respect for all individuals involved in the game.</p>
                    </div>
            </div>

             <div class="ref">
          
                    <div class="goals-text-wrap">
                    <h1><span>I  </span>OUR MISSION</h1>
                    <p>To provide a high standard and quality hockey ofciating in the
City of London and surrounding area</p>
                    </div>
            </div>

             <div class="ref">
     
                    <div class="goals-text-wrap">
                    <h1><span>I  </span>OUR PRIORITIES</h1>
                    <p>Responsibility – being physically and mentally prepared for
each game.
Education &Training – providing resources to continue the
development of ofcials and provide training and mentorship
for young ofcials to develop their skills.
Partnership – building positive relationships with hockey
associations, other ofciating associations, and members of
the community.</p>
                    </div>
            </div>


        </div>

        <div class="about-referee">
         <img src="public/images/about-ref.png" alt="Referee Picture">
        </div>

        </section>

        <section class="sectionShell aboutAtSection white-bg">
        <div class="aboutAtPic">
        </div>
        <div class="aboutAtText">
        <h1><span>I  </span> AT LRG</h1>
        <h3>WE ARE FOCUSED ON DEVELOPING <br>
AND MAINTAINING A MEMBERSHIP
COSISTING OF EXPERIENCED OFFCIALS</h3>
        <p>They are advocates for the ideals of good sportsmanship
and fair play through qualied ofciating in hockey
and respect for the authority of hockey ofcials
at all levels of competition.
</p>
        </div>
        </section>
    </section>
        `,
  components: {
    "social-media": SocialMedia
  }

}