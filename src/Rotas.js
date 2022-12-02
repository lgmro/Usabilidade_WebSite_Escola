import { Route, Routes } from "react-router-dom"
import Professor from "./pages/Professor/Professor.js";
import Aluno from "./pages/Aluno/Aluno.js";
import Turma from "./pages/Turma/Turma";
import Boletim from "./pages/Boletim/Boletim";
import Disciplinas from "./pages/Disciplinas/Disciplinas";
// import Matricular from "./pages/Matricular/Matricular.js";
import BemVindo from "./pages/BemVindo/BemVindo.js";

const Rotas = () => {
    return (
        <Routes> 
            <Route path="/home" element={<BemVindo/>}/>
            <Route path="/professor" element={<Professor/>}/>
            <Route path="/aluno" element={<Aluno/>}/>
            <Route path="/turma" element={<Turma/>}/>
            <Route path="/boletim" element={<Boletim/>}/>
            <Route path="/disciplinas" element={<Disciplinas/>}/>
            {/* <Route path="/matricular" element={<Matricular/>}/> */}

        </Routes>
    );
}

export default Rotas;