// TodoItem.js
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../features/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleComplete(todo.id));
  };

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={handleToggle}>{todo.completed ? "❌" : "✅"}</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
