import { useRef, useState } from "react";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import AppContext from "./context/AppContext";
import Counter from "./components/Counter";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Tarea 1" },
    { id: 3, title: "Tarea 3" },
    { id: 4, title: "Tarea 4" },
  ]);
  const countNoteRef = useRef(0);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    countNoteRef.current++;
  };

  const data = {
    tasks,
    addTask,
    countNoteRef,
  };

  return (
    <>
      <h1>App</h1>
      <AppContext.Provider value={data}>
        <TaskList />
        <Footer />
      </AppContext.Provider>
      <Counter />
    </>
  );
}

/*

App
  Context -> Login
    Header
      Nav 
    Main
      Section
        Article
          Button
    Footer
      Menu

*/

export default App;
