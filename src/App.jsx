import './App.scss';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
