let betNum = document.querySelector('#numPick');
let btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("randomNum")
if(randomNum === parseInt(betNum.value)){
  console.log("your guess is correct!")
} else {
  console.log("you guessed wrong")
}if(parseInt(betNum.value) > 10 || parseInt(betNum.value) === 0){
  alert("invalid number")
}
})
// Bizim sayılarımızın göstergelerini tutacak bir container ve içerisine sayılarımız.
let numContainer = document.querySelector('#numContainer')
for(let i = 0; i < 11; i++) {
  let numbers = document.createElement('div')
  numContainer.appendChild(numbers)
}




