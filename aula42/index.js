// Escreva uma função chamada ePaisagem que recebe dois argumentos,largura e altura de uma imagem(number). retorne true se a imagem estiver no modo paisagem

const ePaisagem = (largura, altura) =>{
    return largura>altura;
}

console.log(ePaisagem(1920,1080))
console.log(ePaisagem(1080,1920))
console.log(ePaisagem(1920,1980))
console.log(ePaisagem(1080,2500))