let colidiuGolJogadorUm = false;
let colidiuGolDoJogadorDois = false;
let pontosDoJogadorUm = 0;
let pontosDoJogadorDois = 0;

function incluiPlacar(){
  
  stroke(255);
  textAlign(CENTER);
  textSize(14);
  fill(color('#03045e'));
  rect(180, 15, 30, 20);
  fill(255);

  text(pontosDoJogadorUm, 195, 29);
  fill(color('#03045e'));
  rect(410, 15, 30, 20);
  fill(255);
  text(pontosDoJogadorDois, 425, 29);

}

function voltaBolinhaPosicaoInicial(){
  xBolinha = 300;
  yBolinha = 200;
}


function marcaPonto(){
  colidiuGolJogadorUm = collideRectCircle(xGol[0], yGol[0], comprimentoDoGol, alturaDoGol, xBolinha, yBolinha, raio);
  colidiuGolDoJogadorDois = collideRectCircle(xGol[1], yGol[1], comprimentoDoGol, alturaDoGol, xBolinha, yBolinha, raio);
  if(colidiuGolJogadorUm){
    pontosDoJogadorUm += 1;
    gol.play();
    voltaBolinhaPosicaoInicial();
  }if(colidiuGolDoJogadorDois){
    pontosDoJogadorDois += 1;
    gol.play();
    voltaBolinhaPosicaoInicial();
  }
}


