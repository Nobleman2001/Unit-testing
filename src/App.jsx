import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Ourwork from "./components/pages/Ourwork";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/our-work" element={<Ourwork/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
