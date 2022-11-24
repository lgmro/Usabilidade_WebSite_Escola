import LogoProfessor from "../../icons/professor_icon.png"
import "./BodySelect.css"

function BodySelect() {
    return (
        <div className="containerBodySelect">
            <div className="dados">
                <ul>
                    <li><img id="logo_select" src={LogoProfessor} alt="icone"/></li>
                    <li className="dados_two">José Carlos Oliveira</li>
                    <li className="dados_three">000.000.000-00</li>
                    <li className="dados_four">Mestre em Ciência da Computação</li>
                    <li>Sistema Distribuídos</li>
                </ul>
            </div>
        </div>
    )
}

export default BodySelect;