import React from "react";
import ComponenteA from "./ComponenteA";

function ComponenteB() {
  const handleEventoA = (mensaje) => {
    // Lógica del evento en ComponenteB
    console.log(`Evento A manejado en ComponenteB: ${mensaje}`);
  };

  return (
    <div>
      <h2>Componente B</h2>
      <ComponenteA onEventoA={handleEventoA} />
    </div>
  );
}

export default ComponenteB;