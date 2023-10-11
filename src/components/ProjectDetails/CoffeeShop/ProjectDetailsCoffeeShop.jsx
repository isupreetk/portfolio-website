import "./ProjectDetailsCoffeeShop.scss";
import ProjectScreenCoffeeShop from "../../../assets/images/project-screen-coffeeshop.jpeg";

function ProjectDetailsCoffeeShop() {
    return (
        <>
            <section class="project-details">
                <div class="main-container">
                    <div class="project-details__content">
                        <div class="project-details__showcase-img-cont">
                            <img
                                src={ProjectScreenCoffeeShop}
                                alt="Project Screen"
                                class="project-details__showcase-img"
                            />
                        </div>
                        <div class="project-details__content-main">
                            <div class="project-details__desc">
                                <h3 class="project-details__content-title">Project Overview</h3>
                                <p class="project-details__desc-para">
                                The project is broken down into two main pages: a Landing Page, and a Menu. The Landing Page is the main page for the site and is where visitors can access basic information. The menu page will provide further details about the coffee shop’s offerings.
                                </p>
                            </div>
                            <div class="project-details__tools-used">
                                <h3 class="project-details__content-title">Tools Used</h3>
                                <div class="skills">
                                    <div class="skills__skill">HTML</div>
                                    <div class="skills__skill">SASS</div>
                                </div>
                            </div>
                            <div class="project-details__links">
                                <h3 class="project-details__content-title">See Live</h3>
                                <a
                                    href="https://supreet-kaur-coffeeshop.netlify.app/"
                                    class="btn btn--med btn--theme project-details__links-btn"
                                    target="_blank" rel="noreferrer"
                                >Live Link</a
                                >
                                <a
                                    href="https://github.com/isupreetk/CoffeeShop.git"
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

export default ProjectDetailsCoffeeShop;