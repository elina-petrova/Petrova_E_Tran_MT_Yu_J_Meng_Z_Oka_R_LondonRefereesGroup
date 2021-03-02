import SocialMedia from "./socialMediaComponent.js";

export default {
    template: `
    <section>
    <section class="sectionShell team-hero">
    <social-media></social-media>
    <div class="our-team-hero-content">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857" viewBox="0 0 43.373 36.857">
  <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
    <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z" transform="translate(710.954 4491.438)" fill="#c10e10"/>
  </g>
</svg></span>
             <div>
                 <h1> Our Team</h1>
                 <p>We are team of passionate individuals <br> who deeply understand the role of referee.</p>
                     </div>
                     </div>
    </section>

    <section class="sectionShell teamMembers">
    <h1><span><svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857" viewBox="0 0 43.373 36.857">
  <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
    <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z" transform="translate(710.954 4491.438)" fill="#fff"/>
  </g>
</svg></span> Our membership</h1>
    <div class="membershipWrap">

    <div class="membershipText">
    <p>
    At LRG, we support ongoing development of its members by
promotion of education and training programs that advance
the skills of hockey ofcials. <br><br>
As well, as providing information programs to coaches,
parents, and community members that advocate for a
stronger understanding for the role of the on-ice ofcials
and the competence of these individuals.
</p>
    </div>

<div class="memberWrap">
<img src="public/images/members.jpg" alt="Referee Picture">
</div>

<div class="memberWrap">
<img src="public/images/members2.jpg" alt="Referee Picture">
</div>

<div class="memberWrap">
<img src="public/images/members3.jpg" alt="Referee Picture">
</div>

<div class="memberWrap">
<img src="public/images/members.jpg" alt="Referee Picture">
</div>

<div class="memberWrap">
<img src="public/images/members2.jpg" alt="Referee Picture">
</div>

<div class="memberWrap">
<img src="public/images/members3.jpg" alt="Referee Picture">
</div>

<div class="memberWrap">
<img src="public/images/members.jpg" alt="Referee Picture">
</div>

<div class="memberWrap">
<img src="public/images/members2.jpg" alt="Referee Picture">
</div>

<div class="memberWrap">
<img src="public/images/members3.jpg" alt="Referee Picture">
</div>

<div class="memberWrap">
<img src="public/images/members.jpg" alt="Referee Picture">
</div>

    </div>
    </section>

    </section>
        `,
    components: {
        "social-media": SocialMedia
    }
}