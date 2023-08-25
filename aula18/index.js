const pessoa1 = { //Objeto
    nome : 'Luiz',
    sobrenome: 'Miranda',
    idade: 25

};
console.log(pessoa1.idade)


function criaPessoa(nome,sobrenome,idade ){// parametro e Uma função com Objeto
    return {
        nome,
        sobrenome,
        idade
    }
};

const pessoa2 = criaPessoa('Santiago','Chiniske',20)
console.log(pessoa2.nome)


const pessoa3 = {
    nome: 'Santiago',
    sobrenome:'Chiniske',
    idade:20,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oii....`)
    },
    incremetaIdade(){
        this.idade++;
    }
};

pessoa3.fala()