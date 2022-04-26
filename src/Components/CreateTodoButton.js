import React from "react";
import "./css/CreateTodoButton.css";

function CreateTodoButton({ setOpenModal, openModal }) {
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
