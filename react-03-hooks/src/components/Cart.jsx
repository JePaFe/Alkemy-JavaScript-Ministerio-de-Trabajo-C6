import { useEffect, useState } from "react";

function Cart() {
  const [productos, setProductos] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((datos) => setProductos(datos));
  }, []);

  return (
    <>
      <h2>Productos</h2>

      {productos.map((producto) => (
        <p key={"p" + producto.id}>{producto.title}</p>
      ))}

      <h2>Carrito</h2>
    </>
  );
}

export default Cart;
