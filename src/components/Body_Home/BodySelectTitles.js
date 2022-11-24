import "./BodySelectTitles.css"

function BodySelectTitles (props) {
    return (
        <div className="containerBodySelectTitles">
            <div className="titulo_dados">
                <ul>
                { props.campo_um === "" ? null 
                : (
                    <li>{props.campo_um}</li>
                )}
                { props.campo_dois === "" ? null 
                : (
                    <li>{props.campo_dois}</li>
                )}
                { props.campo_tres === "" ? null 
                : (
                    <li>{props.campo_tres}</li>
                )}
                { props.campo_quatro === "" ? null 
                : (
                    <li>{props.campo_quatro}</li>
                )}
                </ul>
            </div>
        </div>
    )
}

export default BodySelectTitles;