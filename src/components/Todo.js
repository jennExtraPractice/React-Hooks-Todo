import React from "react";
import "../styles.css";

const Todo = props => {
  return (
    <div
      className={`task${props.task.completed ? "done" : ""}`}
      onClick={() => props.toggleTask(props.task.id)}
    >
      {props.task.task}
    </div>
  );
};
export default Todo;
