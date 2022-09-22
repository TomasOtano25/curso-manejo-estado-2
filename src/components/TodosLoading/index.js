import React from "react";
import "./TodoLoading.css";

function TodoLoading() {
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

export { TodoLoading };
