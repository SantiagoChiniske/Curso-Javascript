//const data = new Date(); // Função construtora
//const data = new Date(2019,3,20,15,14,27)//Ano, mês , Dia, Hora,Minutos, segundos,milesimos
/*
const data = new Date('2019-04-20 20:20:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()+1);// Mês começa do Zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());//0- Domingo , 6 - Sábado
console.log(data.toString());
*/

//Coloca um número a esquerda
function zeroAEsquerda(num){
    return num>=10 ? num : `0${num}`
}

//Formata no formato brasileiro
function formataData(data){
    //console.log(data);
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()+1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return console.log(`${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`)
    
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);