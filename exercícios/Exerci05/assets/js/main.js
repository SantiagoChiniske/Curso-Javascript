const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch (diaSemana){
        case 0:  
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
    
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto;
            
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto;
    
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto;
            
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
    
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
            
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        }

}

function getMesAnoTexto(mesAno){
    let MesAnoTexto;

    switch (mesAno){
        case 0:  
            MesAnoTexto = 'Janeiro';
            return MesAnoTexto;
    
        case 1:
            MesAnoTexto = 'Fevereiro';
            return MesAnoTexto;
            
        case 2:
            MesAnoTexto = 'Março';
            return MesAnoTexto;
    
        case 3:
            MesAnoTexto = 'Abril';
            return MesAnoTexto;
            
        case 4:
            MesAnoTexto = 'Maio';
            return MesAnoTexto;
    
        case 5:
            MesAnoTexto = 'Junho';
            return MesAnoTexto;
            
        case 6:
            MesAnoTexto = 'Julho';
            return MesAnoTexto;

        case 7:
            MesAnoTexto = 'Agosto';
            return MesAnoTexto;

        case 8:
            MesAnoTexto = 'Setembro';
            return MesAnoTexto;

        case 9:
            MesAnoTexto = 'Outubro';
            return MesAnoTexto;

        case 10:
            MesAnoTexto = 'Novembro';
            return MesAnoTexto;

        case 11:
            MesAnoTexto = 'Dezembro';
            return MesAnoTexto;
        }
}
function zeroAEsquerda(num){
    return num>=10 ? num : `0${num}`
}

function criaData(data){
    const diaSemana = data.getDay();
    const mesAno = data.getMonth();
    const dia = zeroAEsquerda(data.getDay());
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getMesAnoTexto(mesAno);

    return `${nomeDia}, ${dia} de ${nomeMes} de ${ano} ${hora}:${min} `
    
}

h1.innerHTML = criaData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString('pt-BR', {dataStyle: 'full', timeStyle:'Short');