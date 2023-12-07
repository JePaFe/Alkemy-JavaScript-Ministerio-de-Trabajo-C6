import Saludo from "./Saludo";
import TodoList from "./TodoList";

function App() {
  const nombre = "Juan";
  const isAdmin = true;
  const style = {
    color: isAdmin ? "red" : "green",
    fontSize: "1em",
    fontWeight: "normal",
  };

  return (
    <>
      <h1 style={style} className={isAdmin ? "admin" : "user"}>
        App {nombre} {3 + 6}
      </h1>
      <Saludo />
      <TodoList />
      <Saludo></Saludo>
      <p>Lorem, ipsum dolor.</p>
      <img src="" alt="" />
    </>
  );
}

export default App;
