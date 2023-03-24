import React, { FormEvent, MouseEvent, useRef, useState } from "react";
import "./App.css";
interface Todo {
  id: number;
  completed: boolean;
  content: string;
}
const App = () => {
  const taskRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [lightTheme, setLigthTheme] = useState(false);
  const populateTodo = (e: FormEvent) => {
    e.preventDefault();
    if (!taskRef.current!.value) {
      return;
    }
    const task = {
      id: Date.now(),
      completed: false,
      content: taskRef.current!.value,
    };
    setTodos((prevState) => {
      return [...prevState, task];
    });
    taskRef.current!.value = "";
    taskRef.current!.focus();
    console.log(todos);
  };
  const deleteTodo = (e: MouseEvent) => {
    const elem = e.target as HTMLImageElement;
    const id = elem.dataset.id!;
    const newTodos = todos.filter((todo) => todo.id !== parseInt(id));
    setTodos(newTodos);
  };
  const handleComplete = (id: number): void => {
    const modifiedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        console.log(todo.completed);
        console.log(todo);
      }
      return todo;
    });
    setTodos(modifiedTodo);
  };
  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => todo.completed === false);
    setTodos(newTodos);
  };
  const getAllTodos = () => {
    const allTodos = todos.map((todo) => todo);
    setTodos(allTodos);
  };
  const getCompleted = () => {
    const allTodos = todos.filter((todo) => todo.completed === true);
    setTodos(allTodos);
  };
  const getActive = () => {
    const allTodos = todos.filter((todo) => todo.completed === true);
    setTodos(allTodos);
  };
  //  change theme

  const toggleTheme = () => {
    setLigthTheme(!lightTheme);
  };
  return (
    <main className={`main ${lightTheme && "light"}`}>
      <div className="banner__wrapper"></div>
      <div id="section">
        {/* Todo Component */}
        <div className="todo__component">
          <div className="header">
            <span className="logo">TODO</span>
            <span className="theme_img--wrapper">
              {lightTheme ? (
                <img
                  className="theme__img"
                  src="/public/images/icon-moon.svg"
                  onClick={toggleTheme}
                />
              ) : (
                <img
                  className="theme__img"
                  src="/public/images/icon-sun.svg"
                  onClick={toggleTheme}
                />
              )}
            </span>
          </div>
          <form id="form__input" onSubmit={populateTodo}>
            <div className="form__controller">
              <span className="circle"></span>
              <input
                type="text"
                id="input__field"
                placeholder="Create a  new todo..."
                ref={taskRef}
              />
            </div>
          </form>
          <div className="todos">
            <ul>
              {todos.map((todo) => {
                return (
                  <li className="single__todo">
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

                    <p
                      className={
                        todo.completed ? "completed__todo" : "todo__msg"
                      }
                    >
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
          <div className="todos__count">
            <span className="count">
              {todos.length} {todos.length < 2 ? "item" : "items"} left
            </span>
            <button className="clear__completed" onClick={clearCompleted}>
              {todos.some((todo) => todo.completed)
                ? "Clear Completed"
                : "None Completed"}
            </button>
          </div>
          {/* filters  */}
          <div className="filters">
            <button className="all" onClick={getAllTodos}>
              All
            </button>
            <button className="active" onClick={getActive}>
              Active
            </button>
            <button className="completed" onClick={getCompleted}>
              Completed
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
