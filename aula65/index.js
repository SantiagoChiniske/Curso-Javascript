// Filter -> sempre retornar um array com a mesma quantidade elementos ou menos

//retorne os números maiores que 10
const numero = [5,50,80,1,2,3,5,8,7,11,15,22,27]
const numeroFiltrados = numero.filter(valor=> valor > 10);
//console.log(numeroFiltrados)


//Retorna as pessoas cque tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorna as pessoas cujo nome termina com a 


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



const pesssoasNomesMaiores = pessoa.filter((obj)=> obj.nome.length >= 5 )
const pesssoasMaisVelhas = pessoa.filter((obj)=> obj.idade > 50 )
const pesssoasTerminaComA = pessoa.filter(obj=> {
    return obj.nome.toLocaleLowerCase().endsWith('a')
})

console.log(pesssoasNomesMaiores)
console.log(pesssoasMaisVelhas)
console.log(pesssoasTerminaComA)