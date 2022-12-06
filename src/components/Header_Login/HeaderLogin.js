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
            <button id="btn_login" onClick={routeChange}>LOGIN</button>
          </form>   
      </div>
    );
  }
  
  export default HeaderLogin;