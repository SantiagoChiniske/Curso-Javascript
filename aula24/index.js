// If pode ser usado sozinhi
// Sempre que ultilizo a palavra else, preciso de um If antes
//Eu poso ter vários else ifs na chacagem
//Só posso ter um else na chegagem
//Podemos usar condições  sem else if, ultilizando if e else

const hora = 54;

if( hora>=0 && hora<=12){
    console.log("Bom dia!")
}else if (hora > 12 && hora<=17){
    console.log("Boa tarde!")
}else if(hora >18 && hora <=23){
    console.log("Boa noite")
}else{
    console.log("Olá")
}
