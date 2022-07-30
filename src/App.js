import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MathR from "./components/math";
import Picture from "./components/picture";
import Home from "./components/home";
function App() {
  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/math" element={<MathR/>}/>
        <Route path="/picture" element={<Picture/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
