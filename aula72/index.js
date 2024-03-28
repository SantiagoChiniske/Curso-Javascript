// defineProperty -> Getter e Setters
//Getter -> Para pegar os valores | Setters para definir valores

function Produto (nome,preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        configurable:true, // Pode reconfigurar ou apagar a chave 
        get: function(){
            return estoque;
        },
        set: function (valor){
            if(typeof valor !== 'number'){
               throw new TypeError ('Mensagem');
            }

        }
    });

}

const p1 = new Produto('Camiseta',20,3);
console.log(p1)
p1.estoque = 500
console.log(p1.estoque)
