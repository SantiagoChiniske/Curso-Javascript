/*let a = 'A';
let b = 'B';
let c = 'C';


const numeros = [b,c,a];
[a,b,c] = numeros;

console.log(a,b,c)
*/

const numeros = [1000,2000,3000,4000,5000,6000,700,800,9000];
const [primeiroNumero,segundoNumero,...resto]= numeros;

console.log(primeiroNumero,segundoNumero)
console.log(resto)
