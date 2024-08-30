import Navbar from "./Component/common/Navbar"
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
