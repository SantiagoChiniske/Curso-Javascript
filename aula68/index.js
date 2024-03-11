

const numero = [5,50,80,1,2,3,5,8,7,11,15,22,27];

//Retornar a soma do dobro de todos os pares

// Filtar os pares
const paresFiltrado = numero.filter(valor=>{
    if(valor % 2 === 0){
        return valor
    }
}).map(function(valor){
    return valor *2
}).reduce(function(acumulador,valor){
    return acumulador+=valor
},0);


console.log(paresFiltrado)

// Dobrar os valores
const dobrarValores = numero.map(function(valor){
    return valor * 2
})
//console.log(dobrarValores)

// Reduzir somar tudo
const total = numero.reduce(function(acumulador,valor){
    return acumulador+=valor
},0);
//console.log(total)