import "./ProjectDetailsBandSite.scss";
import ProjectScreenBandSite from "../../../assets/images/project-screen-bandsite.jpeg";

function ProjectDetailsBandSite() {
    return (
        <>
            <section class="project-details">
                <div class="main-container">
                    <div class="project-details__content">
                        <div class="project-details__showcase-img-cont">
                            <img
                                src={ProjectScreenBandSite}
                                alt="Project Screen"
                                class="project-details__showcase-img"
                            />
                        </div>
                        <div class="project-details__content-main">
                            <div class="project-details__desc">
                                <h3 class="project-details__content-title">Project Overview</h3>
                                <p class="project-details__desc-para">
                                This is a multi-page website. The project is broken down into two main pages: a Landing Page, and a Shows Page. The Landing Page is the main page for the site and is where visitors can access basic information and add comments. The Shows page will provide further details about the upcoming events by the band.
                                </p>
                            </div>
                            <div class="project-details__tools-used">
                                <h3 class="project-details__content-title">Tools Used</h3>
                                <div class="skills">
                                    <div class="skills__skill">HTML</div>
                                    <div class="skills__skill">SASS</div>
                                    <div class="skills__skill">JavaScript</div>
                                    <div class="skills__skill">GIT</div>
                                    <div class="skills__skill">Axios</div>
                                </div>
                            </div>
                            <div class="project-details__links">
                                <h3 class="project-details__content-title">See Live</h3>
                                <a
                                    href="https://supreet-kaur-bandsite.netlify.app/"
                                    class="btn btn--med btn--theme project-details__links-btn"
                                    target="_blank" rel="noreferrer"
                                >Live Link</a
                                >
                                {/* <a
                                    href="https://github.com/isupreetk/BandSite.git"
                                    class="btn btn--med btn--theme-inv project-details__links-btn"
                                    target="_blank" rel="noreferrer"
                                >Code Link</a
                                > */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default ProjectDetailsBandSite;