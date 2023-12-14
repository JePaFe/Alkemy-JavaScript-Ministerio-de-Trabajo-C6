import React, { useState } from "react";

function Form() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleCorreo = (event) => {
    setCorreo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.length > 0 && correo.length > 0) {
      setSubmitted(true);
    } else {
      alert("Completar los compos obligatorios");
    }
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={nombre}
            onChange={handleNombre}
          />
        </div>
        <div>
          <label htmlFor="correo">Correo: </label>
          <input
            type="text"
            name="correo"
            id="correo"
            value={correo}
            onChange={handleCorreo}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {submitted && (
        <div>
          <p>Nombre: {nombre}</p>
          <p>Correo: {correo}</p>
        </div>
      )}
    </>
  );
}

export default Form;
