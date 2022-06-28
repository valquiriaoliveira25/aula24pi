/* Grupo 2 - Diogo, Ivanaldo e Valquíria

Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e 
notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá 
um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), 
nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso 
método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

*/

let curso = require ("./modulos/curso");
let aluno = require ("./modulos/aluno");
const { aprovadoOuReprovado } = require("./modulos/curso");

// Criando 5 Alunos

curso.addAlunos("Valquíria", [7,8,9], 2);
curso.addAlunos("João", [10,9,9], 5);
curso.addAlunos("Manuel", [9,8,9], 0);
curso.addAlunos("José", [7,10,9], 2);
curso.addAlunos("Ricardo", [6,8,10], 4);

console.log(curso);

// Média de um aluno
console.log(curso.turma[1].media().toFixed(2));

// Média dos alunos
console.log(curso.turma.map(item => [item.nome, item.media().toFixed(2)]));

// Faltas de um aluno
console.log(curso.turma[4].qtdFaltas);

// Adicionar 1 (uma) falta para um aluno
console.log(curso.turma[2].nome, curso.turma[2].qtdFaltas);
curso.turma[2].faltas()
console.log(curso.turma[2].nome, curso.turma[2].qtdFaltas);

// Faltas de todos os alunos
console.log(curso.turma.map(item => [item.nome, item.qtdFaltas]));

// console.log(curso.aprovadoOuReprovado(0));
