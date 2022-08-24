// variáveis imagens
let imagemDaEstrada;
let imagemPersonagem;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;
let imagemCarros;

//variáveis sons
let trilha;
let ponto;
let somColisao;

function preload() {
  imagemDaEstrada = loadImage("img/estrada.png");
  imagemPersonagem = loadImage("img/ator-1.png");
  imagemCarro1 = loadImage("img/carro-1.png");
  imagemCarro2 = loadImage("img/carro-2.png");
  imagemCarro3 = loadImage("img/carro-3.png");
  imagemCarro4 = loadImage("img/carro-4.png");
  imagemCarro5 = loadImage("img/carro-5.png");
  imagemCarro6 = loadImage("img/carro-6.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6];
  trilha = loadSound("sons/trilha.mp3");
  ponto = loadSound('sons/pontos.wav');
  somColisao = loadSound('sons/colidiu.mp3')
}