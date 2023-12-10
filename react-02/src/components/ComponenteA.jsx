import React from "react";

function ComponenteA({ onEventoA }) {
  const handleClick = () => {
    onEventoA("Hola");
  };

  return <button onClick={handleClick}>Click en A</button>;
}

export default ComponenteA;
