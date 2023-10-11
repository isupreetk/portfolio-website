import "./ProjectDetailsMealIdeaGenerator.scss";
import ProjectScreen from "../../../assets/images/project-screen.jpeg";

function ProjectDetailsMealIdeaGenerator() {
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
                                    This website was created as part of a 6-hour long hackathon at BrainStation.
                                </p>

                                <p class="project-details__desc-para">
                                I usually run out of ideas thinking of what to have for my next meal. To help me with this, I have come up with this Meal Idea Generator.
                                </p>

                                
                            </div>
                            <div class="project-details__tools-used">
                                <h3 class="project-details__content-title">Tools Used</h3>
                                <div class="skills">
                                    <div class="skills__skill">Vanilla JavaScript</div>
                                    <div class="skills__skill">SASS</div>
                                    <div class="skills__skill">GIT</div>
                                    <div class="skills__skill">DOM API</div>
                                    <div class="skills__skill">Axios</div>
                                </div>
                            </div>
                            <div class="project-details__links">
                                <h3 class="project-details__content-title">See Live</h3>
                                <a
                                    href="https://supreet-kaur-meal-generator.netlify.app/"
                                    class="btn btn--med btn--theme project-details__links-btn"
                                    target="_blank" rel="noreferrer"
                                >Live Link</a
                                >
                                <a
                                    href="https://github.com/isupreetk/MealGenerator.git"
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

export default ProjectDetailsMealIdeaGenerator;