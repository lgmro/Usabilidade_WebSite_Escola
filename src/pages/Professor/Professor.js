import BodySelectTitles from "../../components/Body_Home/BodySelectTitles";
import BodySelect from "../../components/Body_Home/BodySelect";
import Cadastro from "../../components/Cadastro/Cadastro";
import Botoes from "../../components/Conjunto_Botoes/Botoes";
import LogoProfessor from "../../icons/professor_icon.png"
import BotaoEditar from "../../icons/botao_editar.png"
import BotaoMenos from "../../icons/botao_menos.png"
import { useState, useEffect } from 'react';
import "./Professor.css"
import api from "../../service/Api.js";

function Professor() {
    const [inputNome, setInputNome] = useState("")
    const [inputCpf, setInputCpf] = useState("")
    const [inputTitulo, setInputTitulo] = useState("")
    const [inputDisciplinaId, setInputDisciplinaId] = useState(0)
    const [todosProfessores, setTodosProfessores] = useState([])
    const [todasDisciplinas, setTodasDisciplinas] = useState([])

    async function cadastrarProfessor() {
        const response = await api.post('professor', {
                nome: inputNome,
                cpf: inputCpf,
                titulo_academico: inputTitulo,
                disciplina_id: inputDisciplinaId
        })
        setTodosProfessores([...todosProfessores, {
            nome: inputNome,
            cpf: inputCpf,
            titulo_academico: inputTitulo,
            disciplina_id: inputDisciplinaId
    }])

        setInputNome("")
        setInputCpf("")
        setInputTitulo("")
        setInputDisciplinaId(0)
    }

    function carregarDados(professor) {
        setInputNome(professor.nome)
        setInputCpf(professor.cpf)
        setInputTitulo(professor.titulo_academico)
        setInputDisciplinaId(professor.disciplina_id)
        let btnAtualizar = document.getElementById("btn_atualizar")
        btnAtualizar.disabled = false;
        btnAtualizar.style.background = "#26335D"
    }

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

    useEffect(() => {
        function ativarDesativarBotoes() {
            let btnCadastrar = document.getElementById("btn_cadastrar")
            let btnAtualizar = document.getElementById("btn_atualizar")

            if(inputNome.trim().length === 0 || inputCpf.trim().length === 0 || inputTitulo.trim().length === 0 || inputDisciplinaId === 0) {
                btnCadastrar.disabled = true;
                btnCadastrar.style.background = "#5a6896"
                btnAtualizar.disabled = true;
                btnAtualizar.style.background = "#5a6896"
            } else {
                btnCadastrar.disabled = false;
                btnCadastrar.style.background = "#26335D"
            }
        }
    ativarDesativarBotoes()
    }, [inputNome, inputCpf, inputTitulo, inputDisciplinaId])

    return (
        <div className="page_container_professor">
            <div className="content_wrap_professor">
                <div>     
                    <Cadastro campo_um="Nome:" campo_dois="CPF:" campo_tres="Título acadêmico:" campo_quatro="Disciplina:" lista_Disciplina={todasDisciplinas} onChangeCampoUm={setInputNome} onChangeCampoDois={setInputCpf} onChangeCampoTres={setInputTitulo} onChangeCampoQuatro={setInputDisciplinaId} valueCampoUm={inputNome} valueCampoDois={inputCpf} valueCampoTres={inputTitulo} valueCampoQuatro={inputDisciplinaId}/>
                </div>
                <div className="botoes_professor">
                    <Botoes onclick_botao_cadastrar={cadastrarProfessor} valueCampoUm={inputNome} valueCampoDois={inputCpf} valueCampoTres={inputTitulo} valueCampoQuatro={inputDisciplinaId}/>
                </div>
                <div className="body_select">
                    <div className="titles_select">
                        <BodySelectTitles campo_um="Nome:" campo_dois="CPF:" campo_tres="Título acadêmico:" campo_quatro="Disciplina:"/>
                    </div>
                    <div className="listar_dados">
                        <ul className="lista_select">
                            {todosProfessores.map((val, key) => {
                                return (
                                    <div className="conjunto_bodyselect">

                                    <li key={key}><BodySelect icone={LogoProfessor} dados={val}/></li>
                                    <div className="botoes_edite_menos">
                                        <li className="botao_editar_class" onClick={() => carregarDados(todosProfessores.find(e => e.id === val.id))}><img id="botao_editar" src={BotaoEditar} alt="icone"/></li>
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
};

export default Professor;