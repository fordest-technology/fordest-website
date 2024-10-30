import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Contact from "./pages/contactPage/contact";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <>
              <h2 className=" flex w-full flex-col justify-start">
                About Us We are the best We are the bestWe are the bestWe are
                the best
              </h2>
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
