import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "lightblue",
      }}>
      <h1>Welcome to Audit Management System</h1>
      <button
        style={{
          fontSize: "8em",
          padding: "1rem",
          backgroundColor: "blue",
          color: "white",
        }}>
        Click Me
      </button>
    </div>
  );
}

export default App;

function demo() {
  let a = 10;
  let b = 20;

  return [a, b];
}

console.log(demo());
