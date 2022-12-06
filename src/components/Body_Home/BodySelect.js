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
                        <li><button id="btn_consultar" onClick={props.clickSelect}>Consultar</button></li>
                    )}
                                       
                </ul>
            </div>
        </div>
    )
}

export default BodySelect;