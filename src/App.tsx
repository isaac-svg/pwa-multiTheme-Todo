import React, {
  FormEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import "./App.css";
import { Header } from "./components/Header";
import TodoComponent from "./components/TodoComponent.js";
import TodoForm from "./components/TodoForm";
import TodoInfo from "./components/TodoInfo.js";
import { Todo } from "./models/Todo";
const App = () => {
  const taskRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [allowSave, setAllowSave] = useState<boolean>(false);
  const [lightTheme, setLigthTheme] = useState(false);
  // gets and set todos from local storage
  useEffect(() => {
    let localTodos: string | null = localStorage.getItem("todos");
    if (!localTodos) {
      let emptyTodos: Todo[] = [];
      setTodos(emptyTodos);
      return;
    }
    setTodos(JSON.parse(localTodos));
  }, []);

  // set Todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
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
      // setAllowSave(!allowSave);
      return [...prevState, task];
    });

    taskRef.current!.value = "";
    taskRef.current!.focus();
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

    localStorage.setItem("completedTodos", JSON.stringify(modifiedTodo));
    setTodos(modifiedTodo);
  };
  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => todo.completed === false);
    setTodos(newTodos);
    localStorage.setItem("completedTodos", JSON.stringify(newTodos));
  };
  const getAllTodos = () => {
    const localTodos = localStorage.getItem("todos")!;
    const allTodos = JSON.parse(localTodos);
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
          <Header lightTheme={lightTheme} toggleTheme={toggleTheme} />
          <TodoForm taskRef={taskRef} populateTodo={populateTodo} />
          <TodoComponent
            todos={todos}
            handleComplete={handleComplete}
            deleteTodo={deleteTodo}
          />
          <TodoInfo
            getAllTodos={getAllTodos}
            getCompleted={getCompleted}
            getActive={getActive}
            clearCompleted={clearCompleted}
            todos={todos}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
