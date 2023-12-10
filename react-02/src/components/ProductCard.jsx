import React from "react";
import Button from "./Button";

function ProductCard({ imagen, nombre, precio }) {
  const handleClick = (name) => {
    console.log("Comprar: " + name);
  };

  const handleAnchor = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <div>
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Precio: {precio}</p>
      <button onClick={() => handleClick(nombre)}>Comprar</button>
      <a href="https://google.com" onClick={handleAnchor}>
        Google
      </a>
      <Button producto={nombre} fnClick={handleClick} />
    </div>
  );
}

export default ProductCard;
