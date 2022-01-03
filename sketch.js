let marcaGol;
let trilha;
let toque;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw(){
  background('#008000');
  
  marcacoesDoJogo();

  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  verificaColisaoBordaJogador();
  
  mostraAtaque();
  
  mostraGol();
  movimentaJogadorUm();
  verificaColisao();

  movimentaJogadorDois();

  incluiPlacar();
  marcaPonto();
}

function preload(){

  
  imagensJogadores = [loadImage("imagens/bonecoVermelho.png"),                             loadImage("imagens/bonecoAzul.png"),
                      loadImage("imagens/bonecoVermelho.png"),                             loadImage("imagens/bonecoAzul.png")];
   
  trilha = loadSound("sons/trilha.mp3");
  gol = loadSound("sons/gol.mp3");
  chute = loadSound("sons/chute.mp3");
}