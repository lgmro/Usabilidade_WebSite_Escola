import "./Sidebar.css"
import {SidebarData} from "./SidebarData.js"

function Sidebar() {
    return (
        <div className="sidebar_container">
            <ul className="sidebar_list">
                {SidebarData.map((val, key) => {
                    return (
                        <li id={window.location.pathname == val.link ? "active" : ""} className ="row_list"key={key} onClick={() => {window.location.pathname = val.link;}}>
                            <div id="menu_icone">
                                <img id="menu_icone_logo" src={val.icon} alt="icone menu"/>
                            </div>
                            <div id="menu_titulo">
                                {val.title}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar;