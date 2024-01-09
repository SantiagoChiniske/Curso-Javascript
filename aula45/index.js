try {
// é executado quando não há erros 
}catch (e){
    // é executado quando há erros 

}
finally{
    // é executado sempre
}

function retornaHora (data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }

    if(!data){
        data = new Date();

    }

    return data.toLocaleTimeString('pt-BR',{
    hour: '2-digit',
    minute:'2-digit',
    second: '2-digit',
    hour12:false
    })

}
try{
    const data  = new Date('01-01-2055 12:45:45')
    const hora= retornaHora('eas')
    console.log(hora)

}catch(e){
    //tratar erro
    console.log(e)
}finally{
    console.log('Tenha um bom dia!')
}

