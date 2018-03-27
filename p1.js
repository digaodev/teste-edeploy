// Problema 1: (Tempo médio:  5 minutos, Pontos: 10)
// O arquivo “lista_palavras_desordenada.txt” contem 109.583 palavras. Quantas palavras desta lista terminam com a letra ‘a’.

const fs = require('fs');

const wordFile = './lista_palavras_desordenada.txt';
const endingLetter = 'a';

fs.readFile(wordFile, 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Resultado = ', findWordsEndingInLetter(data, endingLetter));
});

const findWordsEndingInLetter = (data, endingLetter) => {
  let words;
  let counter = 0;

  words = data.split('\r\n');

  words.forEach(word => {
    if (word.endsWith(endingLetter)) {
      counter++;
    }
  });
  return counter;
};
