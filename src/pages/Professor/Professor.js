import Cadastro from "../../components/Cadastro/Cadastro";
import "./Professor.css"

function Professor() {
    return (
        <div className="page_container">
            <div className="content_wrap">
                <div>
                    <Cadastro/>
                </div>
                <div>
                    Select
                </div>
            </div>
        </div>
    );
};

export default Professor;