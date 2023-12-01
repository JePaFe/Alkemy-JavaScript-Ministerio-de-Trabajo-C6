const select = document.querySelector("#selectId");

select.addEventListener("change", () => {
  console.log("change select");
});

const input = document.querySelector("#inputId");

input.addEventListener("change", () => {
  console.log("change input");
});

input.addEventListener("input", (event) => {
  console.log(event.target.value);
});
