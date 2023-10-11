import "./Projects.scss";
import ProjectScreen from "../../assets/images/project-screen.jpeg";

function Projects() {
  return (
    <>
      <section id="projects" class="projects sec-pad">
        <div class="main-container">
          <h2 class="heading heading-sec heading-sec__mb-bg">
            <span class="heading-sec__main">Projects</span>
            <span class="heading-sec__sub">
              
            </span>
          </h2>

          <div class="projects__content">
            <div class="projects__row">
              <div class="projects__row-img-cont">
                <img
                  src={ProjectScreen}
                  alt="Software Screenshot"
                  class="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div class="projects__row-content">
                <h3 class="projects__row-content-title">EasyServices</h3>
                <p class="projects__row-content-desc">
                This is a web-based application for indiviual service providers to register and leverage their skills to help people out with. 
                </p>
                <a
                  href="./project/1"
                  class="btn btn--med btn--theme dynamicBgClr"
                >Case Study</a
                >
              </div>
            </div>

            <div class="projects__row">
              <div class="projects__row-img-cont">
                <img
                  src={ProjectScreen}
                  alt="Software Screenshot"
                  class="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div class="projects__row-content">
                <h3 class="projects__row-content-title">InStock</h3>
                <p class="projects__row-content-desc">
                This is a web-based application for tracking the inventory and warehouses.
                </p>
                <a
                  href="./project/2"
                  class="btn btn--med btn--theme dynamicBgClr"
                >Case Study</a
                >
              </div>


            </div>

            {/* new code */}
            <div class="projects__row">
              <div class="projects__row-img-cont">
                <img
                  src={ProjectScreen}
                  alt="Software Screenshot"
                  class="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div class="projects__row-content">
                <h3 class="projects__row-content-title">PokeMania</h3>
                <p class="projects__row-content-desc">
                A trivia game application for guessing the names of Pokémon characters.
                </p>
                <a
                  href="./project/3"
                  class="btn btn--med btn--theme dynamicBgClr"
                >Case Study</a
                >
              </div>
            </div>

            <div class="projects__row">
              <div class="projects__row-img-cont">
                <img
                  src={ProjectScreen}
                  alt="Software Screenshot"
                  class="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div class="projects__row-content">
                <h3 class="projects__row-content-title">BrainFlix</h3>
                <p class="projects__row-content-desc">
                A YouTube clone. 
                </p>
                <a
                  href="./project/4"
                  class="btn btn--med btn--theme dynamicBgClr"
                >Case Study</a
                >
              </div>


            </div>

            

            <div class="projects__row">
              <div class="projects__row-img-cont">
                <img
                  src={ProjectScreen}
                  alt="Software Screenshot"
                  class="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div class="projects__row-content">
                <h3 class="projects__row-content-title">Meal Idea Generator</h3>
                <p class="projects__row-content-desc">
                This is a website created to suggest dishes based on the type of cuisine that you are craving for. Also, it can be used to suggest a random dish if you have no specific preference.
                </p>
                <a
                  href="./project/5"
                  class="btn btn--med btn--theme dynamicBgClr"
                >Case Study</a
                >
              </div>


            </div>



            <div class="projects__row">
              <div class="projects__row-img-cont">
                <img
                  src={ProjectScreen}
                  alt="Software Screenshot"
                  class="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div class="projects__row-content">
                <h3 class="projects__row-content-title">BandSite</h3>
                <p class="projects__row-content-desc">
                This is a fully responsive website for a trendy band group.
                </p>
                <a
                  href="./project/6"
                  class="btn btn--med btn--theme dynamicBgClr"
                >Case Study</a
                >
              </div>


            </div>


            <div class="projects__row">
              <div class="projects__row-img-cont">
                <img
                  src={ProjectScreen}
                  alt="Software Screenshot"
                  class="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div class="projects__row-content">
                <h3 class="projects__row-content-title">Travel Site</h3>
                <p class="projects__row-content-desc">
                This is a website for an agency that helps with organising travel bookings.
                </p>
                <a
                  href="./project/7"
                  class="btn btn--med btn--theme dynamicBgClr"
                >Case Study</a
                >
              </div>
            </div>

            <div class="projects__row">
              <div class="projects__row-img-cont">
                <img
                  src={ProjectScreen}
                  alt="Software Screenshot"
                  class="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div class="projects__row-content">
                <h3 class="projects__row-content-title">Coffee Shop</h3>
                <p class="projects__row-content-desc">
                This is a multi-page website for a Coffee Shop. 
                </p>
                <a
                  href="./project/8"
                  class="btn btn--med btn--theme dynamicBgClr"
                >Case Study</a
                >
              </div>


            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default Projects;