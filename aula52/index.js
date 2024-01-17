//Escopo léxico
const nome = 'Santiago';

function falaNome(){
   
    console.log(nome)
}

function usaFalanome(){
    const nome = 'Carlos'
    falaNome();
}
    
usaFalanome();