import SocialMedia from "./socialMediaComponent.js";
import TeamGalleryImg from "./teamGalleryImg.js";

var nextSlide;
var curSlide;
var prevSlide;
var i = 0;
var bottomSlides;


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
<img class="member-colored" src="public/images/member-clr.jpeg" alt="Referee Picture">
<div class="mmbInfo">
<h3>John Doe</h3>
<p>Official Referee</p>
</div>
</div>

<div class="memberWrap">
<img src="public/images/members2.jpg" alt="Referee Picture">
<img class="member-colored" src="public/images/member-clr.jpeg" alt="Referee Picture">
<div class="mmbInfo">
<h3>John Doe</h3>
<p>Official Referee</p>
</div>
</div>

<div class="memberWrap">
<img src="public/images/members3.jpg" alt="Referee Picture">
<img class="member-colored" src="public/images/member-clr.jpeg" alt="Referee Picture">
<div class="mmbInfo">
<h3>John Doe</h3>
<p>Official Referee</p>
</div>
</div>

<div class="memberWrap">
<img src="public/images/members.jpg" alt="Referee Picture">
<img class="member-colored" src="public/images/member-clr.jpeg" alt="Referee Picture">
<div class="mmbInfo">
<h3>John Doe</h3>
<p>Official Referee</p>
</div>
</div>

<div class="memberWrap">
<img src="public/images/members2.jpg" alt="Referee Picture">
<img class="member-colored" src="public/images/member-clr.jpeg" alt="Referee Picture">
<div class="mmbInfo">
<h3>John Doe</h3>
<p>Official Referee</p>
</div>
</div>

<div class="memberWrap">
<img src="public/images/members3.jpg" alt="Referee Picture">
<img class="member-colored" src="public/images/member-clr.jpeg" alt="Referee Picture">
<div class="mmbInfo">
<h3>John Doe</h3>
<p>Official Referee</p>
</div>
</div>

<div class="memberWrap">
<img src="public/images/members.jpg" alt="Referee Picture">
<img class="member-colored" src="public/images/member-clr.jpeg" alt="Referee Picture">
<div class="mmbInfo">
<h3>John Doe</h3>
<p>Official Referee</p>
</div>
</div>

<div class="memberWrap">
<img src="public/images/members2.jpg" alt="Referee Picture">
<img class="member-colored" src="public/images/member-clr.jpeg" alt="Referee Picture">
<div class="mmbInfo">
<h3>John Doe</h3>
<p>Official Referee</p>
</div>
</div>

<div class="memberWrap">
<img src="public/images/members3.jpg" alt="Referee Picture">
<img class="member-colored" src="public/images/member-clr.jpeg" alt="Referee Picture">
<div class="mmbInfo">
<h3>John Doe</h3>
<p>Official Referee</p>
</div>
</div>

<div class="memberWrap">
<img src="public/images/members.jpg" alt="Referee Picture">

<div class="mmbInfo">
<h3>John Doe</h3>
<p>Official Referee</p>
</div>
</div>

    </div>
    </section>

    <section class="sectionShell team-gal-section white-bg">
     <h1><span><svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857" viewBox="0 0 43.373 36.857">
  <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
    <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z" transform="translate(710.954 4491.438)" fill="#1D1B1D"/>
  </g>
</svg></span> Gallery</h1>

         <div class="gallery_button btn-left go-next" v-on:click="slideBack">
            <img src="./public/images/officials-button.svg">
        </div>

        <div class="gallery_button btn-right go-prev"  v-on:click="slideNext">
            <img src="./public/images/officials-button.svg">
        </div>

 <div class="team-gal-wrap">
  <div class="team-gal">
  <div class="team-gal-overlay"></div>
<div class="team-gal-img team-gal-prev"><img src="" alt="Referee Picture"></div>
 <div class="team-gal-img team-gal-current"><img :src="currentBigImage" alt="Referee Picture"></div>
  <div class="team-gal-next team-gal-img"><img src="" alt="Referee Picture"></div>

 </div>
  <div class="team-gal-img-info">
  <div class="img-info-wrap">
  <div class="team-gal-overlay"></div>
<h3> {{ currentTitle }} </h3></div>
<div class="img-info-wrap">
<div class="team-gal-overlay"></div>
<p> {{ currentDate }} </p></div>
</div>
 </div>

    </section>

    <section class="team-bottom-gallery">
    <team-gal-img-bottom v-for="img in teamGalleryImages" :key="img.id" :img="img" class="bot-gal" v-bind:class="bottomSlidesClassList[img.id]"></team-gal-img-bottom>
