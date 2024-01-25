import "bootstrap/dist/css/bootstrap.min.css";
import CreateTask from "./components/CreateTask";
import DisplayTasks from "./components/DisplayTasks";

import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addToTasks = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (task) => {
    const updatedTasks = tasks.filter(({ id }) => id !== task.id);
    setTasks(updatedTasks);
  };

  return (
    <div className="container p-5">
      <h2>Priority To-Do List</h2>
      <CreateTask onCreate={addToTasks} />
      <DisplayTasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
