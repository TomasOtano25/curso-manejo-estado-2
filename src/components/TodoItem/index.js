import React from "react";
import { CompleIcon } from "../TodoIcon/CompleIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  // const onComplete = () => {
  //   alert("Ya completaste " + props.text);
  // };

  // const onDelete = () => {
  //   alert("Ya eliminarte " + props.text);
  // };

  return (
    <li className="TodoItem">
      {/* <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        √
      </span> */}

      <CompleIcon complete={props.completed} onComplete={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
      {/* <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span> */}
    </li>
  );
}

export { TodoItem };
