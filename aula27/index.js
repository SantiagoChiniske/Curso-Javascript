//Operador tenário
// (condicao) ? 'Valor para verdadeiro': 'Valor para falso';

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >=1000 ? 'Usario Vip': 'Usuario normal';
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao)

/*
if(pontuacaoUsuario >= 1000){
    console.log('Usuario Vip')
}else{
    console.log('Usuário normal')
}
*/