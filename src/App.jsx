import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Contact from "./pages/contactPage/contact";
import Home from "./pages/home/Home";
import AboutPage from "./pages/about/AboutPage";
import ServicePage from "./pages/service/ServicePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
