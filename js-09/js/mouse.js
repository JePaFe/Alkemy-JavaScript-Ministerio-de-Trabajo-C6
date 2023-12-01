const h1 = document.querySelector("h1");

h1.addEventListener("mouseover", () => {
  console.log("mouseover");
});

h1.addEventListener("mouseenter", (event) => {
  console.log("mouseenter");
  event.target.classList.add("destacado");
});

h1.addEventListener("mouseleave", (event) => {
  console.log("mouseleave");
  event.target.classList.remove("destacado");
});

h1.addEventListener("mousedown", (event) => {
  console.log("mousedown");
  event.target.classList.toggle("destacado");
});

h1.onmouseout = (event) => {
  console.log("onmouseout", event);
};

h1.onclick = (event) => {
  console.log("Click");
  event.target.textContent = "Click en DOM";
};

console.dir(h1);
