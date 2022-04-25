import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./css/TodoForm.css";

function TodoForm() {
  const [todoValue, setTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (input) => {
    setTodoValue(input.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!todoValue.length) {
      alert("Debes escribir una nueva tarea para guardarla.");
      return;
    }
    addTodo(todoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>...</label>
      <textarea
        placeholder="Escribre tu tarea"
        onChange={onChange}
        value={todoValue}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
