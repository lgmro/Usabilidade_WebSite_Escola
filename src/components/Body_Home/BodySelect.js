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
                </ul>
            </div>
        </div>
    )
}

export default BodySelect;