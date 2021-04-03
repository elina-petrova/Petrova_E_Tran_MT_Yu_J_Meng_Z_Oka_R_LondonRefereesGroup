import { SendMail } from "./mailer.js";

export default {
    template: `
    <section id="contactPage" class="sectionShell page-content">
        <div class="membership-skills desktopHeading">
         <div class="contact_header_wrap">
                        <h2>Get in touch </h2>
                        <div class="contact_underline">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857"
                                    viewBox="0 0 43.373 36.857">
                                    <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
                                        <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z"
                                            transform="translate(710.954 4491.438)" fill="#c10e10" />
                                    </g>
                                </svg>
                              </span>
                            <div class="contact_line line_three"></div>
                        </div>
        </div>
</div>

        <div class="membership-skills mobileHeading contact_mobile_header_wrap">
         <div class="contact_header_wrap">
                        <h2>Get</h2>
                        <div class="contact_underline underline_get">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43.373" height="36.857"
                                    viewBox="0 0 43.373 36.857">
                                    <g id="c1" data-name="c1" transform="translate(-710.954 -4491.438)">
                                        <path id="c1" data-name="c1" d="M0,36.857,21.686,0H43.373L21.686,36.857Z"
                                            transform="translate(710.954 4491.438)" fill="#c10e10" />
                                    </g>
                                </svg>
                              </span>
                            <div class="contact_line line_three line_get"></div>
                        </div>
        </div>


        <div class="contact_header_wrap">
                        <h2>In</h2>
                        <div class="contact_underline underline_in">
                            <div class="contact_line line_three line_in"></div>
                        </div>
        </div>

         <div class="contact_header_wrap">
                        <h2>Touch</h2>
                        <div class="contact_underline underline_touch">
                            <div class="contact_line line_three line_touch"></div>
                        </div>
        </div>


</div>

<div class="contact_form_wrap">
    <form action="./includes/mail/send.php" method="post">
    <label for="name">Name</label>
    <input id="name" type="text" name="name" value="">

    <label for="email">Email Address</label>
    <input id="email" type="text" name="email" value="">

    <label for="subject">Subject</label>
    <input id="subject" type="text" name="subject" value="">

    <label for="question">How can we help?</label>
    <textarea id="question" type="text" name="question" cols="30" rows="20"></textarea>

     <div v-on:click="processMail" type="submit" name="submit" class="contactFormSubmit button careerButton contactButton"><p>Submit</p></div>
</form>
</div>



<div class="contactInfo">
    <div class="contact_info_wrap">
        <div class="contact_info_piece">
            <div class="contact_info_icon"><img src="./public/images/map_white.svg" alt="Map Icon"></div>
            <h3>360 Sheldon London, ON N1T 2H9</h3>
        </div>
        <div class="contact_info_piece">
            <div class="contact_info_icon"><img src="./public/images/phone-call_white.svg" alt="Phone Call Icon"></div>
            <h3>+1 226-000-0000</h3>
        </div>
        <div class="contact_info_piece">
            <div class="contact_info_icon"><img src="./public/images/email_white.svg" alt="Email White Icon"></div>
            <h3>lrg@londonrefereesgroup.com</h3>
        </div>
    </div>

    <div class="contactMap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186904.77250759013!2d-81.38870295485894!3d42.94904690844288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef20ea88d9b0b%3A0x28c7d7699a056b95!2sLondon%2C%20ON!5e0!3m2!1sen!2sca!4v1617292732886!5m2!1sen!2sca" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>
</div>


</section>
        `,
    methods: {
        processMailFailure: function (result) {
            console.table(result);
            alert("Ooops... " + result.message);
        },

        processMailSuccess: function (result) {
            var i = 0;
            console.log(result);
            for (var keys in result) {
                if (result[keys] === "" || result[keys] === false) {
                    alert(`Please fill out the the ${keys}`);
                    i += 1;
                    return;
                }
            }
            if (i === 0) {
                console.log(i);
                alert('Email sent successfully');
            }
        },

        processMail: function (event) {
            event.preventDefault();
            console.log(event.target.parentNode.parentNode);
            SendMail(event.target.parentNode.parentNode)
                .then(data => this.processMailSuccess(data))
                .catch(err => this.processMailFailure(err));
        }
    }
}