import "./HeaderHome.css"
import LogoEscola from "../../icons/logo.png"

function HeaderHome() {
    return (
        <div className="header_home">
            <div className="logo">
                <img id="logo_escola_home" src={LogoEscola} alt="Logo Escola"/>
            </div>

            <div className="dados_funcionario">
                <h3>Maria Joaquina</h3>
                <h3>Aux. Administrativo</h3>
            </div>
            
        </div>
      );
}
  

export default HeaderHome;