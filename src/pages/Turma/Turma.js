import TitlesSelect from "../../components/TitlesSelect/TitlesSelect.js";
import BodySelect from "../../components/Body_Home/BodySelect";
import Botoes from "../../components/Conjunto_Botoes/Botoes";
import { useState, useEffect } from 'react';
import api from "../../service/Api.js";
import Select from "../../components/Cadastro_Select/Select";
import LogoTurma from "../../icons/turma_icon.png"
import BotaoEditar from "../../icons/botao_editar.png"
import BotaoMenos from "../../icons/botao_menos.png"
import "./Turma.css"

function Turma() {
    const [inputProfessorID, setInputProfessorID] = useState(0)
    const [inputDisciplinaID, setInputDisciplinaID] = useState(0)
    const [todasTurmas, setTodasTurmas] = useState([])
    const [todosProfessores, setTodosProfessores] = useState([])
    const [todasDisciplinas, setTodasDisciplinas] = useState([])
    const [clickEditarButton, setclickEditarButton] = useState(false)
    const [idTurmaEditar, setidTurmaEditar] = useState(0)  

    async function cadastrarTurma() {
        const response = await api.post('turma', {
            disciplina_id: inputDisciplinaID,
            professor_id: inputProfessorID,
        })

        if (response.status === 200) {
            setTodasTurmas([...todasTurmas, {
                disciplina_id: inputDisciplinaID,
                professor_id: inputProfessorID
            }])
        }
        setInputProfessorID(0)
        setInputDisciplinaID(0)

        console.log(todasTurmas)
        window.location.reload()
    }

    async function atualizarTurma() {
        const response = await api.put(`turma/${idTurmaEditar}`, {
            disciplina_id: inputDisciplinaID,
            professor_id: inputProfessorID
        });

        if(response.status === 200) {
            setTodasTurmas(todasTurmas.map((turma, key) => {
                 if(turma.id === idTurmaEditar) {
                        return {...turma, disciplina_id: inputDisciplinaID, professor_id: inputProfessorID}
                } else {
                    return turma
                }
            }))
        }
        
        setclickEditarButton(false)
        setInputProfessorID(0)
        setInputDisciplinaID(0)

        window.location.reload()
    }

    async function deletarTurma(idTurma) {
        const response = await api.delete(`turma/${idTurma}`);

        if(response.status === 200) {
            setTodasTurmas(todasTurmas.filter(turmaDeletada => turmaDeletada.id !== idTurma));
        }
       
    }

    async function carregarDadosTurma(idTurma) {
        const response = await api.get(`turma/${idTurma}`);

        setclickEditarButton(true)
        setidTurmaEditar(idTurma)
        setInputProfessorID(response.data.professor_id)
        setInputDisciplinaID(response.data.disciplina_id)
    }

    useEffect(()=> {
        async function getTurmas() {
            const response = await api.get('turma')
            setTodasTurmas(response.data)    
        }
        getTurmas()
    }, [])

    useEffect(()=> {
        async function getProfessores() {
            const response = await api.get('professores')
            setTodosProfessores(response.data)    
        }
        getProfessores()
    }, [])

    useEffect(()=> {
        async function getDisciplinas() {
            const response = await api.get('disciplinas')
            setTodasDisciplinas(response.data)
        }
        getDisciplinas()
    }, [])


    async function getAlunosTurmas(idTurma) {
        const response = await api.get('matricular')
        return [response.data]
    }


    const nomeProfessor = (id) => {
        const currentId = id
        const foundName = todosProfessores.find((item) => item.id === currentId)
        return foundName?.nome
    }

    const nomeDisciplina = (id) => {
        const currentId = id
        const foundName = todasDisciplinas.find((item) => item.id === currentId)
        return foundName?.nome
    }

    useEffect(() => {
        function ativarDesativarBotoes() {
            let btnCadastrar = document.getElementById("btn_cadastrar")
            let btnAtualizar = document.getElementById("btn_atualizar")

            if (clickEditarButton === false) {
                btnAtualizar.disabled = true;
                btnAtualizar.style.background = "#5a6896"
            }  else {
                btnAtualizar.disabled = false;
                btnAtualizar.style.background = "#26335D"
            }

            if(inputProfessorID === 0 || inputDisciplinaID === 0 || clickEditarButton === true) {
                btnCadastrar.disabled = true;
                btnCadastrar.style.background = "#5a6896"
            } else {
                btnCadastrar.disabled = false;
                btnCadastrar.style.background = "#26335D"
            }
        }
    ativarDesativarBotoes()
    }, [inputProfessorID, inputDisciplinaID, clickEditarButton])




    return (
        <div className="page_container_aluno">
                <div className="content_wrap_aluno">
                    <div className="campos_select">    
                        <div className="campos_direito">
                            <Select nome="Nome professor: " valueSelect={inputProfessorID} onChangeSelect={setInputProfessorID} lista_itens={todosProfessores}/>
                        </div>
                        <div className="campos_esquerdo">
                            <Select nome="Nome disciplina: " valueSelect={inputDisciplinaID} onChangeSelect={setInputDisciplinaID} lista_itens={todasDisciplinas}/>
                        </div>
                    </div>
                    <div className="botoes_aluno">
                        <Botoes onclick_botao_cadastrar={cadastrarTurma} onclick_botao_atualizar={atualizarTurma}/>
                    </div>
                    <div className="body_select">
                        <div className="titles_select">
                            <TitlesSelect campo_um="Id Turma" campo_dois="Professor" campo_tres="Disciplina" campo_quatro="Alunos"/>
                        </div>
                        <div className="listar_dados">
                            <ul className="lista_select">
                                {todasTurmas?.map((val, key) => { 
                                    return (
                                        <div className="conjunto_bodyselect" key={key}>
                                            <li key={key}><BodySelect icone={LogoTurma} dados_two={val.id} dados_three={nomeProfessor(val.professor_id)} dados_four={nomeDisciplina(val.disciplina_id)} dados_five="" lista_itens={[{id: 1, nome: "José Agusto Santos Caramujo"}]}/></li>
                                            <div className="botoes_edite_menos">
                                                <li className="botao_editar_class" onClick={() => carregarDadosTurma(val.id)}><img id="botao_editar" src={BotaoEditar} alt="icone"/></li>
                                                <li onClick={() => deletarTurma(val.id)}><img id="botao_menos" src={BotaoMenos} alt="icone"/></li>
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