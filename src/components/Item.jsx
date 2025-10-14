import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ id, title, img, price }) {
  return (
    <div className="producto">
      <img width="150" src={img} alt={title} />
      <h4>{title}</h4>
      <p>Precio: ${price}</p>
      <Link to={`/item/${id}`}>
        <button>Ver más</button>
      </Link>
    </div>
  );
}
