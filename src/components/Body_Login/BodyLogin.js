import "./BodyLogin.css"
import LogoEscola from "../../icons/logo.png"

function BodyLogin() {
    return (
        <div className="container_body">
            <div className="bem_vindo">
                <h1 id="texto_bemvindo">BEM-VINDO À HOGWARTS</h1>
                <h2 id="subtitulo_bemvindo">Aprenda com os melhores</h2>
            </div>
            <div className="logo_escola">
                <img id="logo_escola" src={LogoEscola} alt="Logo Escola"/>
            </div>
        </div>
    );
}

export default BodyLogin