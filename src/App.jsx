import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

// Import corect din folderul pages
import Home from "./pages/Home";
import Despre from "./pages/Despre";
import Contact from "./pages/Contacte";
import Servicii from "./pages/Servicii";

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/despre" element={<Despre />} />
          <Route path="/servicii" element={<Servicii />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
