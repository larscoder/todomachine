import React from "react";
import "./css/TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h2
      className={`TodoCounter-title ${
        !!loading && "TodoCounter-title-loading"
      }`}
    >
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };
