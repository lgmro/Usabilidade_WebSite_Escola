import "./Cadastro.css"
import React from 'react';

function Cadastro(props) {
    const handleChange = event => {
        const input = event.target;
        const value = input.value;
    
        props.onChangeNome(value);
      };
    return (
        <div className="containerCadastro">
            <div className="container_entrada_dados_esquerdo">
                { props.campo_um === "" ? null 
                : (
                <div className="campo_um">
                    <div>
                        <h2>{props.campo_um}</h2>
                    </div>
                    <div>
                        <input type="text" name="input_um" id="input_um" onChange={handleChange}/>
                    </div> 
                </div>
                )}
                { props.campo_dois === "" ? null 
                : (
                <div className="campo_dois">
                    <div>
                        <h2>{props.campo_dois}</h2>
                    </div>
                    <div>
                         <input type="text" name="input_dois" id="input_dois"/>
                    </div>
                </div>
                )}
            </div>
            <div className="container_entrada_dados_direito">
            { props.campo_tres === "" ? null 
                : (
                <div className="campo_tres">
                    <div>
                        <h2>{props.campo_tres}</h2>
                    </div>
                    <div>
                        <input type="text" name="input_tres" id="input_tres"/>
                    </div> 
                </div>
                )}
                { props.campo_quatro === "" ? null 
                : (
                <div className="campo_quatro">
                    <div>
                        <h2>{props.campo_quatro}</h2>
                    </div>
                    <div>
                        <select id="input_quatro">
                            {props.lista_Disciplina.map((val, key) => {
                                return (
                                    <option key={key}>{val.nome}</option>
                                )
                            })};
                        </select>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Cadastro;