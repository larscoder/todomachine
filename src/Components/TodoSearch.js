import React from "react";
import "./css/TodoSearch.css";

function TodoSearch() {
  const onSerachVAlueChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      onChange={onSerachVAlueChange}
      className="TodoSearch"
      placeholder="Buscar"
    />
  );
}

export { TodoSearch };
