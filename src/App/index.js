import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Cortar cebolla 2", completed: false },
//   { text: "Cortar cebolla 3", completed: false },
//   { text: "Hola Mundo", completed: false },
// ];

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [searchValue, setSearchValue] = React.useState("");

  const [todos, setTodos] = React.useState(parsedTodos);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const saveTodos = (newTodos) => {
    const stringifyTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", stringifyTodos);
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text == text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
    // newTodos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // };
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text == text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
