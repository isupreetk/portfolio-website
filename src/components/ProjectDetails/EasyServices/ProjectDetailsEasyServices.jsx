import "./ProjectDetailsEasyServices.scss";
import ProjectScreen from "../../../assets/images/project-screen.jpeg";

function ProjectDetailsEasyServices() {
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
                                    A trusted solution for hassle-free services. From home maintenance to beauty treatments and expert consultations, this application will connect the user with verified professionals. Say goodbye to uncertainty, hello to convenience!
                                </p>
                                <p class="project-details__desc-para">
                                    When I recently migrated to Canada, I had trouble when I needed things to be fixed at home because I had no word of mouth references / recommendations. This was the inspiration behind the idea for creating a full stack web-based application as my Capstone project for the 12 week Web Development Bootcamp at BrainStation. 
                                </p>
                                <p class="project-details__desc-para">
                                    This application helps clients book appointments for services they are interested in. The service providers will see all the active booking requests in their feed and will be able to see the user inputs they had entered while making the booking. This would help them know the task at hand upfront removing the need to make the initial visit for inspection. This makes the process faster. Also, the service provider would be able to add their quote and the time they think they would take to get the work done so that the client can make themselves available at home for that duration.
                                    The client can then view and compare all the quotes received from the various service providers and accept / reject it based on their preference. 
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
                                    <div class="skills__skill">MySQL</div>
                                    <div class="skills__skill">Axios</div>
                                </div>
                            </div>
                            <div class="project-details__links">
                                <h3 class="project-details__content-title">See Live</h3>
                                <a
                                    href="https://easyservices.netlify.app/login"
                                    class="btn btn--med btn--theme project-details__links-btn"
                                    target="_blank"
                                >Live Link</a
                                >
                                <a
                                    href="https://github.com/isupreetk/EasyServices-client"
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

export default ProjectDetailsEasyServices;