/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.

Enunciado Ejercisio 7: 
Dados dos números, devolver cuantos números IMPARES hay entre ellos.

Ejemplo:
Impares(1, 100) Devolver 50

Como hacerlo:
-Función que reciba los dos numeros
-Bucle desde el numero1 al numero2
-Si el resto es distinto a 0, es impar
-Aumentar el contador

*/

function impar(numero1, numero2){
    let contador = 0;
    for( numero1; numero1 < numero2; numero1++ ){

        if( numero1 % 2 !== 0){
            console.log(`El numero ${numero1} es impar`);
            contador++;
        }
    }

    return contador;
}

console.log("Numeros Impares =", impar(1,100));