</section>

    </section>
        `,
  components: {
    "social-media": SocialMedia,
    "team-gal-img-bottom": TeamGalleryImg
  },
  data() {
    return {
      teamGalleryImages: [
        {
          id: 3,
          src: 'public/images/ourteam-gallery-hockey2.jpg',
          title: 'Weekend match #3',
          date: '20.02.10',
        },
        {
          id: 4,
          src: 'public/images/ourteam-gallery.jpg',
          title: 'Weekend match #33',
          date: '20.02.40',
        },
        {
          id: 5,
          src: 'public/images/ourteam-gallery2.jpg',
          title: 'Weekend match #4',
          date: '20.05.11',
        },
        {
          id: 6,
          src: 'public/images/ourteam-gallery3.jpg',
          title: 'Weekend match #5',
          date: '20.05.16',
        },
        {
          id: 0,
          src: 'public/images/ourteam-gallery4.jpg',
          title: 'Weekend match #6',
          date: '20.02.17',
        },
        {
          id: 1,
          src: 'public/images/ourteam-gallery5.jpg',
          title: 'Weekend match #7',
          date: '20.02.10',
        },
        {
          id: 2,
          src: 'public/images/ourteam-gallery6.jpg',
          title: 'Weekend match #8',
          date: '20.05.07',
        }
      ],
      bottomSlidesClassList: [
        "left_three", "left_two", "left_one", "current", "right_one", "right_two", "right_three"
      ],
      currentBigImage: "",
      currentTitle: "",
      currentDate: "",
      bottomSlides: [],
    }

  },
  mounted: function () {
    nextSlide = document.querySelector(".team-gal-next");
    curSlide = document.querySelector(".team-gal-current");
    prevSlide = document.querySelector(".team-gal-prev");
    this.bottomSlides = document.querySelectorAll(".bot-gal");
    this.currentBigImage = Object.values(this.teamGalleryImages[0])[1];
    this.currentTitle = Object.values(this.teamGalleryImages[0])[2];
    this.currentDate = Object.values(this.teamGalleryImages[0])[3];
  },
  methods: {
    slideNext: function () {
      var tl = gsap.timeline();

      tl.to(".team-gal-overlay", { width: 0, right: 0, left: '100%', duration: 0.4 });
      tl.to(".team-gal-overlay", { width: '100%', left: 0, duration: 0.4 });
      tl.to(".team-gal-overlay", { width: 0, duration: 0.4, delay: 0.2 });


      if (i < 6) {
        i = i + 1;
      } else {
        i = 0;
      }

      setTimeout(this.changeInfo, 1000);

      nextSlide.firstChild.src = Object.values(this.teamGalleryImages[i])[1];



      nextSlide.classList.add("team-gal-current");
      nextSlide.classList.remove("team-gal-next");

      curSlide.classList.add("team-gal-prev");
      curSlide.classList.remove("team-gal-current");

      prevSlide.classList.add("team-gal-next");
      prevSlide.classList.remove("team-gal-prev");

      nextSlide = document.querySelector(".team-gal-next");
      curSlide = document.querySelector(".team-gal-current");
      prevSlide = document.querySelector(".team-gal-prev");

      var cur_class;
      var cur_class_id;
      this.bottomSlides.forEach(bot_slide => {
        cur_class = bot_slide.classList[1];
        cur_class_id = this.bottomSlidesClassList.indexOf(cur_class);
        if (cur_class_id != 0) {
          bot_slide.classList.add(this.bottomSlidesClassList[cur_class_id - 1]);
          bot_slide.classList.remove(this.bottomSlidesClassList[cur_class_id]);
        }
        if (cur_class_id === 0) {
          bot_slide.classList.add(this.bottomSlidesClassList[6]);
          bot_slide.classList.remove(this.bottomSlidesClassList[0]);
        }
      });

    },

    slideBack: function () {
      var tl = gsap.timeline();

      tl.to(".team-gal-overlay", { width: 0, left: 0, right: '100%', duration: 0.4 });
      tl.to(".team-gal-overlay", { width: '100%', right: 0, duration: 0.4 });
      tl.to(".team-gal-overlay", { width: 0, left: '100%', duration: 0.4, delay: 0.2 });

      if (i > 0) {
        i = i - 1;
      } else {
        i = 6;
      }
      prevSlide.firstChild.src = Object.values(this.teamGalleryImages[i])[1];

      setTimeout(this.changeInfo, 1000);

      prevSlide.classList.add("team-gal-current");
      prevSlide.classList.remove("team-gal-prev");

      nextSlide.classList.add("team-gal-prev");
      nextSlide.classList.remove("team-gal-next");

      curSlide.classList.add("team-gal-next");
      curSlide.classList.remove("team-gal-current");


      nextSlide = document.querySelector(".team-gal-next");
      curSlide = document.querySelector(".team-gal-current");
      prevSlide = document.querySelector(".team-gal-prev");

      var cur_class;
      var cur_class_id;
      this.bottomSlides.forEach(bot_slide => {
        cur_class = bot_slide.classList[1];
        cur_class_id = this.bottomSlidesClassList.indexOf(cur_class);
        if (cur_class_id != 6) {
          bot_slide.classList.add(this.bottomSlidesClassList[cur_class_id + 1]);
          bot_slide.classList.remove(this.bottomSlidesClassList[cur_class_id]);
        } if (cur_class_id === 6) {
          bot_slide.classList.add(this.bottomSlidesClassList[0]);
          bot_slide.classList.remove(this.bottomSlidesClassList[6]);
        }
      });
    },
    changeInfo: function () {
      this.currentTitle = Object.values(this.teamGalleryImages[i])[2];
      this.currentDate = Object.values(this.teamGalleryImages[i])[3];
    }
  }
}