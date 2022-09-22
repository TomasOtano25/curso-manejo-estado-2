import React from "react";
import "./CreateTodoButton.css";

export function CreateTodoButton({ setOpenModal }) {
  const onClickButton = (msg) => {
    // if (!!openModal) {
    //   setOpenModal(false);
    // } else {
    //   setOpenModal(true);
    // }
    setOpenModal((prevState) => !prevState);
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
