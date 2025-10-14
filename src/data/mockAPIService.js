import productos from "./data";

// Obtener todos los productos
export function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Datos cargados correctamente");
      resolve(productos);
    }, 1000);
  });
}

// Obtener producto por ID
export function getProductById(idParam) {
  return new Promise((resolve) => {
    const itemRequested = productos.find((item) => String(item.id) === idParam);
    setTimeout(() => resolve(itemRequested), 1000);
  });
}

// Obtener productos por categoría
export function getProductsByCategory(catParam) {
  return new Promise((resolve, reject) => {
    const itemsRequested = productos.filter((item) => item.category === catParam);
    if (itemsRequested.length === 0) {
      reject("No se encontraron productos en esta categoría");
    }
    setTimeout(() => resolve(itemsRequested), 1000);
  });
}
