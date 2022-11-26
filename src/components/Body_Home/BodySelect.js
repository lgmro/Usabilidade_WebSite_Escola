import "./BodySelect.css"

function BodySelect(props) {
    return (
        <div className="containerBodySelect">
            <div className="dados">
                <ul>
                    <li><img id="logo_select" src={props.icone} alt="icone"/></li>
                    <li className="dados_two">{props.dados.nome}</li>
                    <li className="dados_three">{props.dados.cpf}</li>
                    <li className="dados_four">{props.dados.titulo_academico}</li>
                    <li className="dados_five">{props.dados.disciplina_id}</li>
                </ul>
            </div>
        </div>
    )
}

export default BodySelect;