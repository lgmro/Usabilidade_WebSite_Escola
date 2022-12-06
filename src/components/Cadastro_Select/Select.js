import "./Select.css"

function Select(props) {
    const handleSelect = event => {
        const index = event.target.selectedIndex;
        const el = event.target.childNodes[index];
        const option =  el.getAttribute('id');  
        props.onChangeSelect(option);
    };

    return (
        <div className="campo_select">
        <div>
            <h2>{props.nome}</h2>
        </div>
        <div>
            <select id={(props.idSelect) ? props.idSelect : "input_select"} className={"input_select_class"} onChange={handleSelect} value={props.valueSelect}>
                <option disabled defaultValue value={0}>Selecione uma opção</option>
                {props.lista_itens.map((val, key) => {
                    return (
                        <option id={val.id} key={key} value={val.id}>{(val.nome) ? val.nome : val.id}</option>
                    )
                })};
            </select>
        </div>
    </div>
    )
}

export default Select;