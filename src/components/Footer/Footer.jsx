import "./Footer.scss";
import LinkedInIcon from "../../assets/icons/linkedin-icon.png";
import GitHubIcon from "../../assets/icons/github-icon.png";

function Footer() {
    return (
        <footer class="main-footer">
          {/* <i class="mdi mdi-chevron-double-up page-link" dest="home"></i> */}
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kaur-supreet/">
                <img
                  class="main-footer__icon"
                  src={LinkedInIcon}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/isupreetk">
                <img
                  class="main-footer__icon"
                  src={GitHubIcon}
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">SUPREET KAUR</h4>
            <p class="main-footer__short-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
              tempora explicabo quae quod deserunt
            </p>
          </div>
        </div>

        {/* <!-- If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :) --> */}
        <div class="main-footer__lower">
          &copy; Copyright 2023. Template by
          <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com"
            >Ram Maheshwari</a
          >
        </div>
      </div>
    </footer>
    )
}

export default Footer;