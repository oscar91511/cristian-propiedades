import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropiedadesPage from "./components/PropiedadesPage";
import Home from "./App";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propiedades" element={<PropiedadesPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
