import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { getData, getProductsByCategory } from "../data/mockAPIService";

export default function ItemListContainer({ greeting }) {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = categoriaId ? getProductsByCategory(categoriaId) : getData();

    fetchData
      .then((data) => setItems(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <section>
      <h2 className="titulo">{greeting}</h2>
      <div className="contenedor-productos">
        {items.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </section>
  );
}
