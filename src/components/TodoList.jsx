// TodoList.js
import { useSelector } from "react-redux";
import { selectTodos } from "../features/todoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
