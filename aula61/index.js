//funções geradoras
function* geradora1(){
    //Código....
    yield 'Valor 1';
    //Código....
    yield 'Valor 2';
    //Código....
    yield 'Valor 3';

}

function* geradora2 (){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const g2 = geradora2()


function* geradora3 (){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;

}


const g4 = geradora4();

for (let valor of g4){
    console.log(valor)
}