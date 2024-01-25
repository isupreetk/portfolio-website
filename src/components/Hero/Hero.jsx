import "./Hero.scss";

function Hero() {
  return (
    <>
      {/* <section className="hero-section">
                <h1>
                    HI, MY NAME IS SUPREET KAUR
                </h1>
                <p>As a dedicated software engineer, I'm driven by a passion for turning ideas into reality, through clean code and innovative solutions.</p>
                <button>PROJECTS</button>
                </section> 
            */}
      <section class="home-hero">
        <div class="home-hero__content">
          <h1 class="heading-primary">HEY, MY NAME IS SUPREET KAUR</h1>
          <div class="home-hero__info">
            <p class="text-primary">SOFTWARE DEVELOPER</p>
          </div>
          <div class="home-hero__cta home-hero__cta--resume">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://drive.google.com/file/d/1EqB7u-piO0U3hdtTWZn1ChzsatePt_BQ/view?usp=sharing"
              class="btn btn--resume"
            >
              View Resume Here
            </a>
          </div>
          <div class="home-hero__cta">
            <a href="./#projects" class="btn btn--bg">
              Projects
            </a>
          </div>
        </div>
        {/* <div class="home-hero__socials">
        <div class="home-hero__social">
          <a href="#" class="home-hero__social-icon-link">
            <img
              src="./assets/png/linkedin-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="#" class="home-hero__social-icon-link">
            <img
              src="./assets/png/github-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="#" class="home-hero__social-icon-link">
            <img
              src="./assets/png/twitter-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="#" class="home-hero__social-icon-link">
            <img
              src="./assets/png/yt-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a
            href="#"
            class="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
          >
            <img
              src="./assets/png/insta-ico.png"
              alt="icon"
              class="home-hero__social-icon"
            />
          </a>
        </div>
      </div> */}
        <div class="home-hero__mouse-scroll-cont">
          <div class="mouse"></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
