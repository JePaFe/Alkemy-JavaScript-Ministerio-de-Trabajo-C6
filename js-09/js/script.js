const form = document.querySelector("#formId");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.querySelector("#nombre").value;

  console.log("form submit", nombre);

  //   event.target.submit();
});

// ---

const enlace = document.querySelector("a");

enlace.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(event.target.href);

  window.location = event.target.href;
});
