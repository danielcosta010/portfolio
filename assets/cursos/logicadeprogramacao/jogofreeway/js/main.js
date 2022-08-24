
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}
function draw() {
  background(imagemDaEstrada);
  mostraPersonagem();
  mostraCarro();
  movimentaCarroLeft();
  movimentaCarroRight();
  movimentaPersonagem();
  voltaPosicaoInicialCarro();
  verificaColisao();
  maracaPonto();
} 