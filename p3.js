// Problema 3: (Tempo Médio: 40 minutos, Pontos: 60)
// O arquivo “números.txt” contem 2500 números aleatórios entre 1 e 99.9999.
// Uma árvore binária de busca é uma árvore com dois nós filhos cujos valores da subárvore da esquerda são todos menores que o valor do nó raiz e os valores da subárvore da direita são sempre maiores que o valor do nó raiz.
// A classe abaixo pode ser utilizada para representar uma árvore binária de busca.
// class Tree {
// int value;
// Tree left;
// Tree right;
// }
// O arquivo “números.txt” contem 2500 números aleatórios. Organizá-los em uma árvore binária de busca, encontrar o caminho até o nó com valor 83.099 e somar todos os números do caminho.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNewNode(this.root, newNode);
    }
  }

  insertNewNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNewNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNewNode(node.right, newNode);
      }
    }
  }

  findPathAndSum(rootNode, targetValue, path = []) {
    if (rootNode) {
      path.push(rootNode.data);

      if (rootNode.data === targetValue) {
        console.log('Caminho = ', path);
        console.log('Resultado = ', path.reduce((acc, curr) => (acc += curr)));
        path.push(rootNode.data);
        return true;
      } else if (
        this.findPathAndSum(rootNode.left, targetValue, path) ||
        this.findPathAndSum(rootNode.right, targetValue, path)
      ) {
        path.push(rootNode.data);
        return true;
      }
      path.pop();
      return false;
    }
  }
}

const fs = require('fs');
const numberFile = './numeros.txt';
const nodeTarget = 83099;

fs.readFile(numberFile, 'utf8', (err, data) => {
  if (err) throw err;
  findPathSum(data);
});

const findPathSum = data => {
  let numArray;

  numArray = data.split('\r\n');

  let bst = new Tree();

  numArray.forEach((num) => {
    bst.insert(Number(num));
  });
  bst.findPathAndSum(bst.root, nodeTarget);
};
