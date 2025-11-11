import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/mockAPIService";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((data) => setProducto(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ textAlign: "center" }}>Cargando producto...</p>;
  if (!producto) return <p style={{ textAlign: "center" }}>Producto no encontrado</p>;

  return <ItemDetail producto={producto} />;
}
