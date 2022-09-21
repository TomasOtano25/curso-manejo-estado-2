import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Cortar cebolla 2", completed: false },
//   { text: "Cortar cebolla 3", completed: false },
//   { text: "Hola Mundo", completed: false },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
