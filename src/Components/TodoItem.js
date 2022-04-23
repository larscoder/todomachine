import React from "react";
import "./css/TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        onClick={() => props.onComplete(props.index, !props.completed)}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span
        onClick={() => props.onDelete(props.index)}
        className="Icon Icon-delete"
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
