let num = 64

const gameBody = document.querySelector('.game-body')
const container = document.querySelector('.container')
const eraseButton = document.querySelector('.eraser')
const backToBlack = document.querySelector('.black')
const reset = document.querySelector('.reset')
const randomColor = document.querySelector('.rainbow')
let picker = document.querySelector('#color-picker')

let hoverColor = 'black'

//create a function for making a square div
function divMaker(num) {
  for (let i = 1; i <= num; i++){
    const square = document.createElement('div')
    square.style.setProperty('width', `calc(700px/${Math.sqrt(num)})`)
    square.style.setProperty('height', `calc(600px/${Math.sqrt(num)})`)
    square.style.backgroundColor = "bisque"
    square.addEventListener('mouseenter', function(e) {
      e.target.style.backgroundColor = hoverColor
    })

    eraseButton.addEventListener('click', function(e) {
      picker.value = ""
      square.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = "bisque"
      })
    })

    backToBlack.addEventListener('click', function(e) {
      picker.value = ""
      square.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = "black"
      })
    })

    reset.addEventListener('click', function(e) {
      square.style.backgroundColor = "bisque"
      picker.value = ""
      square.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = hoverColor
      })
    })

    randomColor.addEventListener('click', function(e){
      picker.value = ""
      square.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
      })
    })

    picker.addEventListener('input', function(e) {
      square.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = picker.value
      })
    })

    container.appendChild(square)
  }
}

gameBody.appendChild(container)

divMaker(num)