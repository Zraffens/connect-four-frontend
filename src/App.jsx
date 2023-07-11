import { useState } from "react";
import "./App.css";
import Board from "./views/board.jsx";
import Home from "./views/Home.jsx";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Connect Four</h1>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/game/:id" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
