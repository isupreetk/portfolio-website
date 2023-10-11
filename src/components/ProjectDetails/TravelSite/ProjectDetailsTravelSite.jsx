import "./ProjectDetailsTravelSite.scss";
import ProjectScreen from "../../../assets/images/project-screen.jpeg";

function ProjectDetailsTravelSite() {
    return (
        <>
            <section class="project-details">
                <div class="main-container">
                    <div class="project-details__content">
                        <div class="project-details__showcase-img-cont">
                            <img
                                src={ProjectScreen}
                                alt="Project Screen"
                                class="project-details__showcase-img"
                            />
                        </div>
                        <div class="project-details__content-main">
                            <div class="project-details__desc">
                                <h3 class="project-details__content-title">Project Overview</h3>
                                <p class="project-details__desc-para">
                                    A multi-page website with the landing page and destination pages with detailed itenerary plan.
                                </p>
                            </div>
                            <div class="project-details__tools-used">
                                <h3 class="project-details__content-title">Tools Used</h3>
                                <div class="skills">
                                    <div class="skills__skill">HTML</div>
                                    <div class="skills__skill">SASS</div>
                                    <div class="skills__skill">GIT</div>
                                </div>
                            </div>
                            <div class="project-details__links">
                                <h3 class="project-details__content-title">See Live</h3>
                                <a
                                    href="https://supreet-kaur-travelsite.netlify.app/"
                                    class="btn btn--med btn--theme project-details__links-btn"
                                    target="_blank"
                                >Live Link</a
                                >
                                <a
                                    href="https://github.com/isupreetk/travelsite.git"
                                    class="btn btn--med btn--theme-inv project-details__links-btn"
                                    target="_blank"
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

export default ProjectDetailsTravelSite;