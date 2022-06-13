const container = document.querySelector('.container')

//create a function for making a square div
function divMaker(num) {
  for (let i = 1; i <= num; i++){
    const square = document.createElement('div')
    square.style.setProperty('width', `calc(700px/${Math.sqrt(num)})`)
    square.style.setProperty('height', `calc(600px/${Math.sqrt(num)})`)
    square.style.backgroundColor = "bisque"
    square.addEventListener('mouseenter', function(e) {
      e.target.style.backgroundColor = 'black'
    })

    container.appendChild(square)
  }
}

divMaker(10000)
// const etcher = document.querySelector('.test')
// etcher.addEventListener('mouseenter', function(e) {
//   e.target.style.backgroundColor = 'black'
// })