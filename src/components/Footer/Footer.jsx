import "./Footer.scss";
import LinkedInIcon from "../../assets/icons/linkedin-icon.png";
import GitHubIcon from "../../assets/icons/github-icon.png";
import UpArrowIcon from "../../assets/icons/up-arrow.svg";

function Footer() {
  return (
    <footer class="main-footer">
      <div className="chevron-container">
        <a href="/">
          <div className="chevron-wrapper">
            <img src={UpArrowIcon} className="chevron-double-up" alt="Up Arrow" />
          </div>
        </a>
      </div>
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
              A Lifelong Learner
            </p>
          </div>
        </div>

        {/* <!-- If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :) --> */}
        <div class="main-footer__lower">
          &copy; Copyright 2023
        </div>
      </div>
    </footer>
  )
}

export default Footer;