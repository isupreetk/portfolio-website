import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import About from '../../components/About/About';
import Projects from "../../components/Projects/Projects";
import Contact from '../../components/Contact/Contact';

function HomePage() {
    return (

        <div className="App">
            
            <Hero />
            <About />
            <Projects />
            <Contact />
        
        </div>

    )
}

export default HomePage;