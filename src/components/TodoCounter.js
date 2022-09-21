import React from "react";
import "./TodoCounter.css";

const styles = {
  color: "red",
  backgroundColor: "yellow",
};

// function TodoCounter() {
//   return <h2 style={styles}>Has completado 2 de 3</h2>;
// }
function TodoCounter() {
  return <h2 className="TodoCounter">Has completado 2 de 3</h2>;
}

export { TodoCounter };
