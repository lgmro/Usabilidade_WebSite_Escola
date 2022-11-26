import "./Botoes.css"

function Botoes(props) {
    return (
         <div className="botoes">
            <div>
                <button id="btn_atualizar">Atualizar</button>
            </div>
            <div>
                <button id="btn_cadastrar" onClick={props.onclick_botao_cadastrar}>Cadastrar</button>
            </div>
        </div>
    )
}

export default Botoes;