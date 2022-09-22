import React from "react";
import { useTodos } from "../../App/useTodos";
import "./CreateTodoButton.css";

export function CreateTodoButton() {
  const { openModal, setOpenModal } = useTodos();

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
