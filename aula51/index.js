//return
//retorna um valor
//termina a funcão

function soma(a, b){
    return a+b;
}
//console.log(soma(5,4));

function criarPessoa (nome, sobrenome){
    return {nome, sobrenome}
}

const p1 = criarPessoa('Santiago','Chiniske Pereira')

//console.log(p1.nome)

function falaFrase(comeco){
    function falaResto(resto){
        return comeco+ ' ' + resto
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = (fala('Mundo!'));
//console.log(resto)

function duplica(n){
    return n*2;
}
function triplica(n){
    return n*3;
}

function criaMultiplicado(multiplicador){
    function multiplicacao(n){
        return n* multiplicador
    }
    return multiplicacao;
}

const quadriplicar = criaMultiplicado(4)
const resultado = quadriplicar(2);
console.log(resultado)

