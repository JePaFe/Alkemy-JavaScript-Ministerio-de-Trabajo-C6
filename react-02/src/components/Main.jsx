import React from "react";
import ProductCard from "./ProductCard";

function Main({ titulo, seccion, usuario }) {
  // console.log(props);
  console.log(usuario);

  return (
    <main>
      <h1>{titulo}</h1>
      <section>
        <h2>{seccion}</h2>

        <ProductCard nombre="Producto 1" precio="100" imagen="https://picsum.photos/200/200?random=1" />
        <ProductCard nombre="Producto 2" precio="150" imagen="https://picsum.photos/200/200?random=2" />
        <ProductCard nombre="Producto 3" precio="250" imagen="https://picsum.photos/200/200?random=3" />
      </section>
    </main>
  );
}

export default Main;
