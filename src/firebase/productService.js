import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import { db } from "./config";

// Obtener todos los productos
export async function getAllProducts() {
  const productosRef = collection(db, "productos");
  const snapshot = await getDocs(productosRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id, // el ID del documento ("1", "2", etc.)
    ...doc.data(),
  }));
}

// Obtener producto por ID (usa el ID del documento, no el campo interno)
export async function getProductById(idParam) {
  try {
    const ref = doc(db, "productos", idParam); // busca el documento con nombre = idParam
    const snapshot = await getDoc(ref);

    if (!snapshot.exists()) {
      throw new Error("Producto no encontrado");
    }

    return { id: snapshot.id, ...snapshot.data() };
  } catch (error) {
    console.error("Error al obtener producto:", error);
    throw error;
  }
}

// Obtener productos por categoría
export async function getProductsByCategory(categoria) {
  try {
    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("category", "==", categoria));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error al filtrar productos por categoría:", error);
    throw error;
  }
}
