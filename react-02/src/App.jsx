import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ComponenteB from "./components/ComponenteB";

function App() {
  const user = {
    email: "x@x.com",
    password: 1234,
  };

  return (
    <>
      <Header />
      <Main
        usuario={user}
        titulo="Mi Aplicación"
        seccion="Listado de productos"
      />
      <Footer />

      <ComponenteB />
    </>
  );
}

export default App;
