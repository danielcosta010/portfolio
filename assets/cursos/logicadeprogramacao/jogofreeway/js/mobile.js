let up = document.querySelector('.arrow__up');
let right = document.querySelector('.arrow__right');
let down = document.querySelector('.arrow__down');
let left = document.querySelector('.arrow__left');


up.addEventListener('click', () => 
  yPersonagem -= 20 

)
right.addEventListener('click', () => {
  if (podeSeMoverRigth(400)) {
	  xPersonagem += 20 
	}
})
down.addEventListener('click', () => {
  if(podeSeMover()) {
    yPersonagem += 20 
  }
})

left.addEventListener('click', () => {
  if(podeSeMoverLeft()) {
    xPersonagem -= 20 
  }
})

/*function pontosMaiorQueZero() {
  return pontos > 0;
}
function podeSeMover() {
  return yPersonagem < 370;
}
function podeSeMoverRigth(s) {
  return xPersonagem < s;
}
function podeSeMoverLeft() {
  return xPersonagem > 0;
} */


/* var interval;
up.mousedown(function() {
    console.log('cliquei');
}).mouseup(function() {
    clearInterval(interval);  
});
function performWhileMouseDown() {
  up.addEventListener('click', () =>
      yPersonagem -= 1.5 )
} */