//variáveis do carro
let xCarros = [600, 600, 600, -50, -50, -50];
let yCarros = [40, 100, 150, 215, 270, 320];
let velocidadeCarros = [3, 3.5, 4.2, 6, 4, 3.3];
let comprimentoDoCarro = 50;
let alturaCarro = 30;




function mostraCarro() {
  for(let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoDoCarro, alturaCarro);
  }
}
function movimentaCarroLeft() {
  for(let i = 0; i < 3; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}
function movimentaCarroRight() {
  for(let i = 3; i < 6; i++) {
    xCarros[i] += velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro() {
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
  if(xCarros[3] > 650) {
    xCarros[3] = -50;
  }
  if(xCarros[4] > 650) {
    xCarros[4] = -50;
  }
  if(xCarros[5] > 650) {
    xCarros[5] = -50;
  }
}
function passouTodaATela(xCarro){
  return xCarro < - 50;
}