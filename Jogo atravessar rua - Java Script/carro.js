let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 260, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 2.8, 1.5];
let compCarro = 50;
let altCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], compCarro, altCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if(passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
    
  }
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}