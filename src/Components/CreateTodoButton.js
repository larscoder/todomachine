import React from "react";
import "./css/CreateTodoButton.css";

function CreateTodoButton({ setOpenModal, statusModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => setOpenModal(!statusModal)}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
