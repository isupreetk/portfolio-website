import "./ProjectDetailsWeatherForecaster.scss";
// import ProjectScreenTravelSite from "../../../assets/images/project-screen-travelsite.jpeg";
import ProjectScreenWeatherForecaster from "../../../assets/images/project-screen-weather-forecaster.jpeg";

function ProjectDetailsWeatherForecaster() {
    return (
        <>
            <section class="project-details">
                <div class="main-container">
                    <div class="project-details__content">
                        <div class="project-details__showcase-img-cont">
                            <img
                                src={ProjectScreenWeatherForecaster}
                                alt="Project Screen"
                                class="project-details__showcase-img"
                            />
                        </div>
                        <div class="project-details__content-main">
                            <div class="project-details__desc">
                                <h3 class="project-details__content-title">Project Overview</h3>
                                <p class="project-details__desc-para">
                                This app offers a quick and accurate way to check global weather conditions, helping you stay prepared for unexpected changes. Imagine the convenience of making your mornings hassle-free by effortlessly checking the weather forecast, giving you the time to plan your outfit and activities with confidence. You'll never be caught off guard by unpredictable weather patterns again; this app provides reliable information, making you feel like you have your own personal meteorologist guiding your choices.
                                </p>
                            </div>
                            <div class="project-details__tools-used">
                                <h3 class="project-details__content-title">Tools Used</h3>
                                <div class="skills">
                                    <div class="skills__skill">HTML</div>
                                    <div class="skills__skill">SASS</div>
                                    <div class="skills__skill">React</div>
                                    <div class="skills__skill">GIT</div>
                                </div>
                            </div>
                            <div class="project-details__links">
                                <h3 class="project-details__content-title">See Live</h3>
                                <a
                                    href="https://supreet-kaur-weather-forecaster.netlify.app/"
                                    class="btn btn--med btn--theme project-details__links-btn"
                                    target="_blank" rel="noreferrer"
                                >Live Link</a
                                >
                                <a
                                    href="https://github.com/isupreetk/weather-forecaster.git"
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

export default ProjectDetailsWeatherForecaster;