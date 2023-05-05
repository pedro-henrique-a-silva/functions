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

let array = [2, 3, 2, 5, 8, 2, 3];

function contaFrequencia(lista) {
  let frequencia = {};

  for (let key in lista) {
    if (frequencia[lista[key]] === undefined) {
      frequencia[lista[key]] = 1;
    } else {
      frequencia[lista[key]] += 1;
    }
  }
  return frequencia;
}

function maisRepetido(lista) {
  let maisFrequente = { valor: 0, freq: 0 };
  let contagem = contaFrequencia(lista);

  for (let key in contagem) {
    if (contagem[key] > maisFrequente.freq) {
      maisFrequente.valor = key;
      maisFrequente.freq = contagem[key];
    }
  }
  return Number(maisFrequente.valor);
}

console.log(maisRepetido(array));
// Requisito 6 - Crie a função somatorio

function somatorio(number) {
  let soma = 0;

  if (number < 0) {
    return 'ERRO';
  }

  for (let index = 1; index <= number; index += 1) {
    soma += index;
  }

  return soma;
}

// Requisito 7 - Crie a função verificaFimPalavra

function verificaFimPalavra(word1, word2) {
  let resultado = false;

  if (word1.slice(-word2.length) === word2) {
    resultado = true;
  }

  return resultado;
}

// console.log(verificaFimPalavra('pedro', 'dgo'));

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
