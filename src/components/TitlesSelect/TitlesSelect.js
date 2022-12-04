import "./TitlesSelect.css"

function TurmaTitles(props) {
    return (
        <div className="containerTitles">
            <div className="titulos">
                <ul>
                { props.campo_um === "" ? null 
                : (
                    <li>{props.campo_um}</li>
                )}
                { props.campo_dois === "" ? null 
                : (
                    <li id="titulo_two">{props.campo_dois}</li>
                )}
                { props.campo_tres === "" ? null 
                : (
                    <li id="titulo_three">{props.campo_tres}</li>
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

export default TurmaTitles;