// 2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

// Ejemplo:
// Array1: ['rojo', 'azul', 'amarillo']
// Array2: ['blanco', 'negro', 'rojo']
// Resultado: ['rojo']

// Ejemplo 2:
// Array1: [4, 3, true, 'manzana']
// Array2: ['pera', 3, f alse, true, 3, true]
// Resultado: [3, true]

const array1 = ['rojo', 'azul', 'amarillo'];
const array2 = ['blanco', 'negro', 'rojo'];

const array3 = [4, 3, true, 'manzana'];
const array4 = ['pera', 3, false, true, 3, true];

const elementos = (primerArray, segundoArray) => {

    const nuevo_array = primerArray.filter(elemento => segundoArray.includes(elemento));
    console.log(`Elementos que coincidieron: ${nuevo_array}`);
}

elementos(array1, array2);
elementos(array3, array4);