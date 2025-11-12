import { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ nombre: "", email: "", telefono: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const order = {
      buyer,
      items: cart,
      total: totalPrice,
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("❌ Error al crear la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p style={{ textAlign: "center" }}>Procesando compra...</p>;

  if (orderId)
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>✅ ¡Compra realizada con éxito!</h2>
        <p>Tu número de orden es: <b>{orderId}</b></p>
      </div>
    );

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🛒 Finalizar compra</h2>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left", marginTop: "20px" }}>
        <label>Nombre:</label>
        <input
          name="nombre"
          value={buyer.nombre}
          onChange={handleChange}
          required
        /><br /><br />
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={buyer.email}
          onChange={handleChange}
          required
        /><br /><br />
        <label>Teléfono:</label>
        <input
          name="telefono"
          value={buyer.telefono}
          onChange={handleChange}
          required
        /><br /><br />
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
}
