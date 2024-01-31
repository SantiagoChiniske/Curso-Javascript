//Valor por referencia

const nomes = ['Santiago','Yasmin','Pablo','Pedro','Paulo'];
const novo = [...nomes]; //Cópia o elemento

nomes[2] = 'Mario'
//delete nomes[2];
//const removido = nomes.pop()//Remove Final do Array
//const removido1 = nomes.shift()//Remove Inicio do Array

//const adicionado = nomes.push('Carlos')//adiciona no Fim do array
//const adicionado1 = nomes.unshift('wallace')//adiciona no inicio do array

const novos = nomes.slice(0,-1) // Recorta o array o primeiro número aonde começa e o segundo aonde termina, se for nergativo ele elimina o do fim

const nome1 = 'Santiago Chiniske Pereira';
const nomes1 = nome1.split(' ') // Ele separa os valores em um array 
console.log(nomes1)

const nome3 = nomes.join(' ')// Transforma um array em strig
console.log(nome3)


//console.log(novos)