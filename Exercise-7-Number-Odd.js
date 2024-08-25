/*
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