let colidiu = false;

function verificaColisaoBorda(){
  //vertical
  if((xBolinha + raio > 574 ) || xBolinha - raio < 25){
    velocidadeXBolinha *= -1;   
  }
  //vertical
  if((yBolinha + raio > 385 || yBolinha + raio < 26) || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function verificaColisao(){
  for(let i = 0; i < xJogador.length; i++){
  colidiu = collideRectCircle(xJogador[i], yJogador[i], comprimentoJogador, alturaJogador, xBolinha, yBolinha, raio);
    if(colidiu){
      velocidadeXBolinha *= -1;
      chute.play();
    }
  }
}

function verificaColisaoBordaJogador(){
  for(let i = 0; i < yJogador.length; i++){
    if((yJogador[i] + raio > 500 ) || yJogador[i] - raio < 0){
      yJogador[i] += 20;   
    }
    //vertical
    if((yJogador[i] + raio > 324 || yJogador[i] + raio < 0) || yBolinha - raio < 0){
      yJogador[i] -= 20;
    }
  }
}