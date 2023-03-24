import React, { useRef } from "react";
import { Todo } from "../models/Todo";
interface props {
  todos: Todo[];
  deleteTodo: (e: React.MouseEvent) => void;
  handleComplete: (id: number) => void;
}
const TodoComponent = ({ todos, deleteTodo, handleComplete }: props) => {
  const liRef = useRef<HTMLLIElement>(null);

  const handleDragAndDrop = () => {
    //
  };
  return (
    <div className="todos">
      <ul>
        {todos.map((todo) => {
          return (
            <li className="single__todo" draggable ref={liRef}>
              <div
                className="box__wrapper"
                id={todo.completed ? "completed_wrapper" : ""}
                key={todo.id}
              >
                <input
                  type="checkbox"
                  onClick={() => handleComplete(todo.id)}
                />

                <img
                  className={`check__img  ${
                    todo.completed && "completed__img"
                  }`}
                  src="/public/images/icon-check.svg"
                />
              </div>

              <p className={todo.completed ? "completed__todo" : "todo__msg"}>
                {todo.content}
              </p>

              <img
                src="/images/icon-cross.svg"
                className="del__img"
                onClick={deleteTodo}
                data-id={todo.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoComponent;
