import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import "./ItemDetailContainer.css";

export default function ItemDetail({ producto }) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <img src={producto.img} alt={producto.title} />
      <div>
        <h2>{producto.title}</h2>
        <p>{producto.description}</p>
        <p className="price">Precio: ${producto.price}</p>
        <p>Stock disponible: {producto.stock}</p>

        {added ? (
          <button className="agregar-btn">
            ✅ Producto agregado
          </button>
        ) : (
          <ItemCount stock={producto.stock} onAdd={handleAdd} />
        )}
      </div>
    </div>
  );
}
