import { useCart } from "../context/CartContext";
import "./CartWidget.css"; 

export default function CartWidget(){
  const { totalQuantity } = useCart();

  return (
    <div className="cart-widget" aria-label="Carrito">
      <span className="cart-emoji">🛒</span>
      {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
    </div>
  )
}
