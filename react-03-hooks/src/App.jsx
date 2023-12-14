import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Cart from "./components/Cart";

function App() {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setContador(contador + 1);
      document.title = `Contador ${contador}`;
    }, 1000);
    return () => clearTimeout(timer);
  }, [contador]);

  return (
    <>
      <h1>App</h1>
      <p>Estado: {contador}</p>
      <button type="button" onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>

      <span>Width es de {width}px</span>

      {/* <Form /> */}

      <Cart />
    </>
  );
}

export default App;
