import React from "react";

function Saludo() {
  const nombre = "Pedro";
  const style = {
    color: "snow",
    backgroundColor: "darkgray",
  };

  return (
    <>
      <h2 style={style}>Hola, {nombre}</h2>
    </>
  );
}

export default Saludo;
