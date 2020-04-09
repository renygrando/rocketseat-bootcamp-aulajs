//Criar um Programa que calcula a média
// das notas entre os alunos e envia
//mensagem do cálculo da média
//Se a média for maior que 5, parabenizar a turma!

const alunosTurmaA = [
    { nome: 'Joao', nota: 10 },
    { nome: 'Maria', nota: 9.8 },
    { nome: 'Keila', nota: 8.9 },

]

const alunosTurmaB = [
    { nome: 'Joana', nota: 3.3 },
    { nome: 'Carla', nota: 9.0 },
    { nome: 'Lucas', nota: 6.1 },
    { nome: 'Luis', nota: 10 },
    { nome: 'Gean', nota: 10 },
]

function calculaMedia (alunos){
    let soma = 0;
    for (let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }
    
    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia (alunosTurmaA);
const media2 = calculaMedia (alunosTurmaB);

function enviaMensagem(media, turma){
if (media >= 5){
    console.log (`Parabéns!!! A média da turma ${turma}  foi de ${media}.`)
} else {
    console.log (`Que pena! A média da turma ${turma} foi menor que 5 =(`)
}
}

enviaMensagem(media1, 'A');
enviaMensagem(media2, 'B');

