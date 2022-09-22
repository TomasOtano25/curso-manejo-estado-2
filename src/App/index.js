import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../components/TodoForm";
import { TodosError } from "../components/TodosError";
import { TodoLoading } from "../components/TodosLoading";
import { EmptyTodos } from "../components/EmptyTodos";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Cortar cebolla 2", completed: false },
//   { text: "Cortar cebolla 3", completed: false },
//   { text: "Hola Mundo", completed: false },
// ];

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {error && <TodosError />}
        {loading &&
          new Array(4).fill().map((item, index) => <TodoLoading key={index} />)}
        {!loading && !searchedTodos.length && <EmptyTodos />}

        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} addTodo={addTodo} />
    </React.Fragment>
  );
}

export default App;
