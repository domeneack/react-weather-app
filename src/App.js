import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer className="footer">
          This project was coded by{" "}
          <a href="https://tangerine-moonbeam-52db1f.netlify.app/">
            Domeneack Foster
          </a>{" "}
          and is{" "}
          <a href="https://github.com/domeneack/react-weather-app">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://willowy-squirrel-9a862d.netlify.app/">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
