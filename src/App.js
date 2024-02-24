import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity={"Paris"} />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.Andile.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Andile Jili
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Andile-1/weather-app-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://majili.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
