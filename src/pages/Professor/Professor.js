import BodySelectTitles from "../../components/Body_Home/BodySelectTitles";
import BodySelect from "../../components/Body_Home/BodySelect";
import Cadastro from "../../components/Cadastro/Cadastro";
import Botoes from "../../components/Conjunto_Botoes/Botoes";
import LogoProfessor from "../../icons/professor_icon.png"
import BotaoEditar from "../../icons/botao_editar.png"
import BotaoMenos from "../../icons/botao_menos.png"
import { useState } from 'react';
import "./Professor.css"

function Professor() {
   const listaDisciplina = [
        {
            id: 1,
            nome: "Sistema Distribuído"
        },
        {
            id: 2,
            nome: "Engenharia de Software"
        },
        {
            id: 3,
            nome: "Programação"
        }
    ]

    const professorSelect = [
        {
            id: 1,
            nome: "José Carlos Augustino",
            cpf: "000.000.000-00",
            titulo: "Mestre em Ciência da Computação",
            disciplina: "Sistemas Distribuídos"
        },
        {
            id: 2,
            nome: "Maria Carlos Augustino",
            cpf: "000.030.000-00",
            titulo: "Doutora em Ciência da Computação",
            disciplina: "Usabilidade e web"
        },
        {
            id: 3,
            nome: "René Carlos Augustino",
            cpf: "000.000.340-00",
            titulo: "Mestre em Engenharia da Computação",
            disciplina: "Programação"
        },
        {
            id: 4,
            nome: "Jualiana Carlos Augustino",
            cpf: "000.000.040-00",
            titulo: "Doutor em Engenharia da Computação",
            disciplina: "Sistemas Distribuídos"
        },
    ]

    const [inputNome, setInputNome] = useState("")
    const [inputCpf, setInputCpf] = useState("")
    const [inputTitulo, setInputTitulo] = useState("")
    const [inputDisciplinaId, setInputDisciplinaId] = useState("")
    const [dadosEditar, setDadosrEditar] = useState(null)

    function carregarDados(professor) {
        const dados = {
            campo_um: professor.nome,
            campo_dois: professor.cpf,
            campo_tres: professor.titulo,
            campo_quatro: professor.disciplina
        }
        setDadosrEditar(dados)
    }

    return (
        <div className="page_container_professor">
            <div className="content_wrap_professor">
                <h1>{inputNome + inputCpf + inputTitulo + inputDisciplinaId}</h1>
                <div>     
                    <Cadastro editar={dadosEditar === null ? {campo_um: "", campo_dois: "", campo_tres: "", campo_quatro: ""} : dadosEditar} campo_um="Nome:" campo_dois="CPF:" campo_tres="Título acadêmico:" campo_quatro="Disciplina:" lista_Disciplina={listaDisciplina} onChangeCampoUm={setInputNome} onChangeCampoDois={setInputCpf} onChangeCampoTres={setInputTitulo} onChangeCampoQuatro={setInputDisciplinaId}/>
                </div>
                <div className="botoes_professor">
                    <Botoes/>
                </div>
                <div className="body_select">
                    <div className="titles_select">
                        <BodySelectTitles campo_um="Nome:" campo_dois="CPF:" campo_tres="Título acadêmico:" campo_quatro="Disciplina:"/>
                    </div>
                    <div className="listar_dados">
                        <ul className="lista_select">
                            {professorSelect.map((val, key) => {
                                return (
                                    <div className="conjunto_bodyselect">

                                    <li key={key}><BodySelect icone={LogoProfessor} dados_um={val.nome} dados_dois={val.cpf} dados_tres={val.titulo} dados_quatro={val.disciplina}/></li>
                                    <div className="botoes_edite_menos">
                                        <li className="botao_editar_class" onClick={() => carregarDados(professorSelect.find(e => e.id === val.id))}><img id="botao_editar" src={BotaoEditar} alt="icone"/></li>
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