let varA = 'A';
let varB = 'B';
let varC = 'C';

const varAtemp = varA

varA = varB // B
varB = varC
varC = varAtemp;

console.log(varA ,varB, varC)