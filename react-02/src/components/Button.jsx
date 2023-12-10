import React from "react";

function Button({ producto, fnClick }) {
  //   const handleClickButton = () => {
  //     alert("Click en: " + producto);
  //   };

  return <button onClick={() => fnClick(producto)}>Click</button>;
}

export default Button;
