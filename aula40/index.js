const numeros = [1,2,3,4,5,6]

for (let numero of numeros){

    if (numero === 2 ){
        console.log('Pulei o numero 2')
        continue
    }else if(numero === 5){
        console.log('Acabou aqui')
        break
    }

    console.log(numero)
}