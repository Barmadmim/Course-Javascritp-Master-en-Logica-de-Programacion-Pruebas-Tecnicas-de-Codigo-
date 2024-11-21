/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.

Enunciado 
Dados un numero mostrar todos Los numeros desde ese al 0 de 8 eb una lista con 
guiones y cada numero debe empezar por n°

Ejemplo:

hastacero(100) // Devuelve :

--- Del 100 al 0 ---
n°100
n°92
n°84
n°76
n°68
n°60
n°52
n°44
n°36
n°28
n°20
n°12
n°4
*/

function hastacero(numero){
    let resultado = `--- Del ${numero} al 0 ---\n`;

    while(numero > 0){
        resultado += `n°${numero} \n`
        numero -= 8;
    }
    if(numero <= 0){
        resultado += "n°0 \n";
    } 

    resultado += "---- Fin ----" ;
    return resultado;
}

console.log(hastacero(100));

// node Exercise-12-hastacero.js