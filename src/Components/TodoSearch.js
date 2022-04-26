import React from "react";
import "./css/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSerachValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      onChange={onSerachValueChange}
      value={searchValue}
      className="TodoSearch"
      placeholder="Buscar"
    />
  );
}

export { TodoSearch };
