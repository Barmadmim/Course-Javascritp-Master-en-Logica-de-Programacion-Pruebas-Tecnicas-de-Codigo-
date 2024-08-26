/*
Enunciado Ejercisio 1:
Crear una tabla de multiplicar de un numero X

Ejemplo: numero(5)
1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25
6 x 5 = 30
7 x 5 = 35
8 x 5 = 40
9 x 5 = 45
10 x 5 = 50

Como hacerlo:
-Funcion con parametro "numero"
-Variable con texto encabezado
-Bucle del 1 al 10
-Concatenar a la variable string con multiplicacion y su resultado
*/


function tablaMultiplicar(numero){
    let resultado = `#Tabla del ${numero} # \n`;

    for(let i=1;i<=10;i++){
        let multiplicacion = (i*numero);

        resultado += `${i} x ${numero} = ${multiplicacion} \n`
    }

    return resultado;
};

console.log(tablaMultiplicar(5));
