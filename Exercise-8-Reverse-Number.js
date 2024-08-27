/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.

Enunciado Ejercisio 8:
Dado un número entero, inviertelo y devuelvelo

Ejemplo:
InvertirNumero(100)  Devuelve: 001

Como se Hace:
-Lo convertirmos en un string
-Lo dividimos
-Le damos la vuelta
-Lo unimos
-Lo convertirmos en un numero
*/

function InvertirNumero(numero){
    
    let invertido = parseInt( numero
    .toString()
    .split()
    .reverse()
    .join()
) * Math.sign(numero);

    return invertido
}

console.log(InvertirNumero(-56))

/*

function numeroEntero(numero){
    numero = parseInt(numero.toString().split('').
    reverse().join(''))*Math.sign(numero);

    //como con numeros negativos el signo nos lo va a ignorar, 
    //debemos comprar si viene negativo o no por lo que usamos el
    //metodo Math.sign

    //numero = numero*Math.sign(numero);
    return numero;
}

console.log(numeroEntero(-56))

*/
