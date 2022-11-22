import { Route, Routes } from "react-router-dom"
import Professor from "./pages/Professor/Professor.js";
import BemVindo from "./pages/BemVindo/BemVindo.js";

const Rotas = () => {
    return (
        <Routes> 
            <Route path="/home" element={<BemVindo/>}/>
            <Route path="/professor" element={<Professor/>}/>
        </Routes>
    );
}

export default Rotas;