import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/mockAPIService";
import "./ItemDetailContainer.css";


export default function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((data) => setProducto(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="item-detail">
      <img src={producto.img} alt={producto.title} width="300" />
      <div>
        <h2>{producto.title}</h2>
        <p>{producto.description}</p>
        <p>Precio: ${producto.price}</p>
        <p>Stock disponible: {producto.stock}</p>
      </div>
    </div>
  );
}
