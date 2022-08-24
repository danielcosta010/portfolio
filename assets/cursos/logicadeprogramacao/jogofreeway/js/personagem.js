//variáveis personagem
let xPersonagem = 100;
let yPersonagem = 370;
let colisao = 'false';
let pontos = 0;


function mostraPersonagem() {
  image(imagemPersonagem, xPersonagem, yPersonagem, 25, 25);
}


function movimentaPersonagem() {
  if (keyIsDown(UP_ARROW)) {
      yPersonagem -= 1.5;
    }

    if (keyIsDown(DOWN_ARROW)) {
      if(podeSeMover()) {
        yPersonagem += 1.5;
      }
   }
   if (keyIsDown(LEFT_ARROW)) {
     if(podeSeMoverLeft()){
       xPersonagem -= 1.5;
     }
    
    }
    if (keyIsDown(RIGHT_ARROW)) {
      if(podeSeMoverRigth()) {
        xPersonagem += 1.5;
      }
   }
}

function verificaColisao() {
  for(let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoDoCarro, alturaCarro, xPersonagem, yPersonagem, 15);
    if(colisao) {
      colidiu();
      somColisao.play();
      if(pontosMaiorQueZero()){
        pontos -= 1;
      }
    }
  }
}

function colidiu() {
  yPersonagem = 370
}

function maracaPonto(){
  stroke(255)
  textAlign(CENTER);
  textSize(24);
  fill(color(255, 140, 0));
  rect(2, 2, 50, 30, 10);
  fill(255);
  text(pontos, 27, 25);
  
  if(yPersonagem < 10) {
    pontos += 1;
    yPersonagem = 370;
    ponto.play();
  }
}

function pontosMaiorQueZero() {
  return pontos > 0;
}
function podeSeMover() {
  return yPersonagem < 370;
}
function podeSeMoverRigth() {
  return xPersonagem < 575;
}
function podeSeMoverLeft() {
  return xPersonagem > 0;
}


