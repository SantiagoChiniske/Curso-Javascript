const alunos = ['Luiz','Maria'] // Array
console.log(alunos) 

//alunos[0] = 'Eduardo'; // altera
alunos.push('Santiago', 'Paulo') ;//adiciona no fim do array
alunos.unshift('Marcos'); //Adiciona no começo do array

console.log(alunos)

const removido = alunos.pop(); // remove o último elemento
const removido2 = alunos.shift();//remove do ínicio

console.log(alunos)
console.log(removido)
console.log(removido2)

console.log(alunos.slice(0,2))

