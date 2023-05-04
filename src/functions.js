// Requisito 1 - Crie a função verificaPalindromo

function invertePalavra(palavra){
  let palavraInvertida = '';

  for (let index = 0; index < palavra.length; index += 1){
    palavraInvertida += palavra[(palavra.length - index) -1]
  }

  return palavraInvertida
}

function verificaPalindromo(palavra){
  let palavraInvertida = invertePalavra(palavra);

  if (palavraInvertida !== palavra) return false;

  return true
}

let palavra = 'aboba';

if (verificaPalindromo(palavra) === true){
  console.log(palavra,'é um palindromo');
}else{
  console.log(palavra,'não é um palindromo');
}

// Requisito 2 - Crie a função indiceDoMaior



// Requisito 3 - Crie a função indiceDoMenor

// Requisito 4 - Crie a função maiorPalavra

// Requisito 5 - Crie a função maisRepetido

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
