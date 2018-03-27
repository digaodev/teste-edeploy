// Problema 2: (Tempo médio: 15 minutos, Pontos 20)
// Convertendo cada letra de uma palavra no número correspondendo a posição no alfabeto e adicionando os valores, nós obtemos o valor de uma palavra. Por exemplo, o valor da palavra SKY é 19 + 11 + 25 = 55.
// O arquivo “lista_palavras_desordenada.txt” contem 109.583 palavras. Ao calcular o valor de cada uma destas palavras, quantas delas são múltiplas de 5?

const fs = require('fs');

const wordFile = './lista_palavras_desordenada.txt';
const multiple = 5;

fs.readFile(wordFile, 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Resultado', findMultiple(data, multiple));
});

const findMultiple = (data, multiple) => {
  let words;
  let counter = 0;

  words = data.split('\r\n');

  words.forEach((word, index) => {
    const sum = word.split('').reduce((acc, currentChar) => {
      return (acc = acc + (currentChar.charCodeAt() - 96));
    }, 0);

    if (sum % 5 === 0) counter++;
  });

  return counter;
};
