/*
Enunciado Ejercisio 5:
¿Cuánto es el X por ciento de X numero?

- Función con parametros porcentaje y numero
- Crear una variable para la operación del porcentaje
- Devolver string que responda a la cuestion del enunciado
*/

function tantoPorCiento(porcentaje, numero){
    let operacion = (numero (porcentaje/100));

    return `El ${porcentaje}% de ${numero} es ${operacion}`;
}

console.log(tantoPorCiento(50, 200));
