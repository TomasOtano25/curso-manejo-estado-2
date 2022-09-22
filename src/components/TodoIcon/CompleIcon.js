import React from "react";
import { TodoIcon } from "./";

function CompleIcon({ complete, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={complete ? "#4caf50" : "gray"}
      onClick={onComplete}
    />
  );
}

export { CompleIcon };
