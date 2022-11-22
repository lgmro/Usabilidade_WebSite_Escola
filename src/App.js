import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
