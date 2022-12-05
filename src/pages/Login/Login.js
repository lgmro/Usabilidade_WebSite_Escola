
import Footer from "../../components/Footer_Login/Footer.js";
import BodyLogin from "../../components/Body_Login/BodyLogin.js";
import "./Login.css"
import HeaderLogin from "../../components/Header_Login/HeaderLogin.js";

function Login() {
  return (
    <div className="page_container">
        <div className="content_wrap">
            <HeaderLogin/>
            <BodyLogin/>
        </div>
        <Footer/>
    </div>
  );
}

export default Login;