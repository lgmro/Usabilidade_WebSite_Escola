import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData.js"
import "./Sidebar.css"

function Sidebar() {
    const location = useLocation();
    return (
        <div className="sidebar_container">
            <ul className="sidebar_list">
                {SidebarData.map((val, key) => {
                    return (
                        <Link to={val.link} key={key}>
                            <li id={location.pathname === val.link ? "active" : ""} className ="row_list"key={key}>
                                <div id="menu_icone">
                                    <img id="menu_icone_logo" src={val.icon} alt="icone menu"/>
                                </div>
                                <div id="menu_titulo">
                                    {val.title}
                                </div>
                            </li>
                        </Link>
                    );
                })};
            </ul>
        </div>
    );
};

export default Sidebar;