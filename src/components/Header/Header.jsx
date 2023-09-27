import "./Header.scss";

function Header() {
    return (
        <>
            <h1>Header comes here!</h1>
            <header className="header">
                <a href="" className="header__title">SUPREET KAUR</a>
                <nav className="navigation">
                    <a href="">HOME</a>
                    <a href="">ABOUT</a>
                    <a href="">PROJECTS</a>
                    <a href="">CONTACT</a>
                </nav>
            </header>
        </>
    )
}

export default Header;