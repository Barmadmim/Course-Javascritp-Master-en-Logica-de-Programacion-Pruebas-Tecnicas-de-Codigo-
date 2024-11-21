/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.

Enunciado
Dado un String yu un Numero, repetir el string tantas veces como el numero indique.

Ejemplo

repiteme("Hola", 2)

// Devuelve:
holahola

*/

function repiteme(text, numero){
    let resultado = "";

    for(let i = 0; i < numero; i++){
        resultado += text;
    }
 
    resultado += text

    return resultado;

}
console.log(repiteme("Hola", 6))


//node Exercise-14-repeat.js