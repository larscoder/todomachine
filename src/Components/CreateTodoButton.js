import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./css/CreateTodoButton.css";

function CreateTodoButton() {
  const { setOpenModal, openModal } = useContext(TodoContext);
  return (
    <button
      className="CreateTodoButton"
      onClick={() => setOpenModal(!openModal)}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
