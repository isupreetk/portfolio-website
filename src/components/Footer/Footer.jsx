import "./Footer.scss";
import LinkedInIcon from "../../assets/icons/linkedin-icon.png";
import GitHubIcon from "../../assets/icons/github-icon.png";
import UpArrowIcon from "../../assets/icons/up-arrow.svg";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer class="main-footer">
      <div className="chevron-container">
        <div className="chevron-wrapper">
          <img
            src={UpArrowIcon}
            className="chevron-double-up"
            alt="Up Arrow"
            onClick={handleScrollToTop}
          />
        </div>
      </div>
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/kaur-supreet/"
              >
                <img class="main-footer__icon" src={LinkedInIcon} alt="icon" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/isupreetk"
              >
                <img class="main-footer__icon" src={GitHubIcon} alt="icon" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.leetcode.com/supreet97"
              >
                <img
                  class="main-footer__icon"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg"
                  alt="supreet97"
                  height="30"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">SUPREET KAUR</h4>
            <p class="main-footer__short-desc">
              A Lifelong Learner driven by a passion for turning ideas into
              reality.
            </p>
          </div>
        </div>
        <div class="main-footer__lower">&copy; MADE WITH ♡ BY SUPREET KAUR</div>
      </div>
    </footer>
  );
}

export default Footer;
