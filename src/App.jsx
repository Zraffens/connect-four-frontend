import { useState } from "react";
import "./App.css";
import Board from "./components/board.jsx";

function App() {
  return (
    <div className="App">
      <h1>Connect Four</h1>
      <Board />
    </div>
  );
}

export default App;
