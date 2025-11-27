import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import ContactoPage from "./pages/ContactoPage";
import NosotrosPage from "./pages/NosotrosPage";
import EspecialidadesPage from "./pages/EspecialidadesPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/especialidades" element={<EspecialidadesPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
