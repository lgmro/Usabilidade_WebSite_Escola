import BodySelectTitles from "../../components/Body_Home/BodySelectTitles";
import BodySelect from "../../components/Body_Home/BodySelect";
import Cadastro from "../../components/Cadastro/Cadastro";
import Botoes from "../../components/Conjunto_Botoes/Botoes";
import { useState, useEffect } from 'react';
import api from "../../service/Api.js";
import Select from "../../components/Cadastro_Select/Select";
import LogoMatricular from "../../icons/matricular.png"
import BotaoEditar from "../../icons/botao_editar.png"
import BotaoMenos from "../../icons/botao_menos.png"
import "./Matricular.css"


function Matricular() {
    const [inputNome, setInputNome] = useState("")
    const [inputSalaId, setInputSalaId] = useState(0)
    const [todasSalas, setTodasSalas] = useState([])
    
    return (
    <div className="page_container_aluno">
            <div className="content_wrap_aluno">
                <div className="campos_select">    
                    <div className="campos_direito">
                        <Select nome="Id da Turma: " lista_itens={[{id: 1}, {id: 2}]}/>
                    </div>
                    <div className="campos_esquerdo">
                        <Select nome="Escolha o aluno: " lista_itens={[{id: 1, nome: "José"}, {id: 2, nome: "Ana"}]}/>
                    </div>
                </div>
                <div className="botoes_aluno">
                    <Botoes onclick_botao_cadastrar={()=>{}} onclick_botao_atualizar={()=>{}}/>
                </div>
                <div className="body_select">
                    <div className="titles_select">
                        <BodySelectTitles campo_um="Turma" campo_dois="" campo_tres="" campo_quatro="Aluno"/>
                    </div>
                    <div className="listar_dados">
                        <ul className="lista_select">
                            {[{id: 1, turma_id:2, aluno_id:3}]?.map((val, key) => { 
                                return (
                                    <div className="conjunto_bodyselect" key={key}>
                                        <li key={key}><BodySelect icone={LogoMatricular} dados_two={val.turma_id} dados_three="" dados_four="" dados_five={val.aluno_id} lista_itens={null}/></li>
                                        <div className="botoes_edite_menos">
                                            <li className="botao_editar_class"><img id="botao_editar" src={BotaoEditar} alt="icone"/></li>
                                            <li><img id="botao_menos" src={BotaoMenos} alt="icone"/></li>
                                        </div>
                                    </div>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Matricular;