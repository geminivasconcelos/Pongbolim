function marcacoesDoJogo(){
  //comprimento inferior = 290, comprimento superior = 50, rotação = 150 e 150
  
  line(300, 385, 300, 14);
  fill('#008000');
   
  rect(26, 90, 86, 220);
  rect(26, 150, 29, 100);
  rect(20, 185, 6, 30);
  
  rect(488, 90, 86, 220);
  rect(545, 150, 29, 100);
  rect(574, 185, 6, 30);
   
  //circulo central
  fill('#008000');
  circle(300, 200, 100);
  circle(300, 200, 1);
  
  //circulo do gol
  circle(83, 200, 1);
  circle(517, 200, 1);
  
  //escanteios
  arc(27, 15, 20, 20, 0, HALF_PI);
  arc(573, 15, 20, 20, HALF_PI, PI);
  arc(27, 385, 20, 20, HALF_PI+PI, TWO_PI,PI);
  arc(573, 385, 20, 20, PI, HALF_PI+PI, QUARTER_PI, HALF_PI);
  noFill();
  rect(26, 14, 548, 372);
}