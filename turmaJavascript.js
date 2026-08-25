// Array de turmas
const turmas = [
    {
        nomeProfessor: "Carlos Silva",
        alunos: [
            { nome: "Ana", nota: 8.5 },
            { nome: "Bruno", nota: 5.2 },
            { nome: "Carla", nota: 6.9 },
            { nome: "Diego", nota: 9.0 }
        ]
    },
    {
        nomeProfessor: "Mariana Costa",
        alunos: [
            { nome: "Eduardo", nota: 7.0 },
            { nome: "Fernanda", nota: 3.4 },
            { nome: "Gustavo", nota: 8.8 }
        ]
    }
];

// Método que ordena os alunos de cada turma em ordem crescente de nota
function ordenarAlunosPorNota(turmas) {
    for (let i = 0; i < turmas.length; i++) {
        turmas[i].alunos.sort((a, b) => a.nota - b.nota);
    }
}

// Método que imprime a mensagem de aprovação/reprovação de cada aluno
function exibirResultados(turmas) {
    for (let i = 0; i < turmas.length; i++) {
        console.log(`\nTurma do professor ${turmas[i].nomeProfessor}:`);

        for (let j = 0; j < turmas[i].alunos.length; j++) {
            const aluno = turmas[i].alunos[j];

            if (aluno.nota >= 7) {
                console.log(`Parabéns ${aluno.nome}, você foi aprovado com a nota ${aluno.nota}`);
            } else {
                console.log(`Não foi dessa vez ${aluno.nome}, você reprovou com a nota ${aluno.nota}`);
            }
        }
    }
}

// Execução
ordenarAlunosPorNota(turmas);
exibirResultados(turmas);