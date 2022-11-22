import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login.js";
import Home from "./pages/Home/Home.js";
import Professor from "./pages/Professor/Professor.js";

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/professor" element={<Professor/>}/>
        </Routes>
        
    );
}

export default Rotas;