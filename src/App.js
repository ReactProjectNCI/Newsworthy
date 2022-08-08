import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorldNews from "./views/WorldNews";
import NavBar from "./components/NavBar";
import LocalNews from "./views/LocalNews";
import Contribute from "./views/Contribute";
import SignUp from "./views/Signup";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<WorldNews />} />
          <Route path="/local" element={<LocalNews />} />
          <Route path="/contrib" element={<Contribute />} />
          <Route path="/sub" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
