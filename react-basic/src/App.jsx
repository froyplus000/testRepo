import Navbar from "./components/shared/Navbar.jsx";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Products from "./components/Products/Products.jsx";

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
