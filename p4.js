// Problema 4 - Desafio: (Tempo médio: 120 minutos, Pontos: 500)
// Começando do topo do triangulo abaixo e movendo para números adjacentes nas linhas de baixo somando os números, a maior soma possível é 23.
// Marcado em vermelho acima 3 + 7 + 4 + 9 = 23.
// Qualquer outro caminho resultará em uma soma menor, exemplo: 3 + 4 + 6 + 9 = 22.
// O arquivo “triangulo.txt” contem um triangulo com 100 linhas. Encontre a maior soma deste triangulo.
// OBSERVAÇÃO: Não é possível tentar somar todas as rotas possíveis pois existem 299 rotas possíveis. Se você pudesse chegar um trilhão (1012) rotas por segundo, levaria mais de 20 bilhões de anos para checar todas. Existe um algoritmo eficiente para resolver.

const fs = require('fs');
const numberFile = './triangulo.txt';

fs.readFile(numberFile, 'utf8', (err, data) => {
  if (err) throw err;

  const triangleData = data
    .split('\r\n')
    .map(item => {
      return item.split(' ');
    }).filter(item => {
      return item.join().length > 0;
    });
  console.log('Resultado = ', pathAndSumTriangle(triangleData));
});

const pathAndSumTriangle = triangleData => {
  while (triangleData.length > 1) {
    let lastLine = triangleData.pop(),
      aboveLine = triangleData.pop();

      for (let i = 0; i < aboveLine.length; i++)
        aboveLine[i] = Math.max(
          Number(aboveLine[i]) + Number(lastLine[i]),
          Number(aboveLine[i]) + Number(lastLine[i + 1])
        );
      triangleData.push(aboveLine);
    }
  return triangleData[0][0];
};
