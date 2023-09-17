import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menuu from "./components/Menuu/Menuu";
import Home from "./components/Home/Home";
import Personalities from "./components/Personalities/Personalities";
import Cities from "./components/Cities/Cities";
import Spots from "./components/Spots/Spots";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import "./App.css";

function App() {
  return (
    <Router>
      <Menuu />
      <ScrollTop />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Personalities' element={<Personalities />} />
        <Route path='/Cities' element={<Cities />} />
        <Route path='/Spots' element={<Spots />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
