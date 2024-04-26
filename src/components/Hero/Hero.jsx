import "./Hero.scss";

function Hero() {
  return (
    <>
      <section class="home-hero">
        <div class="home-hero__container1">
          <div class="home-hero__content">
            <h1 class="heading-primary heading-primary--greet">Hi! </h1>
            <h1 class="heading-primary">My name is Supreet Kaur</h1>
            <div class="home-hero__info">
              <p class="text-primary">Front-End Software Developer</p>
            </div>
            <div class="home-hero__cta">
              <a
                href="./#projects"
                class="btn btn--med btn--theme dynamicBgClr"
              >
                Projects
              </a>
            </div>
          </div>
        </div>
        <div class="home-hero__container2">
          <img
            align="right"
            alt="girl coding"
            class="home-hero__gif"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--2bZIjPGC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/d4tvukbt5mra37cvwklk.gif"
          />
        </div>
        <div class="home-hero__mouse-scroll-cont">
          <div class="mouse"></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
