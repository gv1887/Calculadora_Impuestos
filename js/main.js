//declaracion del input

async function conversor (){
    try{
        const response = await fetch('https://dolarapi.com/v1/dolares/tarjeta')
        const data = await response.json()
        let dolar = data.venta
        let input = document.getElementById('input-pesos')
        
        input.addEventListener('input',()=>{
            let pesos = input.value 
            if(pesos <= -1){
                alert('ingrese un digito valido')
            }else{
                let total = document.getElementById('total')
                let totalMult = pesos * dolar
    
                total.textContent = totalMult.toFixed(2) + "  " + '$ ARS '

            }



        })


        
    }
    catch(error){
        console.log('Error',error)
    }
} 
conversor()