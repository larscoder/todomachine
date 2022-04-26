import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton";
import { Modal } from "../Components/Modal";
import { TodoForm } from "../Components/TodoForm";
import { EmptyTodos } from "../Components/EmptyTodos";
import { TodosError } from "../Components/TodosError";
import { TodosLoading } from "../Components/TodosLoading";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    searchValue,
    setSearchValue,
    totalTodos,
    completedTodos,
    setOpenModal,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />
      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </React.Fragment>
  );
}

export default App;
