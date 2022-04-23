import React, { useState } from "react";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoItem } from "./Components/TodoItem";
import { TodoList } from "./Components/TodoList";
import { TodoSearch } from "./Components/TodoSearch";
// import "./App.css";

function App() {
  const localStorageTodos = localStorage.getItem("TodosMachine_v1");
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TodosMachine_v1", "[]");
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const saveTodos = (newTodos) => {
    localStorage.setItem("TodosMachine_v1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const completeTodo = (index, status) => {
    const newTodos = [...todos];
    newTodos[index].completed = status;

    saveTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    saveTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={completeTodo}
            onDelete={deleteTodo}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
