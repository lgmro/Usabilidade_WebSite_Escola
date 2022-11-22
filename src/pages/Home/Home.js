import { BrowserRouter } from "react-router-dom";
import Footer from "../../components/Footer_Login/Footer";
import HeaderHome from "../../components/Header_Home/HeaderHome";
import Sidebar from "../../components/Sidebar_Home/Sidebar";
import Rotas from "../../Rotas";
import Professor from "../Professor/Professor";
import "./Home.css"


function Home() {
    return (
            <div className="page_container">
                <div className="content_wrap">
                    <HeaderHome/>
                    <div className="container_conteudo">
                        <div className="Sidebar">
                            <Sidebar/>     
                        </div>
                        <div>
                            <Rotas/>
                        </div>
                    </div>
                </div>
                    <Footer/>
            </div>
      

    )
}

export default Home;