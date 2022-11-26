import "./Cadastro.css"
import React from 'react';

function Cadastro(props) {
    const handleChangeCampoUm = event => {
        const input = event.target;
        const value = input.value;
    
        props.onChangeCampoUm(value);
    };
      
    const handleChangeCampoDois= event => {
        const input = event.target;
        const value = input.value;
    
        props.onChangeCampoDois(value);
    };

    const handleChangeCampoTres = event => {
        const input = event.target;
        const value = input.value;
    
        props.onChangeCampoTres(value);
    };

    const handleChangeCampoQuatro = event => {
        const index = event.target.selectedIndex;
        const el = event.target.childNodes[index];
        const option =  el.getAttribute('id');  
        props.onChangeCampoQuatro(option);
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
                        <input value={props.valueCampoUm} type="text" name="input_um" id="input_um" onChange={handleChangeCampoUm}/>
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
                         <input value={props.valueCampoDois} type="text" name="input_dois" id="input_dois" onChange={handleChangeCampoDois}/>
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
                        <input value={props.valueCampoTres} type="text" name="input_tres" id="input_tres" onChange={handleChangeCampoTres}/>
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
                        <select id="input_quatro" onChange={handleChangeCampoQuatro} value={props.valueCampoQuatro}>
                            <option disabled selected value={0}>Selecione uma opção</option>
                            {props.lista_Disciplina.map((val, key) => {
                                return (
                                    <option id={val.id} key={key} value={val.id}>{val.nome}</option>
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