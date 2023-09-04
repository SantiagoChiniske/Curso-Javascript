function meuEscopo(){
const form = document.querySelector('.container');
const resultado = document.querySelector('.resultado');

function calcularImc (evento){
    evento.preventDefault();

    const peso = container.querySelector('#peso')
    const altura = container.querySelector('#altura')


    resultado = (altura*altura)/peso;

    console.log(resultado)
    resultado.innerHTML = `<p>Nome:${imc.value} </p>`



};


form.addEventListener('submit', calcularImc )

};




meuEscopo();