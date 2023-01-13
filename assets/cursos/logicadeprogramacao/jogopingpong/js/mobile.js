var leftUp = document.querySelector('.arrows__left-up')
var leftDown = document.querySelector('.arrows__left-down')
var rightUp = document.querySelector('.arrows__right-up')
var rightDown = document.querySelector('.arrows__right-down')

leftUp.addEventListener('click', () => {
  if(yRaquete1 > -30) {
    yRaquete1 -= 50;
  }
})

leftDown.addEventListener('click', () => {
  if(yRaquete1 < 340) {
    yRaquete1 += 50;
  }
})

rightUp.addEventListener('click', () => {
  if(yRaquete2 > -30) {
    yRaquete2 -= 50;
  }
})

rightDown.addEventListener('click', () => {
  if(yRaquete2 < 340) {
    yRaquete2 += 50;
  }
})