import BodySelectTitles from "../../components/Body_Home/BodySelectTitles";
import BodySelect from "../../components/Body_Home/BodySelect";
import Botoes from "../../components/Conjunto_Botoes/Botoes";
import { useState, useEffect } from 'react';
import api from "../../service/Api.js";
import Select from "../../components/Cadastro_Select/Select";
import LogoMatricular from "../../icons/matricular.png"
import "./Matricular.css"


function Matricular() {
    const [inputTurmaId, setInputTurmaId] = useState(0)
    const [inputTurmaIdAntiga, setInputTurmaIdAntiga] = useState(0)
    const [inputSalaId, setInputSalaId] = useState(0)
    const [inputAlunoId, setInputAlunoId] = useState(0)
    const [todasSalas, setTodasSalas] = useState([])
    const [todasMatriculas, setTodasMatriculas] = useState([])
    const [todasTurmas, setTodasTurmas] = useState([])
    const [todosAlunos, setTodosAlunos] = useState([])

    async function cadastrarMatricula() {
        const response = await api.patch(`turma/${inputTurmaId}/matricula`, {
            sala_id: inputSalaId,
            aluno_id: inputAlunoId,
            turma_antiga: inputTurmaIdAntiga
        })

        console.log(response.data)
        console.log(response)

        if (response.data === "Aluno Matriculado") {
            setTodasMatriculas([...todasMatriculas, {
                turma_id: inputTurmaId,
                aluno_id: inputAlunoId,
            }])
        }

        if (response.data === "Aluno Precisa ser aprovado no modulo ou ele não faz parte dessa turma") {
            alert(response.data)
        }

        setInputTurmaId(0)
        setInputAlunoId(0)
        setInputSalaId(0)

        window.location.reload()
    }

    useEffect(()=> {
        async function getAlunos() {
            const response = await api.get('alunos')
            setTodosAlunos(response.data)    
        }
        getAlunos()
    }, [])

    useEffect(()=> {
        async function getSalas() {
            const response = await api.get('salas')
            setTodasSalas(response.data)
        }
        getSalas()
    }, [])

        useEffect(()=> {
        async function getMatriculas() {
            const response = await api.get('turmas/matricula')
            setTodasMatriculas(response.data)
        }
        getMatriculas()
    }, [])

    useEffect(()=> {
        async function getTurmas() {
            const response = await api.get('turma')
            setTodasTurmas(response.data)    
        }
        getTurmas()
    }, [])

    const nomeAluno = (id) => {
        const currentId = id
        const foundName = todosAlunos.find((item) => item.id === currentId)
        return foundName?.nome
    }
    
    useEffect(() => {
        function ativarDesativarBotoes() {
            let btnCadastrar = document.getElementById("btn_cadastrar")
            let btnAtualizar = document.getElementById("btn_atualizar")
            let selectTurmaAntiga = document.getElementById("turma_antiga")
            let selectSalaId = document.getElementById("sala_id")
            
            btnAtualizar.style.visibility = "hidden"
            selectSalaId.style.marginLeft = "20px"
            selectTurmaAntiga.style.marginLeft = "32px"

            if (inputSalaId === "1") {
                selectTurmaAntiga.disabled = true
            } else {
                selectTurmaAntiga.disabled = false
            }

            if(inputAlunoId === 0 || inputTurmaId === 0 || inputSalaId === 0) {
                btnCadastrar.disabled = true;
                btnCadastrar.style.background = "#5a6896"
            } else {
                btnCadastrar.disabled = false;
                btnCadastrar.style.background = "#26335D"
            }
        }
    ativarDesativarBotoes()
    }, [inputSalaId, inputTurmaId, inputAlunoId, inputTurmaIdAntiga])

    return (
    <div className="page_container_aluno">
            <div className="content_wrap_aluno">
                <div className="campos_select">    
                    <div className="campos_direito">
                        <Select nome="Turma nova: " lista_itens={todasTurmas} onChangeSelect={setInputTurmaId} valueSelect={inputTurmaId}/>
                        <Select idSelect={"sala_id"} nome="Id da Sala: " lista_itens={todasSalas} onChangeSelect={setInputSalaId} valueSelect={inputSalaId}/>
                    </div>
                    <div className="campos_esquerdo">
                        <Select nome="Escolha o aluno: " lista_itens={todosAlunos} onChangeSelect={setInputAlunoId} valueSelect={inputAlunoId}/>
                        <Select idSelect={"turma_antiga"} nome="Turma antiga: " lista_itens={todasTurmas} onChangeSelect={setInputTurmaIdAntiga} valueSelect={inputTurmaIdAntiga}/>
                    </div>
                </div>
                <div className="botoes_aluno">
                    <Botoes onclick_botao_cadastrar={cadastrarMatricula} onclick_botao_atualizar={()=>{}}/>
                </div>
                <div className="body_select">
                    <div className="titles_select">
                        <BodySelectTitles campo_um="Turma" campo_dois="" campo_tres="" campo_quatro="Aluno"/>
                    </div>
                    <div className="listar_dados">
                        <ul className="lista_select">
                            {todasMatriculas?.map((val, key) => { 
                                return (
                                    <div className="conjunto_bodyselect" key={key}>
                                        <li key={key}><BodySelect icone={LogoMatricular} dados_two={val.turma_id} dados_three="" dados_four={nomeAluno(val.aluno_id)} dados_five="" lista_itens={null}/></li>
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