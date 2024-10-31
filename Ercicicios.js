//Ejercicio No.1

// Solicitar al usuario que ingrese un número
const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Introduce un número:"));
// Verificar que el número ingresado es positivo
if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, ingresa un número entero positivo.");
} else {
    // Bucle para generar y mostrar los números pares positivos menores al número ingresado
    for (let i = 0; i < numero; i += 2) {
        console.log(i);
    }
}

//Ejercicio No.2

// Solicitar al usuario que ingrese un número entero
const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Introduce un número entero:"));

// Verificar que el número ingresado es un entero positivo
if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, ingresa un número entero positivo.");
} else {
    // Bucle para generar y mostrar el triángulo de asteriscos
    for (let i = 1; i <= numero; i++) {
        let linea = ''; // Inicializar la línea actual como una cadena vacía

        // Generar la línea de asteriscos
        for (let j = 0; j < i; j++) {
            linea += '*';
        }

        // Mostrar la línea
        console.log(linea);
    }
}

//Ejercicio No.3

// Solicitar al usuario que ingrese un número entero positivo
const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Introduce un número entero positivo:"));

// Verificar que el número ingresado es un entero positivo
if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, ingresa un número entero positivo.");
} else {
    let suma = 0;

    // Bucle para calcular la suma de los números enteros de 1 a 'numero'
    for (let i = 1; i <= numero; i++) {
        suma += i;
    }

    // Mostrar el resultado en la consola
    console.log(`Los enteros de 0 a ${numero} suman ${suma}.`);
}

//Ejercicio No.4

// Definir el array con los números
const numeros = [5, 9, 10, 12];

// Inicializar la variable para la suma
let suma = 0;

// Bucle para calcular la suma de los números en el array
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

// Calcular la media aritmética
let media = suma / numeros.length;

// Mostrar el resultado
console.log(`La media es ${media}`);

//Ejercicio No.5 

// Número para el cual se quiere generar la tabla de multiplicar
const numero = 3;

// Bucle para generar la tabla de multiplicar del número
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}
