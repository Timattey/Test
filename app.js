let betNum = document.querySelector('#numPick');
let btn = document.querySelector('#btn')

// sayı çevirip doğru ve yalnış bilme
btn.addEventListener('click', () => {
let randomNum = Math.floor(Math.random() * 11);

if(randomNum === parseInt(betNum.value)){
  alert("Your guess is correct!")
} else {
  alert("you guessed wrong")
}if(parseInt(betNum.value) > 10){
  alert("invalid number")
}
})
// Sayılarımızın göstergelerini tutacak bir container ve içerisine sayılarımız.
let numContainer = document.querySelector('#numContainer')
for(let i = 0; i < 11; i++) {
  let numbers = document.createElement('div')
  numbers.classList.add('num')
  numbers.innerText = i
  numContainer.appendChild(numbers)
  if(parseInt(numbers.innerText) % 2 === 1) {
  numbers.style.backgroundColor = "red"
} else if(parseInt(numbers.innerText) === 0) {
  numbers.style.backgroundColor = "green"
} else {
  numbers.style.backgroundColor = "black"
}
}
