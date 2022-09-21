import React from "react";
// import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const todos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Cortar cebolla 2", completed: false },
  { text: "Cortar cebolla 3", completed: false },
  { text: "Hola Mundo", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
