import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Contact from "./pages/contactPage/contact";
import Home from "./pages/home/Home";
import AboutPage from "./pages/about/AboutPage";
import ServicePage from "./pages/service/ServicePage";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicePage />} />
        <Route
          path="/technologies"
          element={
            <div className=" mt-24 w-full justify-center items-center flex flex-row text-5xl">
              Coming soon
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
