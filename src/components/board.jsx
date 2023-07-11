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

function checkWin(board) {
  // Check rows
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 4; col++) {
      if (
        board[row][col] &&
        board[row][col] === board[row][col + 1] &&
        board[row][col] === board[row][col + 2] &&
        board[row][col] === board[row][col + 3]
      ) {
        return board[row][col];
      }
    }
  }

  // Check columns
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row < 3; row++) {
      if (
        board[row][col] &&
        board[row][col] === board[row + 1][col] &&
        board[row][col] === board[row + 2][col] &&
        board[row][col] === board[row + 3][col]
      ) {
        return board[row][col];
      }
    }
  }

  // Check diagonals (top-left to bottom-right)
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      if (
        board[row][col] &&
        board[row][col] === board[row + 1][col + 1] &&
        board[row][col] === board[row + 2][col + 2] &&
        board[row][col] === board[row + 3][col + 3]
      ) {
        return board[row][col];
      }
    }
  }

  // Check diagonals (bottom-left to top-right)
  for (let row = 5; row >= 3; row--) {
    for (let col = 0; col < 4; col++) {
      if (
        board[row][col] &&
        board[row][col] === board[row - 1][col + 1] &&
        board[row][col] === board[row - 2][col + 2] &&
        board[row][col] === board[row - 3][col + 3]
      ) {
        return board[row][col];
      }
    }
  }

  return null; // No winner
}

function Board() {
  const [board, setBoard] = useState(createBoard());
  const [turn, setTurn] = useState("red");
  let winner = checkWin(board);

  function click(col) {
    if (winner) {
      return;
    }
    const colItems = board[col];
    let newBoard = [...board];
    for (let i = 5; i >= 0; i--) {
      if (!newBoard[i][col]) {
        newBoard[i][col] = turn;
        break;
      }
    }
    console.log(newBoard);
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
        {winner && <div className="winner">{winner.toUpperCase()} wins!</div>}
      </div>
      <button className="btn hidden">Play again</button>
    </>
  );
}

export default Board;
