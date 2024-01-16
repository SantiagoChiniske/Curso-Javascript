//arguments que sustenta os argumentos enviados

function funcao(a,b,c){
    let total = 0
    for (let argumento of arguments ){
        total+= argumento
    }
    console.log('Valor total:' +total)
}

//funcao(1,2,3,4,5);

//Adicionando valor padrão
function funcao2(a,b = 0){ // Forma atual
   // b = b || 0; ->Forma antiga
    console.log(a+b)
}

//funcao2(2);

function funcao3({nome,sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}

//funcao3({nome:"Santiago", sobrenome:"Chiniske", idade: 20});

function conta(operador,acumulador, ...numeros){

   
    for(let numero of numeros){
        if(operador == '+') acumulador+= numero;
        if(operador == '-') acumulador-= numero;
        if(operador == '*') acumulador*= numero;
        if(operador == '/') acumulador/= numero;

    }
    console.log(acumulador)
}

conta('/',1,20,30,40)