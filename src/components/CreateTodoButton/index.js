import React from "react";
import "./CreateTodoButton.css";

export function CreateTodoButton({ setOpenModal }) {
  const onClickButton = (msg) => {
    setOpenModal(true);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton("Aqui deberia haber un modal")}
    >
      +
    </button>
  );
}
