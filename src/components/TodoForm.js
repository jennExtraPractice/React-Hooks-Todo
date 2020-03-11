import React, { useState } from "react";
import "../styles.css";

const TodoForm = props => {
  const [task, setTask] = useState();

  const handleChange = e => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addTask(task);
    setTask("");
  };

  const removeItem = e => {
    e.preventDefault();
    props.clearComplete(task);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter task"
      />
      <button type="submit" onChange={handleChange}>
        Add task
      </button>
      <button type="remove" onClick={removeItem}>
        Clear Complete
      </button>
    </form>
  );
};

export default TodoForm;
