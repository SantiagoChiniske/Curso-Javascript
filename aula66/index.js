//Dobre os valores

const numero = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const dobroNumero = numero.map(valor => valor * 2)

//console.log(dobroNumero)

const pessoa =[
    {nome:'Santiago', idade:20},
    {nome:'Yasmin', idade:22},
    {nome:'Isa', idade:55},
    {nome:'Pablo', idade:60},
    {nome:'Maria', idade:80},
    {nome:'Simone', idade:47},
    {nome:'Ni', idade:12},
    {nome:'Marta', idade:85},
]

const nomes = pessoa.map((obj)=> obj.nome)
const idades = pessoa.map((obj) =>({idade: obj.idade}))


const comIds = pessoa.map(function(obj,indice){
    const newObj = {...obj}
    newObj.id = indice+1;
    return newObj;
});

// console.log(nomes)
// console.log(idades)
// console.log(comIds)
console.log(pessoa)


