import BodySelect from "../../components/Body_Home/BodySelect";
import Cadastro from "../../components/Cadastro/Cadastro";
import "./Professor.css"

function Professor() {
    return (
        <div className="page_container_professor">
            <div className="content_wrap_professor">
                <div>
                    <Cadastro/>
                </div>
                <div>
                    <BodySelect/>
                </div>
            </div>
        </div>
    );
};

export default Professor;