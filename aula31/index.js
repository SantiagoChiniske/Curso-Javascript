const verdadeira = true;

//Let tem escopo de blocos {... bloco}
//Var só tem escopo de função

let nome = ' Luiz'; // Criando
var nome2 = 'Luiz'


if (verdadeira){
    let nome = 'Otávio'; //Criando
    console.log(nome,nome2)

    if(verdadeira){
        let nome = 'Outra coisa'; //Criando
        console.log(nome,nome2)
    }
}



