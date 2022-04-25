import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./css/TodoSearch.css";

function TodoSearch(props) {
  const { searchValue, setSearchValue } = useContext(TodoContext);

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
