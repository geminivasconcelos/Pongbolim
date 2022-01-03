//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 10;
let raio = diametro/2;

let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;

let alturaDoGol = 85;
let comprimentoDoGol = 4;

let comprimentoJogador = 23;
let alturaJogador = 80;

let xGol = [26, 570];
let yGol = [158, 158];

let xJogador = [115, 225, 352, 464];
let yJogador = [100, 180, 100, 180];

let imagensJogadores;


function mostraBolinha(){
  fill(255);
  circle(xBolinha, yBolinha, diametro);
}

function mostraAtaque(){
  for(let i = 0; i < xJogador.length; i++){
    image(imagensJogadores[i], xJogador[i], yJogador[i],                       comprimentoJogador, alturaJogador);
  } 
}

function mostraGol(){
  fill(0);
  for (let i = 0; i < xGol.length; i++){
    rect(xGol[i], yGol[i], comprimentoDoGol, alturaDoGol);  
  }
}