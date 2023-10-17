let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;  
    }    
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], compCarro, altCarro, xAtor, yAtor, 15);
    if (colisao){
      atorPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorZero()){
        meusPontos -= 1;   
      }
    }
  }
}

function atorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255, 240, 60);
  text(meusPontos, width /5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    atorPosicaoInicial();
  }
}

function pontosMaiorZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}