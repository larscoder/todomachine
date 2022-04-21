import React from "react";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoItem } from "./Components/TodoItem";
import { TodoList } from "./Components/TodoList";
import { TodoSearch } from "./Components/TodoSearch";
// import "./App.css";

const todos = [
  { text: "Todo 1", completed: false },
  { text: "Todo 2", completed: false },
  { text: "Todo 3", completed: false },
  { text: "Todo 4", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
