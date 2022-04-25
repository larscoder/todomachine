import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton";

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}

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

export { AppUI };
