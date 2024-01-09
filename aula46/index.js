function mostraHora(){
    let data = new Date;

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    })
}


// Timer que conta
const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

//Timer que finaliza a aplicação após alguns segundos
setTimeout(function(){
    clearInterval(timer)
},10000);


setTimeout(function(){
    console.log('Olá Mundo')
},5000)