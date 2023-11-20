const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroudColorBody = estiloBody.backgroundColor;


for (let p of ps){
    p.style.backgroundColor = backgroudColorBody;
    p.style.color = '#fff'
}