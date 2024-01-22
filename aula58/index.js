//função construtora -> objetos
//função fabrica -> objeto
// Constutroa -> Pessoa (new)

function Pessoa(nome,sobrenome){
    //atributos ou metodos privados
    const ID  = 123456;
    const metodoInterno = function(){
    }

    //atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () =>{
    console.log(this.nome +':Sou um metódo!')
    };
}

const p1 = new Pessoa('Santigo', 'Chiniske')
const p2 = new Pessoa('Yasmin', 'Candido')
console.log(p2.ID)
typeof(p1)
p1.metodo()