import React from "react";
import "./App.css";
const App = () => {
  return (
    <main className="main">
      <div className="banner__wrapper"></div>
      <div id="section">
        {/*  */}

        <div className="todo__component">
          <div className="header">
            <span className="logo">TODO</span>
            <span className="theme_img--wrapper">
              <img className="theme__img" src="/public/images/icon-sun.svg" />
            </span>
          </div>
          <form id="form__input">
            <div className="form__controller">
              <span className="circle"></span>
              <input
                type="text"
                id="input__field"
                placeholder="Create a  new todo..."
              />
            </div>
          </form>
          <div className="todos">
            <ul></ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
