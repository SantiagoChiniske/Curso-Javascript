//For in -> Lê os índices ou chaves do objeto

const frutas = ['Pera','Maça','Uva'];

for (let i in frutas){
    console.log(frutas[i])
}

const pessoa = {
    nome: 'Santiago',
    sobrenome: 'Chiniske',
    idade: 30
};

for (let i in pessoa){
    console.log(i, pessoa[i])
}