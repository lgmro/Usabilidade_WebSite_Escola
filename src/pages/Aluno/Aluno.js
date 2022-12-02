import "./Aluno.css"
import LogoAluno from "../../icons/aluno_icon.png"
import BodySelectTitles from "../../components/Body_Home/BodySelectTitles";
import BodySelect from "../../components/Body_Home/BodySelect";
import Cadastro from "../../components/Cadastro/Cadastro";
import Botoes from "../../components/Conjunto_Botoes/Botoes";
import BotaoEditar from "../../icons/botao_editar.png"
import BotaoMenos from "../../icons/botao_menos.png"
import { useState, useEffect } from 'react';
import api from "../../service/Api.js";

function Aluno() {
    const [inputNome, setInputNome] = useState("")
    const [inputCpf, setInputCpf] = useState("")
    const [inputMatricula, setInputMatricula] = useState("")
    const [inputSalaId, setInputSalaId] = useState(0)
    const [todosAlunos, setTodosAlunos] = useState([])
    const [todasSalas, setTodasSalas] = useState([])
    const [clickEditarButton, setclickEditarButton] = useState(false)
    const [idAlunoEditar, setidAlunoEditar] = useState(0)   


    async function cadastrarAluno() {
        const response = await api.post('professor', {
            nome: inputNome,
            cpf: inputCpf,
            numero_matricula: inputMatricula,
            sala_id: inputSalaId
        })

        if (response.status === 200) {
            setTodosAlunos([...todosAlunos, {
                nome: inputNome,
                cpf: inputCpf,
                titulo_academico: inputMatricula,
                sala_id: inputSalaId
            }])
        }

        setInputNome("")
        setInputCpf("")
        setInputMatricula("")
        setInputSalaId(0)

        window.location.reload()
    }

    async function atualizarAluno() {
        const response = await api.put("professor", {
            id: idAlunoEditar,
            nome: inputNome,
            cpf: inputCpf,
            numero_matricula: inputMatricula,
            sala_id: inputSalaId 
        });

        if(response.status === 200) {
            setTodosAlunos(todosAlunos.map((aluno, key) => {
                 if(aluno.id === idAlunoEditar) {
                        return {...aluno, nome: inputNome, cpf: inputCpf, numero_matricula: inputMatricula, sala_id: inputSalaId}
                } else {
                    return aluno
                }
            }))
        }
        
        setclickEditarButton(false)
        setInputNome("")
        setInputCpf("")
        setInputMatricula("")
        setInputSalaId(0)
        setidAlunoEditar(0)

        window.location.reload()
    }

    async function deletarAluno(idAluno) {
        const response = await api.delete("professor", {
            data: {
                id: idAluno
            }
        });

        if(response.status === 200) {
            setTodosAlunos(todosAlunos.filter(alunoDeletado => alunoDeletado.id !== idAluno));
        }
       
    }

    function carregarDados(aluno) {
        setclickEditarButton(true)
        setidAlunoEditar(aluno.id)
        setInputNome(aluno.nome)
        setInputCpf(aluno.cpf)
        setInputMatricula(aluno.numero_matricula)
        setInputSalaId(aluno.sala_id)
    }

    useEffect(()=> {
        async function getAlunos() {
            const response = await api.get('professores')
            setTodosAlunos(response.data)    
        }
        getAlunos()
    }, [])

    useEffect(()=> {
        async function getSalas() {
            const response = await api.get('disciplinas')
            setTodasSalas(response.data)
        }
        getSalas()
    }, [])

    const nomeSala = (id) => {
        const currentId = id
        const foundName = todasSalas.find((item) => item.id === currentId)
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

            if(inputNome.trim().length === 0 || inputCpf.trim().length === 0 || inputMatricula.trim().length === 0 || inputSalaId === 0 || clickEditarButton === true) {
                btnCadastrar.disabled = true;
                btnCadastrar.style.background = "#5a6896"
            } else {
                btnCadastrar.disabled = false;
                btnCadastrar.style.background = "#26335D"
            }
        }
    ativarDesativarBotoes()
    }, [inputNome, inputCpf, inputMatricula, inputSalaId, clickEditarButton])


    return (
        <div className="page_container_aluno">
            <div className="content_wrap_aluno">
                <div>     
                    <Cadastro campo_um="Nome:" campo_dois="CPF:" campo_tres="Número matrícula:" campo_quatro="Nome da Sala:" lista_itens={todasSalas} onChangeCampoUm={setInputNome} onChangeCampoDois={setInputCpf} onChangeCampoTres={setInputMatricula} onChangeCampoQuatro={setInputSalaId} valueCampoUm={inputNome} valueCampoDois={inputCpf} valueCampoTres={inputMatricula} valueCampoQuatro={inputSalaId}/>
                </div>
                <div className="botoes_aluno">
                    <Botoes onclick_botao_cadastrar={cadastrarAluno} onclick_botao_atualizar={atualizarAluno}/>
                </div>
                <div className="body_select">
                    <div className="titles_select">
                        <BodySelectTitles campo_um="Nome:" campo_dois="CPF:" campo_tres="Número matrícula:" campo_quatro="Sala:"/>
                    </div>
                    <div className="listar_dados">
                        <ul className="lista_select">
                            {todosAlunos?.map((val, key) => { 
                                return (
                                    <div className="conjunto_bodyselect" key={key}>
                                        <li key={key}><BodySelect icone={LogoAluno} dados={val} nomeItem={nomeSala(val.sala_id)}/></li>
                                        <div className="botoes_edite_menos">
                                            <li className="botao_editar_class" onClick={() => carregarDados(todosAlunos.find(e => e.id === val.id))}><img id="botao_editar" src={BotaoEditar} alt="icone"/></li>
                                            <li  onClick={() => deletarAluno(val.id)}><img id="botao_menos" src={BotaoMenos} alt="icone"/></li>
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

export default Aluno;