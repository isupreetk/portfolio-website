import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ProjectPageEasyServices from "./pages/ProjectPage/EasyServices/ProjectPageEasyServices";
import ProjectPageInStock from "./pages/ProjectPage/InStock/ProjectPageInStock";
import ProjectPagePokeMania from "./pages/ProjectPage/PokeMania/ProjectPagePokeMania";
import ProjectPageBrainFlix from "./pages/ProjectPage/BrainFlix/ProjectPageBrainFlix";
import ProjectPageMealIdeaGenerator from "./pages/ProjectPage/MealIdeaGenerator/MealIdeaGenerator";
import ProjectPageBandSite from "./pages/ProjectPage/BandSite/ProjectPageBandSite";
import ProjectPageTravelSite from "./pages/ProjectPage/TravelSite/ProjectPageTravelSite";
import ProjectPageCoffeeShop from "./pages/ProjectPage/CoffeeShop/ProjectPageCoffeeShop";
import ProjectPageCrisisConnect from "./pages/ProjectPage/CrisisConnect/ProjectPageCrisisConnect";
import ProjectPageWeatherForecaster from "./pages/ProjectPage/WeatherForecaster/ProjectPageWeatherForecaster";
import Footer from "./components/Footer/Footer";
import ProjectPageMusicPlayerApp from "./pages/ProjectPage/MusicPlayerApp/ProjectPageMusicPlayerApp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/1" element={<ProjectPageEasyServices />} />
        <Route path="/project/2" element={<ProjectPageInStock />} />
        <Route path="/project/3" element={<ProjectPagePokeMania />} />
        <Route path="/project/4" element={<ProjectPageBrainFlix />} />
        <Route path="/project/5" element={<ProjectPageMealIdeaGenerator />} />
        <Route path="/project/6" element={<ProjectPageBandSite />} />
        <Route path="/project/7" element={<ProjectPageTravelSite />} />
        <Route path="/project/8" element={<ProjectPageCoffeeShop />} />
        <Route path="/project/9" element={<ProjectPageCrisisConnect />} />
        <Route path="/project/10" element={<ProjectPageWeatherForecaster />} />
        <Route path="/project/11" element={<ProjectPageMusicPlayerApp />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
