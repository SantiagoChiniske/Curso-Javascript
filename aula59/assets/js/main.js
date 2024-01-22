function Calculadora (){
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.capturaClick();
        this.capturaEnter();
    }  

    this.capturaEnter = () =>{
       this.display.addEventListener('keypress', e =>{
        if (e.keyCode === 13 ){
            this.realizaConta();
        };
       
       })
    }

    this.capturaClick = () =>{
        document.addEventListener('click', event =>{
            const el = event.target;
            if(el.classList.contains('btn-num')) this.addnumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.realizaConta(el);
        });

    }

    this.addnumDisplay = el =>{
        this.display.value += el.innerText;
        this.display.focus();
    }
    this.clear = () =>this.display.value = "";
     
    this.del = () =>this.display.value = this.display.value.slice(0,-1);
    this.realizaConta = el =>{
            
            try {
               const conta = eval(this.display.value);
                if(!conta){
                    alert('Conta inválida')
                    return
                }
                this.display.value = conta;

            }catch (e){
                alert('Conta inválida')
                return;
            }
    }



    
}


const calculadora = new Calculadora();
calculadora.inicia();