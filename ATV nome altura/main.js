const meuEl = document.addEventListener('click', el =>{
    const mouse = el.target;
    
    if(mouse.classList.contains('btnCalc')){
        const result = document.querySelector('.result')
        const nameUser = document.getElementById('nameUser').value
        const alturaUser = parseFloat(document.getElementById('heightUser').value)
        const pesoUser = parseFloat(document.getElementById('weightUser').value)
        
       const IMC = (pesoUser/(alturaUser*alturaUser)).toFixed(2)
       
       if(IMC<16){
        result.innerHTML = `O IMC de: ${nameUser} | ${IMC} Baixo peso muito grave`
       }
       else if(IMC>=16 && IMC<=16.99){
        result.innerHTML = `O IMC de: ${nameUser} | ${IMC} Baixo peso grave`
       }
       else if(IMC>=17 && IMC<=18.49){
        result.innerHTML = `O IMC de: ${nameUser} | ${IMC} Baixo peso`
       }
       else if(IMC>=18.50 && IMC<=24.99){
        result.innerHTML = `O IMC de: ${nameUser} | ${IMC} Peso normal`
       }
       else if(IMC>=25 && IMC<=29.99){
        result.innerHTML = `O IMC de: ${nameUser} | ${IMC} Sobrepeso`
       }
       else if(IMC>=30 && IMC<=34.99){
        result.innerHTML = `O IMC de: ${nameUser} | ${IMC} Obesidade grau I`
       }
       else if(IMC>=35 && IMC<=39.99){
        result.innerHTML = `O IMC de: ${nameUser} | ${IMC} Obesidade grau II`
       }
       else if(IMC>=40){
        result.innerHTML = `O IMC de: ${nameUser} | ${IMC} Obesidade grau III`
       }
    }
}
)