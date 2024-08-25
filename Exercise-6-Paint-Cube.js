/* 

Enunciado: Dibujar un Cubo hueco Con asteriscos

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