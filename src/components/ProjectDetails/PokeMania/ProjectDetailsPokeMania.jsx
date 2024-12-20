import "./ProjectDetailsPokeMania.scss";
import ProjectScreenPokeMania from "../../../assets/images/project-screen-pokemania.jpeg";

function ProjectDetailsPokeMania() {
  return (
    <>
      <section class="project-details">
        <div class="main-container">
          <div class="project-details__content">
            <div class="project-details__showcase-img-cont">
              <img
                src={ProjectScreenPokeMania}
                alt="Project Screen"
                class="project-details__showcase-img"
              />
            </div>
            <div class="project-details__content-main">
              <div class="project-details__desc">
                <h3 class="project-details__content-title">Project Overview</h3>
                <p class="project-details__desc-para">
                  This application is a Trivia game made for playing games with
                  friends.
                </p>
              </div>
              <div class="project-details__tools-used">
                <h3 class="project-details__content-title">Tools Used</h3>
                <div class="skills">
                  <div class="skills__skill">React</div>
                  <div class="skills__skill">JavaScript</div>
                  <div class="skills__skill">SASS</div>
                  <div class="skills__skill">GIT</div>
                  <div class="skills__skill">ExpressJS</div>
                  <div class="skills__skill">NodeJS</div>
                  <div class="skills__skill">Axios</div>
                </div>
              </div>
              <div class="project-details__links">
                <h3 class="project-details__content-title">See Live</h3>
                <a
                  href="https://supreet-kaur-pokemania.netlify.app/"
                  class="btn btn--med btn--theme project-details__links-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
                <a
                  href="https://github.com/isupreetk/Hackathon-client.git"
                  class="btn btn--med btn--theme-inv project-details__links-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetailsPokeMania;
