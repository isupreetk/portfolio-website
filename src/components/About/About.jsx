import "./About.scss";

function About() {
    return (
        <>
         <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span>
          <span class="heading-sec__sub">
          An Electronics and Telecommunication Engineer turned Software Engineer.
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title">Get to know me!</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                Hey! It's
                <strong> Supreet Kaur </strong>
                and I'm a <strong> Software Engineer </strong> located in
                Vancouver. I've 2+ years of experience
                <strong> building and implementing
                dynamic web-based applications. </strong>
                In
                addition to my technical skills, one of my strengths is discussing complex topics with technical and
                non-technical audiences.
              </p>
              <p class="about__content-details-para">
                On the personal front - I find peace in painting, dancing and traveling to explore new places.
              </p>
              <p class="about__content-details-para">
              Please feel free to reach out on <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kaur-supreet/"><strong>LinkedIn</strong></a> if you have any questions or would like to collaborate! 
              {/* Feel free to 
                <strong> contact</strong> me here. */}
              </p>
            </div>
            {/* <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr"
              >Contact</a
            > */}
          </div>
          <div class="about__content-skills">
            <h3 class="about__content-title">My Skills</h3>
            <div class="skills">
              <div class="skills__skill">HTML</div>
              <div class="skills__skill">CSS</div>
              <div class="skills__skill">JavaScript</div>
              <div class="skills__skill">React</div>
              <div class="skills__skill">SASS</div>
              <div class="skills__skill">BootStrap</div>
              <div class="skills__skill">GIT</div>
              <div class="skills__skill">ExpressJS</div>
              <div class="skills__skill">NodeJS</div>
              <div class="skills__skill">SQL</div>
              <div class="skills__skill">Heroku</div>
              <div class="skills__skill">TypeScript</div>
            </div>
          </div>
        </div>
      </div>
      </section>
        </>
    )
}

export default About;