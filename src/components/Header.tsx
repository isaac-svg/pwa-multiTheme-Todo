import React from "react";
interface props {
  lightTheme: boolean;
  toggleTheme: () => void;
}
export const Header = ({ lightTheme, toggleTheme }: props) => {
  return (
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
  );
};
