// Requisito 1 - Crie a função verificaPalindromo

function invertePalavra(palavra) {
  let palavraInvertida = '';

  for (let index = 0; index < palavra.length; index += 1) {
    palavraInvertida += palavra[(palavra.length - index) - 1];
  }

  return palavraInvertida;
}

function verificaPalindromo(palavra) {
  let palavraInvertida = invertePalavra(palavra);

  if (palavraInvertida !== palavra) return false;

  return true;
}

// let palavra = 'aboba';

// if (verificaPalindromo(palavra) === true){
//   console.log(palavra,'é um palindromo');
// }else{
//   console.log(palavra,'não é um palindromo');
// }

// Requisito 2 - Crie a função indiceDoMaior

// let array = [20, 33, 60, 7, 10, 1];

function indiceDoMaior(lista) {
  let maiorValor = lista[0];
  let indiceMaiorValor = 0;

  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index] > maiorValor) {
      maiorValor = lista[index];
      indiceMaiorValor = index;
    }
  }

  return indiceMaiorValor;
}

// console.log(indiceDoMaior(array));

// Requisito 3 - Crie a função indiceDoMenor

// array = [20, 33, 60, 7, 10, 10];

function indiceDoMenor(lista) {
  let menorValor = lista[0];
  let indiceMenorValor = 0;

  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index] < menorValor) {
      menorValor = lista[index];
      indiceMenorValor = index;
    }
  }

  return indiceMenorValor;
}

// console.log(indiceDoMenor(array));

// Requisito 4 - Crie a função maiorPalavra

// array = ['pedro', 'fernanda', 'mauricio', 'jose'];

function maiorPalavra(lista) {
  let maior = '';

  for (let item of lista) {
    if (item.length > maior.length) {
      maior = item;
    }
  }

  return maior;
}

// Requisito 5 - Crie a função maisRepetido

let array = [2, 3, 3, 5, 3, 8, 2, 3];

function maisRepetido(lista) {
  let maisFrequenteValor = 0;
  let frequencia = 0;
  for (let index = 0; index < lista.length; index += 1) {
    let contador = 0;
    for (let value of lista) {
      if (lista[index] === value) {
        contador += 1;
      }
    }

    if (contador > frequencia) {
      frequencia = contador;
      maisFrequenteValor = lista[index];
    }
  }
  return maisFrequenteValor;
}

console.log(maisRepetido(array));
// Requisito 6 - Crie a função somatorio

// Requisito 7 - Crie a função verificaFimPalavra

// Não modifique essas linhas
module.exports = {
  verificaPalindromo: typeof verificaPalindromo === 'function' ? verificaPalindromo : (() => {}),
  indiceDoMaior: typeof indiceDoMaior === 'function' ? indiceDoMaior : (() => {}),
  indiceDoMenor: typeof indiceDoMenor === 'function' ? indiceDoMenor : (() => {}),
  maiorPalavra: typeof maiorPalavra === 'function' ? maiorPalavra : (() => {}),
  maisRepetido: typeof maisRepetido === 'function' ? maisRepetido : (() => {}),
  somatorio: typeof somatorio === 'function' ? somatorio : (() => {}),
  verificaFimPalavra: typeof verificaFimPalavra === 'function' ? verificaFimPalavra : (() => {}),
};
