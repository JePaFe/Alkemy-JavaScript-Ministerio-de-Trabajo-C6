const body = document.querySelector("body");

// body.onkeypress = () => {
//   console.log("onkeypress");
// };

body.addEventListener("keydown", () => {
  console.log("keydown");
});

body.addEventListener("keyup", (event) => {
  console.log(event.key);

  if (event.key == "Enter") {
    console.log("keyup");
  }

  //   console.log(event.keyCode);
});
