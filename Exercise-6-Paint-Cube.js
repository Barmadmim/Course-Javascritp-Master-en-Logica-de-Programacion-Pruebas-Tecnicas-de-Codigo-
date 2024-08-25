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
    let lado="";

    for(let i=0; i<numero;i++){
        lado+= "*";
    }

    return lado;
}

//Así pintamos el cuadrado en si
function cuadrado(numero){
    let dibujo = lado(numero) + "\n";

    dibujo=dibujo+lado(numero);
    return dibujo;
}

console.log(cuadrado(4))