import "./ProjectDetails.scss";
import ProjectScreen from "../../assets/images/project-screen.jpeg";

function ProjectDetails() {
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                                    alias tenetur minus quaerat aliquid, aut provident blanditiis,
                                    deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae
                                    mollitia laborum corrupti ullam rem. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Neque alias tenetur minus quaerat
                                    aliquid, aut provident blanditiis, deleniti aspernatur ipsam
                                    eaque veniam voluptatem corporis vitae mollitia laborum corrupti
                                    ullam rem?
                                </p>
                                <p class="project-details__desc-para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                                    alias tenetur minus quaerat aliquid, aut provident blanditiis,
                                    deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae
                                    mollitia laborum corrupti ullam rem?
                                </p>
                            </div>
                            <div class="project-details__tools-used">
                                <h3 class="project-details__content-title">Tools Used</h3>
                                <div class="skills">
                                    <div class="skills__skill">HTML</div>
                                    <div class="skills__skill">CSS</div>
                                    <div class="skills__skill">JavaScript</div>
                                    <div class="skills__skill">React</div>
                                    <div class="skills__skill">SASS</div>
                                    <div class="skills__skill">GIT</div>
                                    <div class="skills__skill">Shopify</div>
                                    <div class="skills__skill">Wordpress</div>
                                    <div class="skills__skill">Google ADS</div>
                                    <div class="skills__skill">Facebook Ads</div>
                                    <div class="skills__skill">Android</div>
                                    <div class="skills__skill">IOS</div>
                                </div>
                            </div>
                            <div class="project-details__links">
                                <h3 class="project-details__content-title">See Live</h3>
                                <a
                                    href="/project"
                                    class="btn btn--med btn--theme project-details__links-btn"
                                    target="_blank"
                                >Live Link</a
                                >
                                <a
                                    href="/project"
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

export default ProjectDetails;