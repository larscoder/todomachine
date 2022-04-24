import React, { useState } from "react";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoItem } from "./Components/TodoItem";
import { TodoList } from "./Components/TodoList";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoProvider } from "./TodoContext";
import { TodoContext } from "./TodoContext";
// import "./App.css";

function App() {
  return (
    <TodoProvider>
      <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        <TodoContext.Consumer>
          {({ searchedTodos, completeTodo, deleteTodo }) => (
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
          )}
        </TodoContext.Consumer>
        <CreateTodoButton />
      </React.Fragment>
    </TodoProvider>
  );
}

export default App;
