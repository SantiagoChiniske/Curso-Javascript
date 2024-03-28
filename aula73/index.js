//Já vimos
/* 
Object.keys (Retorna somente as chaves)
Object.freeze(Congela o objeto)
Object.defineProperties(Define várias propriedades)
Object.defineProperty
*/
const outroProduto1 = {...produto} //Copiando objeto produto -> (Spread)
const outroProduto2 = Object.assign ({},produto,{material:'Porcelana'})//Copiando objeto produto

const produto ={ nome:'Caneca', preco: 1.8}


console.log(Object.getOwnPropertyDescriptor(produto,'nome')) //Descrição sobre aquele objeto

console.log(Object.keys(produto))// Só as chaves
console.log(Object.values(produto)) // Só os valores
console.log(Object.entries(produto)) // É um array com chaves e os valores

for (let [chave, valor] of Object.entries(produto)){
    console.log(chave , valor)
}
