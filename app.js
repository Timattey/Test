let score = document.querySelector('#score');
let player1 = document.querySelector('#player1');
let player2 = document.querySelector('#player2');
let reset = document.querySelector('#reset');
let maxScore = document.querySelector('#maxScore');


let player1score = 0
let player2score = 0
player1.addEventListener('click', () => {
   player1score += 1
 score.innerText = `${player1score} to ${player2score}`
 if (player1score === parseInt(maxScore.value)) {
  alert("Player 1 wins!!!")
}

})

player2.addEventListener('click', () => {
   player2score += 1
 score.innerText = `${player1score} to ${player2score}`
 if (player2score === parseInt(maxScore.value)) {
  alert("Player 2 wins!!!");
} 
})
reset.addEventListener('click', () => {
    player1score = 0
    player2score = 0
    score.innerText = `${player1score} to ${player2score}`
})