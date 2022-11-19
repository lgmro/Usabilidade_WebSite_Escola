import "./HeaderLogin.css"
import { useNavigate } from "react-router-dom";

function HeaderLogin() {
  let navigate = useNavigate(); 
  const routeChange = () => { 
    navigate(`/home`);
  }

    return (
      <div className="header_login">
          <h1 id="titulo_header">HOGWARTS DE AZKABAN</h1>
  
          <form>
            <input type="text" name="username" id="input_username" placeholder="Nome de usuário"/>
            <input type="password" name="senha" id="input_senha" placeholder="Senha do usuário"/>      
            <button id="btn_login" onClick={routeChange}>LOGIN</button>
          </form>   
      </div>
    );
  }
  
  export default HeaderLogin;