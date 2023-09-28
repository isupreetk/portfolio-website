import "./Header.scss";
import SupreetKaurLogo from "../../assets/images/supreet-kaur.jpg";

function Header() {
    return (
        <header class="header">
            <div class="header__content">
                <div class="header__logo-container">
                    <div class="header__logo-img-cont">
                        <img
                            src={SupreetKaurLogo}
                            alt="Supreet Kaur Logo"
                            class="header__logo-img"
                        />
                    </div>
                    <span class="header__logo-sub">SUPREET KAUR</span>
                </div>
                <div class="header__main">
                    <ul class="header__links">
                        <li class="header__link-wrapper">
                            <a href="/" class="header__link">Home</a>
                        </li>
                        <li class="header__link-wrapper">
                            <a href="/#about" class="header__link">About</a>
                        </li>
                        <li class="header__link-wrapper">
                            <a href="/#projects" class="header__link">Projects</a>
                        </li>
                        <li class="header__link-wrapper">
                            <a href="/#contact" class="header__link">Contact</a>
                        </li>
                    </ul>
                    <div class="header__main-ham-menu-cont">
                        <img
                            src="./assets/svg/ham-menu.svg"
                            alt="hamburger menu"
                            class="header__main-ham-menu"
                        />
                        <img
                            src="./assets/svg/ham-menu-close.svg"
                            alt="hamburger menu close"
                            class="header__main-ham-menu-close d-none"
                        />
                    </div>
                </div>
            </div>
            <div class="header__sm-menu">
                <div class="header__sm-menu-content">
                    <ul class="header__sm-menu-links">
                        <li class="header__sm-menu-link">
                            <a href="/">Home</a>
                        </li>

                        <li class="header__sm-menu-link">
                            <a href="/#about">About</a>
                        </li>

                        <li class="header__sm-menu-link">
                            <a href="/#projects">Projects</a>
                        </li>

                        <li class="header__sm-menu-link">
                            <a href="/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;