import TitlesSelect from "../../components/TitlesSelect/TitlesSelect.js";
import BodySelect from "../../components/Body_Home/BodySelect";
import Cadastro from "../../components/Cadastro/Cadastro";
import Botoes from "../../components/Conjunto_Botoes/Botoes";
import { useState, useEffect } from 'react';
import api from "../../service/Api.js";
import Select from "../../components/Cadastro_Select/Select";
import LogoTurma from "../../icons/turma_icon.png"
import BotaoEditar from "../../icons/botao_editar.png"
import BotaoMenos from "../../icons/botao_menos.png"
import "./Turma.css"

function Turma() {
    return (
        <div className="page_container_aluno">
                <div className="content_wrap_aluno">
                    <div className="campos_select">    
                        <div className="campos_direito">
                            <Select nome="Nome professor: " lista_itens={[{id: 1, nome: "Eduardo Jóse"}, {id: 2, nome: "José Amarão"}]}/>
                        </div>
                        <div className="campos_esquerdo">
                            <Select nome="Nome disciplina: " lista_itens={[{id: 1, nome: "Sistema ditribuido"}, {id: 2, nome: "Engenharia software"}]}/>
                        </div>
                    </div>
                    <div className="botoes_aluno">
                        <Botoes onclick_botao_cadastrar={()=>{}} onclick_botao_atualizar={()=>{}}/>
                    </div>
                    <div className="body_select">
                        <div className="titles_select">
                            <TitlesSelect campo_um="Id Turma" campo_dois="Professor" campo_tres="Disciplina" campo_quatro="Alunos"/>
                        </div>
                        <div className="listar_dados">
                            <ul className="lista_select">
                                {[{id: 1, professor:"Eduardo Jóse", disciplina:"Sistema ditribuido"}, {id: 2, professor:"Marcone Brune", disciplina:"Engenharia Computação"}]?.map((val, key) => { 
                                    return (
                                        <div className="conjunto_bodyselect" key={key}>
                                            <li key={key}><BodySelect icone={LogoTurma} dados_two={val.id} dados_three={val.professor} dados_four={val.disciplina} dados_five="" lista_itens={[{id: 1, nome: "José Agusto Santos Caramujo"}]}/></li>
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

export default Turma;