 //variáveis da bolinha
      let xBolinha = 300;
      let yBolinha = 200;
      let diametro = 20;
      let raio = diametro / 2; 
      
      //velocidade da bolinha
      let velocidadeXDaBolinha = 5;
      let velocidadeYDaBolinha = 5;
      
      //variáveis raquete
      let xRaquete1 = 0;
      let yRaquete1 = 170;
      let xRaquete2 = 590;
      let yRaquete2 = 170
      let raqueteComprimento1 = 10;
      let raqueteAltura1 = 90;
      let raqueteComprimento2 = 10;
      let raqueteAltura2 = 90;

      //Placar do jogo
      let pontosJogador1 = 0;
      let pontosJogador2 = 0;

      //sons 
      let raquetada;
      let ponto;
      let trilha;

      function preload() {
        trilha = loadSound("trilha.mp3");
        ponto = loadSound("ponto.mp3");
        raquetada = loadSound("raquetada.mp3")
      }

      

      function setup() {
        createCanvas(600, 400);
        trilha.loop();
      }

      function draw() {
        background(0);
        desenhaBolinha();
        movimentaBolinha();
        limitaBolinha();
        desenhaRaquete1();
        desenhaRaquete2();
        movimentaRaquete();
        verificaColisaoRaquete1();
        verificaColisaoRaquete2();
        maracaPonto();
        bolinhaNaoFicaPresa();
      }

      function desenhaBolinha() {
        circle(xBolinha, yBolinha, diametro);
      }
      function movimentaBolinha() {
        xBolinha += velocidadeXDaBolinha;
        yBolinha += velocidadeYDaBolinha;
      }
      function limitaBolinha() {
        if (xBolinha > width - raio || xBolinha < 0 + raio) {
          velocidadeXDaBolinha *= -1;
        }
        if (yBolinha > height - raio || yBolinha < 0 + raio) {
          velocidadeYDaBolinha *= -1;
        }
      }
      function desenhaRaquete1() {
        rect(xRaquete1, yRaquete1, raqueteComprimento1, raqueteAltura1);
      }
      function desenhaRaquete2() {
        rect(xRaquete2, yRaquete2, raqueteComprimento2, raqueteAltura2)
      }

      function movimentaRaquete() {
        if (keyIsDown(65)) {
          if(yRaquete1 > -30) {
            yRaquete1 -= 10;
          }
        }

        if (keyIsDown(90)) {
          if(yRaquete1 < 340) {
            yRaquete1 += 10;
          }
        }
        if (keyIsDown(UP_ARROW)) {
          if(yRaquete2 > -30) {
           yRaquete2 -= 10;
          }
        }

        if (keyIsDown(DOWN_ARROW)) {
          if(yRaquete2 < 340) {
          yRaquete2 += 10;
        }
        }
        // velocidadeRaquete2 = yBolinha - yRaquete2 - raqueteComprimento2 / 2 - 80;
        // yRaquete2 += velocidadeRaquete2;
      }
      
      function verificaColisaoRaquete1() {
        if (xBolinha - raio < xRaquete1 + raqueteComprimento1 && yBolinha - raio < yRaquete1 + raqueteAltura1 && yBolinha + raio > yRaquete1) {
          velocidadeXDaBolinha *= -1;
          raquetada.play();
        }
      }
      function verificaColisaoRaquete2() {
         if (xBolinha + raio > xRaquete2 && yBolinha - raio < yRaquete2 + raqueteAltura2 && yBolinha + raio > yRaquete2) {
           velocidadeXDaBolinha *= -1;
           raquetada.play();
         }
        
      }
      function maracaPonto(){
        stroke(255)
        textAlign(CENTER);
        textSize(24);
        fill(color(255, 140, 0));
        rect(170, 20, 60, 40, 10);
        fill(255);
        text(pontosJogador1, 200, 50);
        fill(color(255, 140, 0));
        rect(370, 20, 60, 40, 10);
        fill(255)
        text(pontosJogador2, 400, 50)
        if(xBolinha - raio < xRaquete1) {
          pontosJogador2 += 1;
          ponto.play();
        } else if(xBolinha > xRaquete2) {
          pontosJogador1 += 1;
          ponto.play()
        }
       
      }
      
      function bolinhaNaoFicaPresa(){
          if (xBolinha - raio < 0 || xBolinha > 600){
          xBolinha = 23
          }
      }
      