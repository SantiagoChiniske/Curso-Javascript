function meuEscopo () {
    const form = document.querySelector('.form');

/* Duas forma de não enviar o formulário
    form.onsubmit = function (evento){
        evento.preventDefault();
        alert(1);
        console.log('Foi enviado!');
    };
}
*/
function recebeEventoForm(evento){
    evento.preventDefault();
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.nome')
    const peso= form.querySelector('.nome')
    const altura = form.querySelector('.nome')
    console.log(nome, sobrenome,peso, altura);
};

 form.addEventListener('submit', recebeEventoForm)

}
meuEscopo();