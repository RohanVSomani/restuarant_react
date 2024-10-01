import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TakeAway from "./pages/TakeAway";
import Admin from "./pages/Admin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/takeaway" element={<TakeAway />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
