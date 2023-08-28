/*
Primitivo(imutável) - String , number ,boolean, Underfined
null(bigint, sumbol) - Valores cópiados

Referencia(mutável) - array, object e fuctions - Passado por referência
*/ 

//Valor primitivo
let nome = 'Luiz';
nome = 'Otávio'
console.log(nome)

//Valor referencial

let a = [1,2,3];
let b  = a;

console.log(a,b)

a.push (4)
console.log(a,b)

b.pop();
console.log(a,b)
