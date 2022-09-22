import React from "react";
import { TodoContext } from "../../TodoContext";
import "./CreateTodoButton.css";

export function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

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
