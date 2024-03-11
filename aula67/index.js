//Somar todos esse números
const numero = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const total = numero.reduce(function(acumulador,valor,indice){
    
    return acumulador;
},[]);

//console.log(total)


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

const maisVelha= pessoa.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})

console.log(maisVelha)