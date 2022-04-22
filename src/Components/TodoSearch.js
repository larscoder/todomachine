import React from "react";
import "./css/TodoSearch.css";

function TodoSearch(props) {
  const { searchValue, setSearchValue } = props;

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
