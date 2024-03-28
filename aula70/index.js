const pessoa ={
  nome: 'Santiago',
  sobrenome: 'Chiniske'  
};

//console.log(pessoa.nome) //Por ponto
//console.log(pessoa['nome']) // Ou por chave que pode vim de base de dados


const pessoa1 = new Object();
pessoa1.nome = 'Santiago';
pessoa1.sobrenome = 'Chiniske';
pessoa1.idade = 20
pessoa1.falarNome = function() {
  return(`${this.nome} está falando seu nome.`)
};
pessoa1.getDataNascimento = function (){
  const dataAtual = new Date()
  return dataAtual.getFullYear() - this.idade; 
}
/*
for (let chave in pessoa1){
  console.log(chave)
}
*/

//console.log(pessoa1.falarNome())
//console.log(pessoa1.getDataNascimento());

//Factory Functions / Constructor Functions / Classes

//Exemplo de Factory Functions
function criaPessoa(nome,sobrenome){
  return {
    nome,
    sobrenome,
    get nomeCompleto (){
      return  (`${this.nome} ${this.sobrenome}`)
    }
  }
}

const p1 = criaPessoa('Santiago', 'Chiniske')
//console.log(p1.nomeCompleto())

//Exemplo Constructor Functions

function Pessoa (nome,sobrenome){
  this.nome = nome;
  this.sobrenome= sobrenome;

  Object.freeze(this)
}

//New -> Vai criar um objeto vázio atrelar a palavras this ao objeto
Object.freeze(p2) //Ele trava e não pode ser feito alterações nele
delete p1.nome; //ELe apaga um campo 
const p2 = new Pessoa('Santiago', 'Chiniske') 
console.log(p2)