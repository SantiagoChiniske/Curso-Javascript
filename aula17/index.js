function soma(x,y){
    const resultado = x + y
    return resultado
}


console.log(soma(15,25));

//Função anonima
const raiz = function (n){
    return n **0.5;
};

console.log(raiz(25))

//Arrow fuction
const raiz2 = (n) =>{
    return n **0.5;
};

// Outro modo const raiz2 = n => n **0.5;

console.log(raiz2(25))


/*function saudação(nome){
    return`Seja bem-vindo ${nome}`;
}

const variavel = saudação('Santiago');
console.log(variavel) */