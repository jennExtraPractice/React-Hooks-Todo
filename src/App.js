import React, { useState } from "react";
import "./styles.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = taskName => {
    const newTask = { task: taskName, id: Date.now() };
    setTasks([...tasks, newTask]);
  };

  const clearComplete = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const toggleTask = id => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="App">
      <TodoForm addTask={addTask} clearComplete={clearComplete} />
      <TodoList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}
