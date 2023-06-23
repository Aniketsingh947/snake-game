import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition();
const EXPANSION_RATE = 5;
let score = 0;
const hiscorebx = document.getElementById("hiscorebox");

let hiscore = localStorage.getItem("hiscore");
if (hiscore === null) {
  hiscored = 0;
  localStorage.setItem("hiscore", JSON.stringify(hiscored));
} else {
  hiscored = JSON.parse(hiscore);
  hiscorebox.innnerHTML = "Hiscore: " + hiscore;
}

export function update(scorebx) {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
    score = score + 1;
    if (score > hiscored) {
      hiscored = score;
      localStorage.setItem("hiscore", JSON.stringify(hiscored));
      hiscorebx.innnerHTML = "Hiscore: " + hiscored;
    }
    scorebx.innerHTML = "Score: " + score;
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
