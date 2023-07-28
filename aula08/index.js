/*
Saída:

Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.9259
Luiz Otávio nasceu em 1980
*/

const nome ='Santiago';
const sobrenome = 'Chiniske Pereira';
const idade = 19;
const peso =60;
const alturaEmM = 1.71

let imc; // peso/(altura*altura)
let anoNascimento;
const ano ='2023';

imc = peso/(alturaEmM*alturaEmM)

anoNascimento = ano - idade
console

console.log(nome , sobrenome ,'tem', idade,', pesa', peso,'kg')
console.log('tem',alturaEmM , 'de altura e seu IMC é de ', imc)
console.log(nome, 'Nasceu em', anoNascimento)

console.log(`${nome} ${sobrenome} tem ${idade} , pesa ${peso} kg`)
console.log(`tem ${alturaEmM}  de altura e seu IMC é de ${imc}`)
console.log(`${nome}  Nasceu em ${anoNascimento}`)