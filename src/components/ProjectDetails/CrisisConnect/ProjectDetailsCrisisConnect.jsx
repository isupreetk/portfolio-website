import "./ProjectDetailsCrisisConnect.scss";
import ProjectScreenCrisisConnect from "../../../assets/images/project-screen-crisis-connect.jpeg";

function ProjectDetailsCrisisConnect() {
    return (
        <>
            <section class="project-details">
                <div class="main-container">
                    <div class="project-details__content">
                        <div class="project-details__showcase-img-cont">
                            <img
                                src={ProjectScreenCrisisConnect}
                                alt="Project Screen"
                                class="project-details__showcase-img"
                            />
                        </div>
                        <div class="project-details__content-main">
                            <div class="project-details__desc">
                                <h3 class="project-details__content-title">Project Overview</h3>
                                <p class="project-details__desc-para">
                                    A mobile-specific application for a community-driven forum for firsthand disaster updates. This provides instant alerts on prevailing assistance needs, curated recovery tips tailored to current natural disaster trends and seamless options to contribute, either to non-profits or directly to those impacted.
                                </p>
                            </div>
                            <div class="project-details__tools-used">
                                <h3 class="project-details__content-title">Tools Used</h3>
                                <div class="skills">
                                    <div class="skills__skill">HTML</div>
                                    <div class="skills__skill">SASS</div>
                                    <div class="skills__skill">JavaScript</div>
                                    <div class="skills__skill">React</div>
                                </div>
                            </div>
                            <div class="project-details__links">
                                <h3 class="project-details__content-title">See Live</h3>
                                <a
                                    href="https://supreet-kaur-crisis-connect.netlify.app/"
                                    class="btn btn--med btn--theme project-details__links-btn"
                                    target="_blank" rel="noreferrer"
                                >Live Link</a
                                >
                                <a
                                    href="https://github.com/isupreetk/crisis-response.git"
                                    class="btn btn--med btn--theme-inv project-details__links-btn"
                                    target="_blank" rel="noreferrer"
                                >Code Link</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default ProjectDetailsCrisisConnect;