import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropiedadesPage from "./components/PropiedadesPage";
import Home from "./App";
import DetallePropiedad from "./components/DetallePropiedad";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propiedades" element={<PropiedadesPage />} />
        <Route path="/propiedades/:id" element={<DetallePropiedad />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
