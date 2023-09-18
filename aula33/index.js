const pessoa ={
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade:30,
    endereco:{
        rua:'Avenida brasil',
        numero:420
    }
};

//Atribuição via desetruturação
const { nome: n = '' , sobrenome , idade } = pessoa
const { endereco : {rua: r, numero = 12345}} = pessoa
console.log(n , sobrenome)
console.log(r, numero)