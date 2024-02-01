'use strict'

function onBallClick() {
 const ball = document.querySelector('.ball')  

  var currentWidth = ball.offsetWidth
  var currentHeight = ball.offsetHeight

  var newWidth = currentWidth + 50
  var newHeight = currentHeight + 50

  ball.style.width = newWidth + 'px'
  ball.style.height = newHeight + 'px'


  ball.innerHTML = newWidth + 'px'
}