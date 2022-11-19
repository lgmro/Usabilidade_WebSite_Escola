import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login.js";
import Home from "./pages/Home/Home.js";

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
        
    );
}

export default Rotas;