const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;
let hitPosition;

let isGameOver = false;
let count = 0;

function onClickStart() {
  if (isGameOver === false && count === 0) {
    count = 1;
    console.log(count);
    function randomSquare() {
      square.forEach((className) => {
        className.classList.remove("mole");
      });

      let randomPosition =
        square[Math.floor(Math.random() * 9)]; /*plus the number of squares*/
      randomPosition.classList.add("mole");

      //Assign the id of the randomPosition to hitPosition for us to use later
      hitPosition = randomPosition.id;
    }

    square.forEach((id) => {
      id.addEventListener("mouseup", () => {
        if (id.id === hitPosition) {
          result += 1;
          score.textContent = result;
        }
      });
    });

    function moveMole() {
      let timerId = null;
      timerId = setInterval(randomSquare, 500);
    }

    moveMole();

    function countDown() {
      if (currentTime >= 0) {
        currentTime--;
        timeLeft.textContent = currentTime;
      }
      if (currentTime === 0) {
        alert("GAME OVER! Your final result was: " + result);
        clearInterval(timerId);
        isGameOver = true;
        count = 0;
        location.reload();
      }
    }

    let timerId = setInterval(countDown, 1000);
  }
}

function onResetClick() {
  isGameOver = false;
  count = 0;
  timeLeft.textContent = "60";
  location.reload();
}

// https://www.w3schools.com/jsref/met_win_cleartimeout.asp

// function randomSquare() {
//   square.forEach((className) => {
//     className.classList.remove("mole");
//   });

//   let randomPosition =
//     square[Math.floor(Math.random() * 9)]; /*plus the number of squares*/
//   randomPosition.classList.add("mole");

//   //Assign the id of the randomPosition to hitPosition for us to use later
//   hitPosition = randomPosition.id;
// }

// square.forEach((id) => {
//   id.addEventListener("mouseup", () => {
//     if (id.id === hitPosition) {
//       result += 1;
//       score.textContent = result;
//     }
//   });
// });

// function moveMole() {
//   let timerId = null;
//   timerId = setInterval(randomSquare, 500);
// }

// moveMole();

// function countDown() {
//   currentTime--;
//   timeLeft.textContent = currentTime;

//   if (currentTime === 0) {
//     alert("GAME OVER! Your final result was: " + result);
//     clearInterval(timerId);
//     // timeLeft.textContent = "60";
//     location.reload();
//   }
// }

// let timerId = setInterval(countDown, 1000);
