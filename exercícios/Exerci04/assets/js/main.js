const form = document.querySelector('.form');

//Função principal
form.addEventListener('submit', function(event){
    event.preventDefault();
    
    const inputPeso = event.target.querySelector('#peso')
    const inputAltura = event.target.querySelector('#altura')

    const peso = Number(inputPeso.value);
    const altura= Number(inputAltura.value);
   
    if (!peso){
        setResultado('Peso inválido',false);
        return;
    }

    if(!altura){
        setResultado('Altura inválido',false);
        return;
    }

    const imc = getImc(peso,altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg,true,nivelImc)
} );

//Níveis do IMC
function getNivelImc(imc){

    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
    'Obesidade grau 2','Obesidade grau 3' ];

    if(imc >= 39)return nivel[5]; 
    if(imc >= 34.9)return nivel[4];
    if(imc >= 29.9)return nivel[3];
    if(imc >= 24.9)return nivel[2];
    if(imc >= 18.5 )return nivel[1];
    if(imc <18.5)return nivel[0];
}

//CAlculo do IMC
function getImc(peso,altura){
    const imc = peso/altura **2;
    return imc.toFixed(2);
}

//Cria um paragrafo
function criaP(){
    const p = document.createElement('p'); // Cria um elemento HTML
    //p.classList.add('paragrafo-resultado') Colocar uma classe nele
    return p;
}

//Ele seta o resultado
function setResultado(msg,isValid,getNivelImc){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
       

    const p = criaP();//Cria um paragrafo
    //Verifica o resutado
    if(isValid) {

        if(getNivelImc >= 39) return  p.classList.add('paragrafo-resultado-obeside03'); // Caso verdadeira cria essa classe
        if(getNivelImc >= 34.9) return  p.classList.add('paragrafo-resultado-obeside02');
        if(getNivelImc >= 29.9) return  p.classList.add('paragrafo-resultado-obeside01');
        if(getNivelImc >= 24.9) return  p.classList.add('paragrafo-resultado-sobrepeso');
        if(getNivelImc >= 18.5) return  p.classList.add('paragrafo-resultado-peso-normal');
        if(getNivelImc < 18.5) return  p.classList.add('paragrafo-resultado-abaixo');

    }else{
        p.classList.add('bad');//Caso falsa cria essa outra clase
    }
    p.innerHTML = msg;//inseri a mensagem
    resultado.appendChild(p);

}

