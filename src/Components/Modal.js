import React from "react";
import ReactDOM from "react-dom";
import "./css/Modal.css";

function Modal(props) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">{props.children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
