import LogoProfessor from "../../icons/professor_icon.png"
import "./BodySelect.css"

function BodySelect(props) {
    return (
        <div className="containerBodySelect">
            <div className="dados">
                <ul>
                    <li><img id="logo_select" src={props.icone} alt="icone"/></li>
                    <li className="dados_two">{props.dados_um}</li>
                    <li className="dados_three">{props.dados_dois}</li>
                    <li className="dados_four">{props.dados_tres}</li>
                    <li className="dados_five">{props.dados_quatro}</li>
                    <li className="dados_six"><img id="logo_select" src={LogoProfessor} alt="icone"/></li>
                    <li><img id="logo_select" src={LogoProfessor} alt="icone"/></li>
                </ul>
            </div>
        </div>
    )
}

export default BodySelect;