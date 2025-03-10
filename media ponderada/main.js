const meuEl = document.addEventListener('click', el =>{
    const mouse = el.target;
    
    if(mouse.classList.contains('btnCalc')){
        const result = document.querySelector('.result')
        const n1NumberUse = parseFloat(document.getElementById('n1').value)
        const n2NumberUse = parseFloat(document.getElementById('n2').value)
        const n3NumberUse = parseFloat(document.getElementById('n3').value)
        
        const pesos = {
            p1: 2,
            p2: 3,
            p3: 5
        }

        const resultado = ((n1NumberUse*pesos.p1)+(n2NumberUse*pesos.p2)+(n3NumberUse*pesos.p3))/(pesos.p1+pesos.p2+pesos.p3)
        result.innerHTML = resultado
        
    }
}
)