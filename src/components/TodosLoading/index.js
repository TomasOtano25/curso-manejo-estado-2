import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <div className="LoaderBalls">
        <span className="LoaderBalls-item"></span>
        <span className="LoaderBalls-item"></span>
        <span className="LoaderBalls-item"></span>
      </div>
    </div>
  );
}

export { TodosLoading };
