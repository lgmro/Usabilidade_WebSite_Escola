import "./Boletim.css"
import LogoBoletim from "../../icons/boletim_icon.png"
import BodySelectTitles from "../../components/Body_Home/BodySelectTitles";
import BodySelect from "../../components/Body_Home/BodySelect";
import Cadastro from "../../components/Cadastro/Cadastro";
import Botoes from "../../components/Conjunto_Botoes/Botoes";
import BotaoEditar from "../../icons/botao_editar.png"
import BotaoMenos from "../../icons/botao_menos.png"
import Select from "../../components/Cadastro_Select/Select";
import { useState, useEffect } from 'react';
import api from "../../service/Api.js";

function Boletim() {
    const [inputNota, setInputNota] = useState(0.0)
    const [inputTurmaId, setInputTurmaId] = useState(0)
    const [todosBoletins, setTodosBoletins] = useState([])
    const [inputAlunoId, setAlunoId] = useState(0)
    const [todosAlunos, setTodosAlunos] = useState([])
    const [clickEditarButton, setclickEditarButton] = useState(false)
    const [idBoletimEditar, setidBoletimEditar] = useState(0)  
    const [todasTurmasId, setTodasTurmasID] = useState([{id: 1}, {id: 2}, {id: 3}])

    async function cadastrarBoletim() {
        const response = await api.post('boletins', {
            turma_id: inputTurmaId,
            aluno_id: inputAlunoId,
            nota_final: inputNota,
        })

        if (response.status === 200) {
            setTodosBoletins([...todosBoletins, {
                turma_id: inputTurmaId,
                aluno_id: inputAlunoId,
                nota_final: inputNota,
                aprovocao: response.data.aprovacao
            }])
        }

        setInputTurmaId(0)
        setAlunoId(0)
        setInputNota(0.0)

        window.location.reload()
    }

    async function atualizarBoletim() {
        const response = await api.put(`boletins/${idBoletimEditar}`, {
            turma_id: inputTurmaId,
            aluno_id: inputAlunoId,
            nota_final: inputNota,
        });

        if(response.status === 200) {
            setTodosBoletins(todosBoletins.map((boletim, key) => {
                 if(boletim.id === idBoletimEditar) {
                        return {...boletim, turma_id: inputTurmaId, aluno_id: inputAlunoId, nota_final: inputNota, aprovacao: response.data.aprovacao}
                } else {
                    return boletim
                }
            }))
        }
        
        setclickEditarButton(false)
        setInputTurmaId(0)
        setAlunoId(0)
        setInputNota(0.0)

        let inputAluno = document.getElementById("input_select")
        inputAluno.disabled = false;

        let inputTurma = document.getElementById("input_quatro")
        inputTurma.disabled = false;

        window.location.reload()
    }

    async function deletarBoletim(idBoletim) {
        const response = await api.delete(`boletins/${idBoletim}`);

        if(response.status === 200) {
            setTodosBoletins(todosBoletins.filter(boletimDeletado => boletimDeletado.id !== idBoletim));
        }
       
    }

    async function carregarDadosBoletim(idBoletim) {
        const response = await api.get(`boletins/${idBoletim}`);

        setclickEditarButton(true)
        setidBoletimEditar(idBoletim)
        setInputTurmaId(response.data.turma_id)
        setAlunoId(response.data.aluno_id)
        setInputNota(response.data.nota_final)


        let inputAluno = document.getElementById("input_select")
        inputAluno.disabled = true;

        let inputTurma = document.getElementById("input_quatro")
        inputTurma.disabled = true;
    }

    useEffect(()=> {
        async function getBoletins() {
            const response = await api.get('boletins')
            setTodosBoletins(response.data)    
        }
        getBoletins()
    }, [])

    useEffect(()=> {
        async function getTurmasId() {
            const response = await api.get('turma')
            setTodasTurmasID(response.data)
        }
        getTurmasId()
    }, [])

    useEffect(()=> {
        async function getAlunos() {
            const response = await api.get('alunos')
            setTodosAlunos(response.data)
        }
        getAlunos()
    }, [])

    const nomeAluno = (id) => {
        const currentId = id
        const foundName = todosAlunos.find((item) => item.id === currentId)
        return foundName?.nome
    }

    const verificarAprovacao = (aprovacao) => {
        if (aprovacao === 1) {
            return "Aprovado"
        } else {
            return "Reprovado"
        }
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

            if(inputNota === 0 || inputTurmaId === 0 || inputAlunoId === 0 || clickEditarButton === true) {
                btnCadastrar.disabled = true;
                btnCadastrar.style.background = "#5a6896"
            } else {
                btnCadastrar.disabled = false;
                btnCadastrar.style.background = "#26335D"
            }
        }
    ativarDesativarBotoes()
    }, [inputNota, inputTurmaId, inputAlunoId, clickEditarButton])

    return (
        <div className="page_container_boletim">
            <div className="content_wrap_boletim">
                <div>     
                    <Cadastro campo_um="Nota:" campo_dois="" campo_tres="" campo_quatro="Turma id:" lista_itens={todasTurmasId} onChangeCampoUm={setInputNota} onChangeCampoQuatro={setInputTurmaId} valueCampoUm={inputNota} valueCampoQuatro={inputTurmaId}/>
                </div>
                <div className="select_alunos">     
                    <Select nome="Aluno:" onChangeSelect={setAlunoId}  valueSelect={inputAlunoId} lista_itens={todosAlunos}/>
                </div>
                <div className="botoes_boletim">
                    <Botoes onclick_botao_cadastrar={cadastrarBoletim} onclick_botao_atualizar={atualizarBoletim}/>
                </div>
                <div className="body_select">
                    <div className="titles_select">
                        <BodySelectTitles campo_um="Aluno" campo_dois="Turma" campo_tres="Nota do Aluno" campo_quatro="Status"/>
                    </div>
                    <div className="listar_dados">
                        <ul className="lista_select">
                            {todosBoletins?.map((val, key) => { 
                                return (
                                    <div className="conjunto_bodyselect" key={key}>
                                        <li key={key}><BodySelect icone={LogoBoletim} dados_two={nomeAluno(val.aluno_id)} dados_three={val.turma_id} dados_four={val.nota_final} dados_five={verificarAprovacao(val.aprovacao)} lista_itens={null}/></li>
                                        <div className="botoes_edite_menos">
                                            <li className="botao_editar_class" onClick={() => carregarDadosBoletim(val.id)}><img id="botao_editar" src={BotaoEditar} alt="icone"/></li>
                                            <li  onClick={() => deletarBoletim(val.id)}><img id="botao_menos" src={BotaoMenos} alt="icone"/></li>
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

export default Boletim;