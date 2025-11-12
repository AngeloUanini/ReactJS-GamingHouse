import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../firebase/productService";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Si no hay id, no buscar nada
    if (!id) {
      setLoading(false);
      return;
    }

    setLoading(true);

    getProductById(id)
      .then((data) => setProducto(data))
      .catch((err) => {
        console.error("Error cargando producto:", err);
        setProducto(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ textAlign: "center" }}>🌀 Cargando producto...</p>;
  if (!producto) return <p style={{ textAlign: "center" }}>Producto no encontrado 😢</p>;

  return <ItemDetail producto={producto} />;
}
