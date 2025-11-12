import Item from "./Item";
import "./Item.css";

function ItemList({ productos }) {
  return (
    <div className="contenedor-productos">
      {productos.map((prod) => (
        <Item
          key={prod.id}
          id={prod.id}
          title={prod.title}
          price={prod.price}
          img={prod.img}
        />
      ))}
    </div>
  );
}

export default ItemList;
