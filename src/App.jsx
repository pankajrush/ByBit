import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import TwoStep from "./components/twostepverify/TwoStep";
import Important from "./components/important/Important";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/twostepverify" element={<TwoStep />} />
        <Route path="/important" element={<Important />} />
      </Routes>
    </Router>
  );
}

export default App;
