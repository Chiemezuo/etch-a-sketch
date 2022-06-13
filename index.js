let num = 25

const container = document.querySelector('.container')
const eraseButton = document.querySelector('.eraser')
const backToBlack = document.querySelector('.black')
const reset = document.querySelector('.reset')

//create a function for making a square div
function divMaker(num) {
  for (let i = 1; i <= num; i++){
    const square = document.createElement('div')
    square.style.setProperty('width', `calc(700px/${Math.sqrt(num)})`)
    square.style.setProperty('height', `calc(600px/${Math.sqrt(num)})`)
    square.style.backgroundColor = "bisque"
    square.addEventListener('mouseenter', function(e) {
      e.target.style.backgroundColor = "black"
    })

    eraseButton.addEventListener('click', function(e) {
      square.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = "bisque"
      })
    })

    backToBlack.addEventListener('click', function(e) {
      square.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = "black"
      })
    })

    reset.addEventListener('click', function(e) {
      square.style.backgroundColor = "bisque"
    })

    container.appendChild(square)
  }
}

divMaker(num)