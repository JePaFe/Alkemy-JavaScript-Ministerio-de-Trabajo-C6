import { useContext, useRef } from "react";
import AppContext from "../context/AppContext";
import Task from "./Task";

function TaskList() {
  const { tasks, addTask, countNoteRef } = useContext(AppContext);
  const inputRef = useRef("");
  const parrafoRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const task = {
      id: Date.now(),
      title: inputRef.current.value,
    };
    addTask(task);

    inputRef.current.value = "";

    parrafoRef.current.textContent = `Tareas: ${countNoteRef.current}`;
  };

  return (
    <>
      <h2>TaskList</h2>

      <p ref={parrafoRef}></p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onInput={() => console.log(inputRef.current.value)}
          ref={inputRef}
        />
        {/* <button
          type="button"
          onClick={() => console.log(inputRef.current.value)}
        >
          Enviar
        </button> */}
        <button type="submit">Enviar</button>
      </form>

      {tasks.map((task) => (
        <Task key={`task-${task.id}`} task={task} />
      ))}
    </>
  );
}

export default TaskList;
