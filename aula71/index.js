// defineProperty / Para uma chave só - defineProperties /Para várias chaves

function Produto (nome,preco, estoque){


    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        value: estoque, //Valor da chave
        writable:false, //Alterar o valor ou  não desse objeto
        configurable:true // Pode reconfigurar ou apagar a chave 
    });

    Object.defineProperties(this,{
        nome:{
            enumerable: true, //Mostra a chave
            value: nome, //Valor da chave
            writable:true, //Alterar o valor ou  não desse objeto
            configurable:true // Pode reconfigurar ou apagar a chave 

        },
        preco:{
            enumerable: true, //Mostra a chave
            value:preco, //Valor da chave
            writable:true, //Alterar o valor ou  não desse objeto
            configurable:true // Pode reconfigurar ou apagar a chave 
        }
    })
}

const p1 = new Produto('Camiseta',20,3);
console.log(p1)
console.log(Object.keys(p1))