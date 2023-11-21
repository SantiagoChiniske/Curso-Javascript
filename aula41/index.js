// Escreva uma função que recebe dois numeros e rertone maior deles

function maiorValor(x,y){
    if (x>y){
        return (`O maior valor é ${x}`)
    }
        return (`O maior valor é ${y}`)
}
const maiorValor2 = (x,y) =>{
    return x>y ? x : y;
}


console.log(maiorValor2(15,45))
console.log(maiorValor2(35,25))
console.log(maiorValor2(85.4,23))



