import React from "react";
import "./css/TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h2 className="TodoCounter-title">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };
