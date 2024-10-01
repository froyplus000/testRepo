import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Products from "./components/Products.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="Products" element={<Products></Products>} />
        <Route path="Contact" element={<Contact></Contact>} />
        <Route path="About" element={<About></About>} />
      </Routes>
    </>
  );
}

export default App;
