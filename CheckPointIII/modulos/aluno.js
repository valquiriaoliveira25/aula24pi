function Aluno (nome, notas, qtdFaltas = 0) {
    this.nome = nome;
    this.notas = notas;
    this.qtdFaltas = qtdFaltas;
    this.addNotas = function (nota1, nota2, nota3) {
        this.notas.push(nota1);
        this.notas.push(nota2);
        this.notas.push(nota3);
    };
    this.media = function () {
        let med = this.notas.reduce((ant, atual) => ant + atual, 0) / this.notas.length;
        return med;
    };
    this.faltas = function () {
        this.qtdFaltas++;
    };
};

module.exports = Aluno