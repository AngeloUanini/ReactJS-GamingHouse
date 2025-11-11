import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import "./Cart.css";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <section className="cart-empty">
        <h2>Tu carrito está vacío 😢</h2>
        <Link to="/" className="volver-btn">Volver a la tienda</Link>
      </section>
    );
  }

  return (
    <section className="cart-container">
      <h2>🛒 Carrito de compras</h2>

      <div className="cart-items">
        {cart.map((prod) => (
          <CartItem key={prod.id} {...prod} />
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ${totalPrice}</h3>
        <div className="cart-buttons">
          <button onClick={clearCart} className="vaciar-btn">Vaciar carrito</button>
          <Link to="/checkout" className="checkout-btn">Finalizar compra</Link>
        </div>
      </div>
    </section>
  );
}
