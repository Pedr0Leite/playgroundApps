document.addEventListener('DOMContentLoaded',()=>{
    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayCurrentPlayer = document.querySelector('#current-player');
    let currentPlayer = 1;
    // let isGameOver = false;

    // if(isGameOver === false){
    for(var i = 0; i < squares.length; i++){
        (function(index){
            //Add an onclick event to each squares
            squares[i].onclick = function(){
                // If the square below your current square is taken, you can g oontop of it
                if(squares[index + 7].classList.contains('taken')){
                    let player1ClassOfSquare = squares[index].classList.contains('player-one');
                    let player2ClassOfSquare = squares[index].classList.contains('player-two');
                    if(currentPlayer === 1 && player2ClassOfSquare === false){
                        squares[index].classList.add('taken');
                        squares[index].classList.add('player-one');
                        // change player
                        currentPlayer = 2;
                        displayCurrentPlayer.innerHTML = currentPlayer;
                    }else if(currentPlayer === 2 && player1ClassOfSquare === false){
                        squares[index].classList.add('taken');
                        squares[index].classList.add('player-two');
                        // change player
                        currentPlayer = 1;
                        displayCurrentPlayer.innerHTML = currentPlayer;
                    }
                    // If the square below your current square is not take, you cant go here
                }else{
                    alert('You cant go here');
                }
            }
        })(i)
    }
// }

//Check the board for a win or lose
function checkBoard(){
    //All winning combinations array
    const winningArray = [
        [0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24],
        [20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], [0, 7, 14, 21], [41, 34, 27, 20],
        [1, 8, 15, 22], [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],
        [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17],
        [7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10],
        [13, 19, 25, 31], [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],
        [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], [11, 7, 23, 29],
        [12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9], [15, 16, 17, 18], [19, 18, 17, 16],
        [22, 23, 24, 25], [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28],
        [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]
    ];
    //now take the 4 values in each combination and plug them into the squares
    for(let y = 0; y < winningArray.length; y++){
        const square1 = squares[winningArray[y][0]];
        const square2 = squares[winningArray[y][1]];
        const square3 = squares[winningArray[y][2]];
        const square4 = squares[winningArray[y][3]];
    //now check those arrays to see if they all have the same class of player-one
    if(square1.classList.contains('player-one') &&
    square2.classList.contains('player-one') &&
    square3.classList.contains('player-one') &&
    square4.classList.contains('player-one')){
        //if they all check true, player-one wins
        result.innerHTML = 'Player One Wins!';
        isGameOver = true;
    }else if(square1.classList.contains('player-two') &&
    square2.classList.contains('player-two') &&
    square3.classList.contains('player-two') &&
    square4.classList.contains('player-two')){
        result.innerHTML = 'Player Two Wins!';
        isGameOver = true;
    }
    }
}

//add an eventListener to each sqaure tha will trigger the checkBoard function on click
squares.forEach(squareX => squareX.addEventListener('click', checkBoard))

})

// function onResetClick() {
//     isGameOver = false;
//     location.reload();
//   }

  $("#reset").on("click", function () {
    isGameOver = false;
    location.reload();
    // window.location.href = window.location.href;
  });
  
  $("#startGame").on("click", function () {
    // let gridDiv = document.getElementsById("grid");
    let info = document.getElementById("infoDiv");
    info.style.visibility = "hidden";
    // gridDiv.style.visibility = "visible";
    // gridDiv.style.visibility = "hidden";
  });
  