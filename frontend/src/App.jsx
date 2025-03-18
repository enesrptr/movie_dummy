import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Fovorites";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <div className="maon-content">
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
      
    </>
  );
}

export default App;
