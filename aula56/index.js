//Factory Function (função fábica)
function criaPessoa (nome, sobrenome,altura,peso){
    return {
        nome,
        sobrenome,
        // getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
        ,
        fala(assunto = 'falando sobre nada'){
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        //getter
        get imc (){
            const indice = this.peso/(this.altura**2)
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa("Santiago","Chiniske",1.7,55);
const p2 = criaPessoa("Yasmin","Candido",1.6,50);

p1.nomeCompleto = "Yasmin Cândido Barbosa"
console.log(p1.sobrenome)
console.log(p1.fala())
console.log(p1.imc)




