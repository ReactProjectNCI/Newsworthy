import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorldNews from "./components/WorldNews";
import NavBar from "./components/NavBar";
import LocalNews from "./components/LocalNews";
import Contribute from "./components/Contribute";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<WorldNews />} />
          <Route path="/local" element={<LocalNews />} />
          <Route path="/contrib" element={<Contribute />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
