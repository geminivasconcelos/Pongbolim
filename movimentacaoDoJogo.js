function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function movimentaJogadorUm(){
  if(keyIsDown(UP_ARROW)){
    for (let i = 0; i < 2; i++){
      yJogador[0] -= 10;
      yJogador[2] -= 10;
    }
  }
  if(keyIsDown(DOWN_ARROW)){
    for(let i = 0; i < 2; i++){
      yJogador[0] += 10;
      yJogador[2] += 10;
    }
  }
}

function movimentaJogadorDois(){
  if(keyIsDown(87)){
   for (let i = 0; i < 2; i++){
      yJogador[1] -= 10;
      yJogador[3] -= 10;
    }
  }
  if(keyIsDown(83)){
    for(let i = 0; i < 2; i++){
      yJogador[1] += 10;
      yJogador[3] += 10;
    }
  }
}