import { useState } from "react";

export default function CreateTask({ onCreate }) {
  const [task, setTask] = useState({
    title: "",
    priority: "low",
  });

  const handleTask = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const createTask = (e) => {
    e.preventDefault();
    if (!task.title) {
      alert("Task title is required");
      return;
    }
    onCreate({ id: Math.random(), ...task });
    setTask({ title: "", priority: "low" });
  };

  return (
    <form className="input-group" onSubmit={createTask}>
      <input
        type="text"
        className="form-control"
        placeholder="Add a new Task"
        aria-label="Add a new Task"
        name="title"
        value={task.title}
        onChange={handleTask}
      ></input>
      <select className="form-select" name="priority" onChange={handleTask}>
        {["low", "medium", "high"].map((priority) => {
          return (
            <option key={priority} value={priority}>
              {priority.at(0).toUpperCase() + priority.slice(1)} Priority
            </option>
          );
        })}
      </select>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}
