console.log(`Vamos jogar JOKENPÔ?! Você escolherá entre PEDRA, PAPEL ou TESOURA, seguindo as instruções na tela e uma dessas opçoes será escolhida aleatóriamente para o computador. O jogo funciona assim: a tesoura corta o papel, mas quebra com a pedra; o papel embrulha a pedra, mas é cortado pela tesoura; e a pedra quebra a tesoura e é embrulhada pelo papel.`);
console.log();

var pontosJOGADOR = 0;
var pontosCOMPUTADOR = 0;

function vencedor(){
  let eu = prompt(`Escolha uma das opções:\n0 - PEDRA, 1 - PAPEL ou 2 - TESOURA?\n====================================`);
  let computador = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  if(eu == 0){
    console.log(`Você escolheu PEDRA`);
  }else if(eu == 1){
    console.log(`Você escolheu PAPEL`);
  }else if(eu == 2){
    console.log(`Você escolheu TESOURA`);
  }
  if(computador == 0){
    console.log(`Computador escolheu PEDRA`);
  }else if(computador == 1){
    console.log(`Computador escolheu PAPEL`);
  }else if(computador == 2){
    console.log(`Computador escolheu TESOURA`);
  }

  if(eu == 0){
    if(computador == 0){
    } else if(computador == 1){
      pontosCOMPUTADOR++;
    } else if(computador == 2){
      pontosJOGADOR++;
    }
  }

  if(eu == 1){
    if(computador == 0){
      pontosJOGADOR++;
    } else if(computador == 1){
    } else if(computador == 2){
      pontosCOMPUTADOR++;
    }
  }

  if(eu == 2){
    if(computador == 2){
    } else if(computador == 0){
      pontosCOMPUTADOR++;
    } else if(computador == 1){
      pontosJOGADOR++;
    }
  }
  console.log();
}

function resultado(){
  var placar = (`VOCÊ ${pontosJOGADOR} x COMPUTADOR ${pontosCOMPUTADOR}`);
  console.log();
  console.log(placar);
  console.log();

  if(pontosJOGADOR > pontosCOMPUTADOR){
    console.log(`VOCÊ GANHOU!!!`);
  }
  else if(pontosCOMPUTADOR > pontosJOGADOR){
    console.log(`COMPUTADOR GANHOU!!!`);
  }
  else if(pontosCOMPUTADOR == pontosJOGADOR){
    console.log(`EMPATE!!!`);
  }
}

function jogo(){
  let i = +prompt(`Quantas vezes você quer jogar?`);
  var x;

  for(x = 0; x < i; x++){
    vencedor();
  }
}

function loop(){
  jogo();
  resultado();
  var novo = confirm(`Quer jogar de novo?`);
  if(novo == true){
    loop();
  }
  else{
    console.log(`Obrigado! Até a próxima!`);
  }
}

loop();
