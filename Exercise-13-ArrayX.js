/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.

Enunciado
Dado un array, dividirlo en tantos sub-arreglos
como sea necesario basandose en numero q se indique

Ejemplo

divideArray([7, 8, 9, 10], 2)

// Devuelve:
[[7, 8], [9, 10]]

*/

function divideArray(array_principal, numero_elementos){
    let arreglos = [];

    for(let elemento of array_principal){
        let ultimo = arreglos[arreglos.length - 1];

        if(!ultimo || ultimo.length === numero_elementos){
            arreglos.push([elemento]);
        }else{
            ultimo.push(elemento);
        }

    }
    return arreglos;
}

console.log(divideArray([7, 8, 9, 10], 2))



// node Exercise-13-ArrayX.js