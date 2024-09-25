import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
// import Contact from "Contact";
import Contact from './contact'
function App() {
  return (
   <>
   <div className="nav flex gap-7 text-5xl">

  <Link to='/'>Home</Link>
  <Link to='/contact'>contact</Link>
   </div>
   </>
  );
}

export default App;
