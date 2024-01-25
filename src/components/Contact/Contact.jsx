import "./Contact.scss";
import LinkedInIcon from "../../assets/icons/linkedin-icon.png";
import GitHubIcon from "../../assets/icons/github-icon.png";

function Contact() {
  return (
    <section id="contact" class="contact sec-pad dynamicBg">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main heading-sec__main--lt">Contact</span>
          <span class="heading-sec__sub heading-sec__sub--lt">
            Always happy to connect! New connections lead to new learnings!
            {/* Please feel free to reach out if you have any questions or would
            like to work together. */}
          </span>
        </h2>
        {/* <div class="contact__form-container"> */}
        {/* <form action="#" class="contact__form">
            <div class="contact__form-field">
              <label class="contact__form-label" for="name">
                Name
              </label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                class="contact__form-input"
                name="name"
                id="name"
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="email">
                Email
              </label>
              <input
                required
                placeholder="Enter Your Email"
                type="text"
                class="contact__form-input"
                name="email"
                id="email"
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="message">
                Message
              </label>
              <textarea
                required
                cols="30"
                rows="10"
                class="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn--theme contact__btn">
              Submit
            </button>
          </form> */}
        {/* </div> */}

        <div class="main-footer__social-cont">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kaur-supreet/"
          >
            <img
              class="main-footer__icon"
              src={LinkedInIcon}
              alt="icon"
              height="30"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/isupreetk"
          >
            <img
              class="main-footer__icon"
              src={GitHubIcon}
              alt="icon"
              height="30"
            />
          </a>
          {/* <a
            target="_blank"
            rel="noreferrer"
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZqfpxVpQzbRvWjVRNXLRpcQvHnGPtPjFsTHhSKTQNdFvJLHDdcksMCBvjqllZWHtsSwpl"
          >
            <img class="main-footer__icon" src={GitHubIcon} alt="icon" />
          </a> */}
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
    </section>
  );
}

export default Contact;
