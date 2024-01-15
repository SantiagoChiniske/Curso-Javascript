//declaração de função (function hoisting -> posso u)
falaOi();
function falaOi(){
    console.log('Oie')
}

// First-Class objects (Objetos de primeira Classe)
// Function expression

const souUmDado = function (){
    console.log('Sou um dado.')
}
souUmDado();

function executaFunção(funcao){
    console.log("Vou executar seu código")
    funcao();
}
executaFunção(souUmDado);

// Arrow function
const funcaoArrow = () =>{
    console.log("Sou uma arrow function")
};

funcaoArrow(); 

//Dentro de um objeto - Metódo

const obj ={
    falar: function(){
        console.log("Estou falando...")
    }
};
obj.falar()