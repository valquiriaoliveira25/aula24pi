let Aluno = require ("./aluno");

let curso = {
    nome : "CTD",
    notasAprov : 7,
    faltasMax : 4,
    turma : [],
    addAlunos : function (nome, notas, qtdFaltas) {
        this.turma.push(new Aluno(nome, notas, qtdFaltas));
    },
};


module.exports = curso;

