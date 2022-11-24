import "./Cadastro.css"

function Cadastro() {
    return (
        <div className="containerCadastro">
            <div className="container_entrada_dados_esquerdo">
                <div className="dados_nome">
                    <div>
                        <h2>Nome: </h2>
                    </div>
                    <div>
                        <input type="text" name="nome" id="input_nome"/>
                    </div> 
                </div>
                <div className="dados_cpf">
                    <div>
                        <h2>CPF: </h2>
                    </div>
                    <div>
                         <input type="text" name="cpf" id="input_cpf"/>
                    </div>
                </div>
            </div>
            <div className="container_entrada_dados_direito">
                <div className="dados_academico">
                    <div>
                        <h2>Título acadêmico: </h2>
                    </div>
                    <div>
                        <input type="text" name="nome" id="input_academico"/>
                    </div> 
                </div>
                <div className="dados_disciplina">
                    <div>
                        <h2>Disciplina: </h2>
                    </div>
                    <div>
                        <select>
                            <option>Disciplina 01</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;