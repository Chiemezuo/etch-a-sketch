let num = 8

const gameBody = document.querySelector('.game-body')
const container = document.querySelector('.container')
const eraseButton = document.querySelector('.eraser')
const backToBlack = document.querySelector('.black')
const reset = document.querySelector('.reset')
const randomColor = document.querySelector('.rainbow')
const slider = document.querySelector('.slider')
let sliderVal = document.querySelector('.slider-val')
let picker = document.querySelector('#color-picker')

let hoverColor = 'black'

sliderVal.innerHTML = slider.value + 'x' + slider.value

slider.addEventListener('input', function(e) {
  sliderVal.innerHTML = slider.value + 'x' + slider.value
  container.innerHTML = ''
  divMaker(slider.value)
})

//create a function for making a square div
function divMaker(num) {
  for (let i = 1; i <= num * num; i++){
    const square = document.createElement('div')
    square.style.setProperty('width', `calc(600px/${num})`)
    square.style.setProperty('height', `calc(500px/${num})`)
    square.addEventListener('mouseenter', function(e) {
      e.target.style.backgroundColor = hoverColor
    })

    eraseButton.addEventListener('click', function(e) {
      picker.value = ""
      square.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = "white"
      })
    })

    backToBlack.addEventListener('click', function(e) {
      picker.value = ""
      square.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = "black"
      })
    })

    reset.addEventListener('click', function(e) {
      square.style.backgroundColor = "white"
      picker.value = ""
      square.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = 'black'
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