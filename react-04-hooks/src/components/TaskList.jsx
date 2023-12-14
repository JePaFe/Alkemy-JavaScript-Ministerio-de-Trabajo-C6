import { useContext, useRef } from "react";
import AppContext from "../context/AppContext";
import Task from "./Task";

function TaskList() {
  const tasks = useContext(AppContext);
  const inputRef = useRef("");

  return (
    <>
      <h2>TaskList</h2>

      <input
        type="text"
        onInput={() => console.log(inputRef.current.value)}
        ref={inputRef}
      />
      <button type="button" onClick={() => console.log(inputRef.current.value)}>
        Enviar
      </button>

      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </>
  );
}

export default TaskList;
