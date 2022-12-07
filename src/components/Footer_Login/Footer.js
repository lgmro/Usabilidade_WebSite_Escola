import { useState, useEffect } from 'react';
import api from "../../service/Api.js";
import "./Footer.css"

function Footer() {
    const [razaoSocial, setRazaoSocial] = useState("")
    const [CNPJ, setCNPJ] = useState("")

    useEffect(()=> {
        async function getBoletins() {
            let idEscola = 1
            const response = await api.get(`escola/${idEscola}`)
            setRazaoSocial(response.data.nome)   
            setCNPJ(response.data.cnpj) 
        }
        getBoletins()
    }, [])

    return (
        <div className="container">
            <div className="dados_escola">
                <div>
                    <h2 id="razao_social">{razaoSocial + " - " + CNPJ}</h2>
                </div>
                
                <ul>
                    <li>(071) 3333-0156</li>
                    <li>Rua Maraguita, 270, Azkaban - BA, 44745-150</li>
                    <li>hogwart.gerencia@example.com</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer