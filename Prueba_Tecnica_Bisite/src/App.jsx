import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Regulations } from "./pages/Regulations";
import { Credits } from "./pages/Credits";
import { Appbar } from "./components/navbar/Appbar";

function App() {

  return (
    <>
      <Router>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Regulations" element={<Regulations />} />
          <Route path="/Credits" element={<Credits />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
