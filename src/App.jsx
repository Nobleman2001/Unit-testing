import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Introduction from './components/pages/Myself/Introduction';
import NotFound from './components/pages/NotFound';
import Ourwork from './components/pages/Ourwork';

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-work" element={<Ourwork />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myself" element={<Introduction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
