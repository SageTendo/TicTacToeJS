const gameTable = document.getElementById("game");
const playerInfoSpan = document.getElementById("playerInfo");
const game = {
  currentPlayer: Math.random() <= 0.5 ? false : true,
  count: 0,
  state: false,
  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};

function switchPlayer() {
  game.currentPlayer = !game.currentPlayer;
}

function setPlayerSpan() {
  if (game.currentPlayer) {
    playerInfoSpan.textContent = "X";
  } else {
    playerInfoSpan.textContent = "O";
  }
}

function makeMove(x, y) {
  let cell = gameTable.children[0].children[x].children[y];

  if (game.board[x][y] != "") {
    alert("Can't play this square.");
    return;
  }

  if (checkWin()) {
    return;
  }

  game.board[x][y] = game.currentPlayer ? "x" : "o";
  cell.innerHTML = game.board[x][y];

  checkWin();
  switchPlayer();
  setPlayerSpan();
}

function boardFull() {
  for (row = 0; row < game.board.length; row++) {
    for (col = 0; col < game.board[0].length; col++) {
      if (game.board[row][col] == 0) {
        return false;
      }
    }
  }
  return true;
}

function checkWin() {
  for (row = 0; row < game.board.length; row++) {
    //check rows
    if (
      game.board[row][0] == game.board[row][1] &&
      game.board[row][1] == game.board[row][2]
    ) {
      //check for X
      if (game.board[row][0] == "x") {
        alert("Player X Wins");
        return true;
      } else if (game.board[row][0] == "o") {
        //check for O
        alert("Player O Wins");
        return true;
      }
    }
  }

  //check cols
  for (col = 0; col < game.board[0].length; col++) {
    if (
      game.board[0][col] == game.board[1][col] &&
      game.board[1][col] == game.board[2][col]
    ) {
      //check for X
      if (game.board[0][col] == "x") {
        alert("Player X Wins");
        return true;
      } else if (game.board[0][col] == "o") {
        //check for O
        alert("Player O Wins");
        return true;
      }
    }
  }

  //check diagonals
  // Checking for Diagonals for X or O victory.
  if (
    game.board[0][0] == game.board[1][1] &&
    game.board[1][1] == game.board[2][2]
  ) {
    if (game.board[0][0] == "x") {
      alert("Player X Wins");
      return true;
    } else if (game.board[0][0] == "o") {
      alert("Player O Wins");
      return true;
    }
  }

  if (
    game.board[0][2] == game.board[1][1] &&
    game.board[1][1] == game.board[2][0]
  ) {
    if (game.board[0][2] == "x") {
      alert("Player X Wins");
      return true;
    } else if (game.board[0][2] == "o") {
      alert("Player O Wins");
      return true;
    }
  }

  if (boardFull()) {
    alert("DRAW!!!");
    return true;
  }
  return false;
}

function restartGame() {
  game.count = 0;
  game.gameEnd = false;
  game.currentPlayer = Math.random() <= 0.5 ? false : true;
  game.board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  Array.from(document.getElementsByTagName("td")).forEach((cell) => {
    cell.textContent = "";
  });
  setPlayerSpan();
}

window.onload = () => {
  setPlayerSpan();
};
