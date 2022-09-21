import React from "react";
import "./TodoCounter.css";

const styles = {
  color: "red",
  backgroundColor: "yellow",
};

// function TodoCounter() {
//   return <h2 style={styles}>Has completado 2 de 3</h2>;
// }
function TodoCounter(props) {
  const { completed, total } = props;
  return (
    <h2 className="TodoCounter">
      Has completado {completed} de {total} TODOs
    </h2>
  );
}

export { TodoCounter };
