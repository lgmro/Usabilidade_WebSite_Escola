import Footer from "../../components/Footer_Login/Footer";
import HeaderHome from "../../components/Header_Home/HeaderHome";
import Sidebar from "../../components/Sidebar_Home/Sidebar";
import NavPage from "../NavPage/NavPage";
import "./Home.css"


function Home() {
    return (
        <div className="page_container_home">
            <div className="content_wrap">
                <HeaderHome/>
                <div className="container_conteudo">
                    <Sidebar/>     
                    <NavPage/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;