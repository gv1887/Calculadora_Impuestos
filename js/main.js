//declaracion del input

async function conversor() {
    try {
        const response = await fetch('https://dolarapi.com/v1/dolares/tarjeta')
        const data = await response.json()
        let dolar = data.venta
        let inputs = document.querySelectorAll('.input-pesos')
        let p = document.querySelectorAll('.total')

        inputs.forEach((input, index) => {
            input.addEventListener('input', () => {
                let total = input.value
                
                if(index === 1){
                    p[index].textContent = (total * 1.53).toFixed(2) + " ARS"

                }else{

                    p[index].textContent = (total * dolar).toFixed(2) + " ARS"
                }


            })
        })




    }
    catch (error) {
        console.log('Error', error)
    }
}
conversor()