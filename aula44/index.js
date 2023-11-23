// Tratamento de erros

function soma(x,y){

    if (typeof x !== 'number' || typeof y !== 'number' ){
        throw new ReferenceError ('x e y precisam ser números ') // ele lança um erro aqui e tem vários termos de Erro
    }

    return x+y;

}

try{
    console.log(soma(45,8))
    console.log(soma(45,'x84'))
    
}catch(err){
    console.log(err)
}



/*
try{
    console.log(naoExisto)

} catch(err){
    console.log('Ocorreu um erro' + err)
}
*/
