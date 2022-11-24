import BodySelectTitles from "../../components/Body_Home/BodySelectTitles";
import BodySelect from "../../components/Body_Home/BodySelect";
import Cadastro from "../../components/Cadastro/Cadastro";
import Botoes from "../../components/Conjunto_Botoes/Botoes";
import LogoProfessor from "../../icons/professor_icon.png"
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
    return (
        <div className="page_container_professor">
            <div className="content_wrap_professor">
                <h1>{inputNome}</h1>
                <div>     
                    <Cadastro campo_um="Nome:" campo_dois="CPF:" campo_tres="Título acadêmico:" campo_quatro="Disciplina:" lista_Disciplina={listaDisciplina} onChangeNome={setInputNome}/>
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
                                    <li key={key}><BodySelect icone={LogoProfessor} dados_um={val.nome} dados_dois={val.cpf} dados_tres={val.titulo} dados_quatro={val.disciplina}/></li>
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