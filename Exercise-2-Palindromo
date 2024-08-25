//Dada una cadena de texto, comprobar si es un palindromo o no. 
//Los palíndromos son palabras que se leen igual aún estando invertidos. 
/*Como hacerlo:
-Función con parámetro "texto"
-Separar el texto en un array de letras
-Darle la vuelta
-Unir el array de letras en un string y comparar con el parámetro

*/
function Polindromo(texto){
    //hacemos un array
    let arrayTexto = texto.split('');
    //le damos la vuelta al array
    let arrayTextoDadaVuelta = arrayTexto.reverse();
    //unimos el array
    let nombreFinal = arrayTextoDadaVuelta.join('');

    //comparamos
    if (nombreFinal === texto) {
        resultado = true
    }else{
        resultado = false
    }

    return resultado;

}

console.log(Polindromo("ana"));

/*Otra forma de hacerlo más fácil*/

function Polindromo(texto){
    //hacemos un array
    let arrayTexto = texto.split('');
    //le damos la vuelta al array
    let arrayTextoDadaVuelta = arrayTexto.reverse();
    //unimos el array
    let nombreFinal = arrayTextoDadaVuelta.join('');

    //comparamos

    return nombreFinal === texto;

}

console.log(Polindromo("pedro"));
