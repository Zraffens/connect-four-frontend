import { useState } from "react";
import "../App.css";

function createBoard() {
  let board = [];
  for (let i = 0; i < 6; i++) {
    let row = [];
    for (let j = 0; j < 7; j++) {
      row.push("");
    }
    board.push(row);
  }
  return board;
}

function Board() {
  const [board, setBoard] = useState(createBoard());
  const [turn, setTurn] = useState("red");

  function click(col) {
    const colItems = board[col];
    let newBoard = [...board];
    for (let i = 5; i >= 0; i--) {
      if (!newBoard[i][col]) {
        newBoard[i][col] = turn;
        break;
      }
    }
    console.log(newBoard)
    setBoard(newBoard);
    setTurn(turn === "red" ? "blue" : "red");
  }

  return (
    <>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell} ${board[rowIndex][colIndex]}`}
                onClick={() => click(colIndex)}
              />
            ))}
          </div>
        ))}
        {/* {winner && <div className="winner">{winner.toUpperCase()} wins!</div>} */}
      </div>
    </>
  );
}

export default Board;
