/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.

Enunciado Ejercisio 2:
Dada una cadena de texto, comprobar si es un palindromo o no. 

Los palíndromos son palabras que se leen igual aún estando invertidos.

Ejemplo:
Palidromono(ana) devuelve true
Como hacerlo:
-Función con parámetro "texto"
-Separar el texto en un array de letras
-Darle la vuelta
-Unir el array de letras en un string y comparar con el parámetro

*/
function Palindromo(text){
    let invertido = text
    .split('') //pone la palabras separadas por ''
    .reverse() //Invierte la palabra
    .join(''); //vuelve a unir las palabra quita ''

    return (invertido === texto); //iguala si son iguales
    
}

console.log("¿Es un Palindromo?" +  palindromo("ana"))