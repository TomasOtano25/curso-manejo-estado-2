import React from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoCounter.css";

const styles = {
  color: "red",
  backgroundColor: "yellow",
};

// function TodoCounter() {
//   return <h2 style={styles}>Has completado 2 de 3</h2>;
// }
function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };
