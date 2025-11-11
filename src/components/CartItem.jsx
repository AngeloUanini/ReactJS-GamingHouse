import "./CartItem.css";
import { useCart } from "../context/CartContext";

export default function CartItem({ id, title, price, quantity, img }) {
  const { removeItem } = useCart();

  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div className="cart-item-info">
        <h4>{title}</h4>
        <p>Precio unitario: ${price}</p>
        <p>Cantidad: {quantity}</p>
        <p>Subtotal: ${price * quantity}</p>
      </div>
      <button onClick={() => removeItem(id)} className="remove-btn">🗑️</button>
    </div>
  );
}
