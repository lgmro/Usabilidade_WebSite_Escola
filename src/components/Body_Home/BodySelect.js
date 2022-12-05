import "./BodySelect.css"

function BodySelect(props) {

    return (
        <div className="containerBodySelect">
            <div className="dados">
                <ul>
                    <li><img id="logo_select" src={props.icone} alt="icone"/></li>
                    { props.dados_two === "" ? null 
                    : (
                        <li className="dados_two">{props?.dados_two}</li>
                    )}
                    { props.dados_three === "" ? null 
                    : (
                        <li className="dados_three">{props?.dados_three}</li>
                    )}
                    { props.dados_four === "" ? null 
                    : (
                        <li className="dados_four">{props?.dados_four}</li>
                    )}
                    { props.dados_five === "" ? null 
                    : (
                        <li className="dados_five">{props?.dados_five}</li>
                    )}

                    { props.lista_itens === null ? null 
                    : (
                        <select id="dados_six" value={0}>
                        <option disabled defaultValue value={0}>Alunos da turma</option>
                        {props.lista_itens.map((val, key) => {
                            return (
                                <option id={val.id} key={key} value={val.id}>{(val.nome) ? val.nome : val.id}</option>
                            )
                        })};
                    </select>
                    )}
                                       
                </ul>
            </div>
        </div>
    )
}

export default BodySelect;