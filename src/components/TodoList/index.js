import { render } from "@testing-library/react";
import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.totalTodos && !props.loading && props.onEmptyTodos()}

      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}

      {!props.loading && !props.error && props.searchedTodos.map(renderFunc)}
      {/* {props.searchedTodos.map((todo) => props.render(todo))} */}
      {/* <ul>{props.children}</ul> */}
    </section>
  );
}

export { TodoList };
