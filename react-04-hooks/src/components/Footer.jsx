import { useContext } from "react";
import AppContext from "../context/AppContext";

function Footer() {
  const { tasks } = useContext(AppContext);

  return (
    <footer>
      <h2>Footer</h2>
      <p>Tareas: {tasks.length}</p>
    </footer>
  );
}

export default Footer;
