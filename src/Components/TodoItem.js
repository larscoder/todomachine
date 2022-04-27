import React from "react";
import "./css/TodoItem.css";

function TodoItem({ index, completed, text, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <span
        onClick={() => onComplete(index, !completed)}
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
      >
        √
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span onClick={() => onDelete(index)} className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem };
