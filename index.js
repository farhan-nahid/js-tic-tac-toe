// html elements

const statusArea = document.querySelector(".status");
const resetButton = document.querySelector(".reset");
const gameCeils = document.querySelectorAll(".tic__tac__toe__cell");

// game constance

const xSymbol = "×";
const oSymbol = "○";

// game variable

let gameIsLive = true;
let xIsNext = true;
//functions

const letterToSymbol = (letter) => (letter === "x" ? xSymbol : oSymbol);

const handleWin = (letter) => {
  gameIsLive = false;
  if (letter === "x") {
    statusArea.innerHTML = `${letter} Has Won!!`;
  } else {
    statusArea.innerHTML = `<span>${letter} Has Won!!</span>`;
  }
};

const checkGameStatus = () => {
  const topLeft = gameCeils[0].classList[1];
  const topMiddle = gameCeils[1].classList[1];
  const topRight = gameCeils[2].classList[1];
  const middleLeft = gameCeils[3].classList[1];
  const middleMiddle = gameCeils[4].classList[1];
  const middleRight = gameCeils[5].classList[1];
  const bottomLeft = gameCeils[6].classList[1];
  const bottomMiddle = gameCeils[7].classList[1];
  const bottomRight = gameCeils[8].classList[1];

  // who is winner?

  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
    gameCeils[0].classList.add("won");
    gameCeils[1].classList.add("won");
    gameCeils[2].classList.add("won");
  } else if (
    middleLeft &&
    middleLeft === middleMiddle &&
    middleLeft === middleRight
  ) {
    handleWin(middleLeft);
    gameCeils[3].classList.add("won");
    gameCeils[4].classList.add("won");
    gameCeils[5].classList.add("won");
  } else if (
    bottomLeft &&
    bottomLeft === bottomMiddle &&
    bottomLeft === bottomRight
  ) {
    handleWin(bottomLeft);
    gameCeils[6].classList.add("won");
    gameCeils[7].classList.add("won");
    gameCeils[8].classList.add("won");
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    gameCeils[0].classList.add("won");
    gameCeils[3].classList.add("won");
    gameCeils[6].classList.add("won");
  } else if (
    topMiddle &&
    topMiddle === middleMiddle &&
    topMiddle === bottomMiddle
  ) {
    handleWin(topMiddle);
    gameCeils[1].classList.add("won");
    gameCeils[4].classList.add("won");
    gameCeils[7].classList.add("won");
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    gameCeils[2].classList.add("won");
    gameCeils[5].classList.add("won");
    gameCeils[8].classList.add("won");
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    gameCeils[0].classList.add("won");
    gameCeils[4].classList.add("won");
    gameCeils[8].classList.add("won");
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    gameCeils[2].classList.add("won");
    gameCeils[4].classList.add("won");
    gameCeils[6].classList.add("won");
  } else if (
    topLeft &&
    topMiddle &&
    topRight &&
    middleLeft &&
    middleMiddle &&
    middleRight &&
    bottomLeft &&
    bottomMiddle &&
    bottomRight
  ) {
    gameIsLive = false;
    statusArea.innerHTML = `<span class="danger" >Match is Tie!!</span>`;
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      statusArea.innerHTML = `${xSymbol} Is Next`;
    } else {
      statusArea.innerHTML = `<span>${oSymbol} Is Next</span>`;
    }
  }
};

// event handlers

const handelReset = () => {
  xIsNext = true;
  statusArea.innerHTML = `${xSymbol} Is Next`;
  for (const ceil of gameCeils) {
    ceil.classList.remove("x");
    ceil.classList.remove("o");
    ceil.classList.remove("won");
  }
  gameIsLive = true;
};

const handelCeilChange = (e) => {
  const classList = e.target.classList;

  if (!gameIsLive || classList[1] === "x" || classList[1] === "o") {
    return;
  }

  if (xIsNext) {
    classList.add("x");
    checkGameStatus();
  } else {
    classList.add("o");
    checkGameStatus();
  }
};

// event listener

resetButton.addEventListener("click", handelReset);

for (const ceil of gameCeils) {
  ceil.addEventListener("click", handelCeilChange);
}
