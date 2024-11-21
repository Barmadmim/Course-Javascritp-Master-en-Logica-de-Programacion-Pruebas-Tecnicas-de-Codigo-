/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.

Enunciado 
Dados un texto y una busqueda, censurar todas Las coincidencias de la busqueda en el texto con [-CENSURADO-].

Ejemplo:

censurado("hola hola", "hola") //Devuelve: [-CENSURADO-] [-CENSURADO-]

censurado() // Devuelve: "No puedes leer el texto y La busqueda"

*/

function censurado(texto=false, busqueda=false){
    
    let resultado = "";

    if(!texto && !busqueda){
        resultado = "No puedes leer el texto y la busqueda";
    }else if(!texto && busqueda){
        resultado = "No puedes leer el texto";
    }else if(texto && !busqueda){
        resultado = "No puedes hacer la busqueda";
    }else if(texto && busqueda){
        resultado = texto.replace(new RegExp(busqueda, "gi"), "[-CENSURADO-]");
    }

    return resultado;
}

console.log(censurado("hola te hola", "hola"));

// node Exercise-11-search.js