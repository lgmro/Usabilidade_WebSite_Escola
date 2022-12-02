import "./Disciplinas.css"
import LogoDisciplina from "../../icons/disciplina_icon.png"
import BodySelectTitles from "../../components/Body_Home/BodySelectTitles";
import BodySelect from "../../components/Body_Home/BodySelect";
import Cadastro from "../../components/Cadastro/Cadastro";
import Botoes from "../../components/Conjunto_Botoes/Botoes";
import BotaoEditar from "../../icons/botao_editar.png"
import BotaoMenos from "../../icons/botao_menos.png"
import { useState, useEffect } from 'react';
import api from "../../service/Api.js";

function Disciplinas() {
    const [inputNome, setInputNome] = useState("")
    const [inputSalaId, setInputSalaId] = useState(0)
    const [todasDisciplinas, setTodasDisciplinas] = useState([])
    const [todasSalas, setTodasSalas] = useState([])
    const [clickEditarButton, setclickEditarButton] = useState(false)
    const [idDisciplinaEditar, setidDisciplinaEditar] = useState(0)   


    async function cadastrarDisciplina() {
        const response = await api.post('disciplina', {
            nome: inputNome,
            sala_id: inputSalaId
        })

        if (response.status === 200) {
            setTodasDisciplinas([...todasDisciplinas, {
                nome: inputNome,
                sala_id: inputSalaId
            }])
        }

        setInputNome("")
        setInputSalaId(0)

        window.location.reload()
    }

    async function atualizarDisciplina() {
        const response = await api.put("disciplina", {
            id: idDisciplinaEditar,
            sala_id: inputSalaId 
        });

        if(response.status === 200) {
            setTodasDisciplinas(todasDisciplinas.map((disciplina, key) => {
                 if(disciplina.id === idDisciplinaEditar) {
                        return {...disciplina, nome: inputNome, sala_id: inputSalaId}
                } else {
                    return disciplina
                }
            }))
        }
        
        setclickEditarButton(false)
        setInputNome("")
        setInputSalaId(0)
        setidDisciplinaEditar(0)

        window.location.reload()
    }

    async function deletarDisciplina(idDisciplina) {
        const response = await api.delete("disciplina", {
            data: {
                id: idDisciplina
            }
        });

        if(response.status === 200) {
            setTodasDisciplinas(todasDisciplinas.filter(disciplinaDeletada => disciplinaDeletada.id !== idDisciplina));
        }
       
    }

    function carregarDados(disciplina) {
        setclickEditarButton(true)
        setidDisciplinaEditar(disciplina.id)
        setInputNome(disciplina.nome)
        setInputSalaId(disciplina.sala_id)
    }

    useEffect(()=> {
        async function getDisciplinas() {
            const response = await api.get('disciplinas')
            setTodasDisciplinas(response.data)    
        }
        getDisciplinas()
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

            if(inputNome.trim().length === 0 || inputSalaId === 0 || clickEditarButton === true) {
                btnCadastrar.disabled = true;
                btnCadastrar.style.background = "#5a6896"
            } else {
                btnCadastrar.disabled = false;
                btnCadastrar.style.background = "#26335D"
            }
        }
    ativarDesativarBotoes()
    }, [inputNome, inputSalaId, clickEditarButton])


    return (
        <div className="page_container_aluno">
            <div className="content_wrap_aluno">
                <div>     
                    <Cadastro campo_um="Nome:" campo_dois="" campo_tres="" campo_quatro="Nome da Sala:" lista_itens={todasSalas} onChangeCampoUm={setInputNome} valueCampoQuatro={inputSalaId}/>
                </div>
                <div className="botoes_aluno">
                    <Botoes onclick_botao_cadastrar={cadastrarDisciplina} onclick_botao_atualizar={atualizarDisciplina}/>
                </div>
                <div className="body_select">
                    <div className="titles_select">
                        <BodySelectTitles campo_um="Nome:" campo_dois=" " campo_tres=" " campo_quatro="Sala:"/>
                    </div>
                    <div className="listar_dados">
                        <ul className="lista_select">
                            {todasDisciplinas?.map((val, key) => { 
                                return (
                                    <div className="conjunto_bodyselect" key={key}>
                                        <li key={key}><BodySelect icone={LogoDisciplina} dados={val} nomeItem={nomeSala(val.sala_id)}/></li>
                                        <div className="botoes_edite_menos">
                                            <li className="botao_editar_class" onClick={() => carregarDados(todasDisciplinas.find(e => e.id === val.id))}><img id="botao_editar" src={BotaoEditar} alt="icone"/></li>
                                            <li  onClick={() => deletarDisciplina(val.id)}><img id="botao_menos" src={BotaoMenos} alt="icone"/></li>
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

export default Disciplinas;