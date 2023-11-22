// Escreva uma função que recebe um número e retorne o seguinte:
/*número é divisivel por 3 = fizz  
número é divisivel por 5 = buzz
número é divisivel por 3 e 5 = fizzbuzz
número não é divisivel por 3 e 5 = retorna o próprio número
checar se o número é realmente um número
Usar a função com número de 0 a 100
*/
function divisao(i){
    if(typeof i !== 'number') return i;
    if(i % 3 === 0 && i % 5 === 0)return ('FizzBuzz');
    if( i % 3 === 0) return ('Fizz')
    if( i % 5 === 0)  return ('Buzz')

    return i

}


for(let i = 0; i<= 100; i++){
    console.log(i ,' - ' , divisao(i))
    
}



