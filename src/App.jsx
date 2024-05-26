import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home/Home'
import Aboutus from "./components/Aboutus/Aboutus";
import ServicesPage from "../src/pages/ServicesPage/ServicesPage";
import PricingPage from "./pages/PricingPage/PricingPage";
import AboutusPage from "./pages/AboutusPage/AboutusPage";

function App() {
  

  return (
    <>
    

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutusPage/>} />

           
           
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
