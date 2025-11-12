import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getAllProducts, getProductsByCategory } from "../firebase/productService";

export default function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const data = categoriaId
          ? await getProductsByCategory(categoriaId)
          : await getAllProducts();
        setProductos(data);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoriaId]);

  if (loading) return <p style={{ textAlign: "center" }}>🌀 Cargando productos...</p>;

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "white" }}>{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  );
}
