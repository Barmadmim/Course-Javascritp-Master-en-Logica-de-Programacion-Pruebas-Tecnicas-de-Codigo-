/* 
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.

Enunciado: 
Dibujar un Cubo hueco Con asteriscos

Ejemplo:
Lados(4)

return:

****
*  *
*  *
****

*/

//Así pintamos los lados de arriba y abajo
function lado(numero){
    let lado = "";

    for( let i = 0; i < numero; i++ ){
        lado += "*";
    }

    return lado;
}

//Así pintamos el cuadrado en si
function cuadrado(numero){
    let dibujo = lado(numero) + "\n";

    let contenido = "";

    for( let i = 0; 1 < (numero - 2); i++){
        contenido = "*";

        for( let x = 0; x < (numero - 2); x++ ){
            contenido += "";
        }
        contenido += "*";
        dibujo += contenido + "\n"
    }

    dibujo += lado(numero);

    return dibujo;
}

console.log(cuadrado(4));
