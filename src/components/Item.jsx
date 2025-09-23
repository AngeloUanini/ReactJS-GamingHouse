import "./Item.css";

export default function Item(props) {
    const texto = `Producto: ${props.title}`

    return <div className="producto">
        <img width="150" 
        src={props.img} alt="monitor"
        />

        <h4>{ props.title }</h4>
        <p>Precio: ${ props.price }</p>
        <button>Ver Mas</button>
    </div>
}