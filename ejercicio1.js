// 1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
// para valor 6
// 1
// 12
// 123
// 1234
// 12356

const piramide = numero => {
    for(let i = 1; i <= numero; i++){
        let fila = "";
        
        for(let j = 1; j<= i; j++){
            fila += j;
        }

        console.log(fila);
    }
    
}

piramide(6);