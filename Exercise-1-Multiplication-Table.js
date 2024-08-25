
/*
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
