import BodySelectTitles from "../../components/Body_Home/BodySelectTitles";
import BodySelect from "../../components/Body_Home/BodySelect";
import Cadastro from "../../components/Cadastro/Cadastro";
import Botoes from "../../components/Conjunto_Botoes/Botoes";
import "./Professor.css"

function Professor() {
    return (
        <div className="page_container_professor">
            <div className="content_wrap_professor">
                <div>
                    <Cadastro/>
                </div>
                <div className="botoes_professor">
                    <Botoes/>
                </div>
                <div className="body_select">
                    <div className="titles_select">
                        <BodySelectTitles/>
                    </div>
                    <div className="listar_dados">
                        <ul className="lista_select">
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>
                            <li><BodySelect/></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Professor;