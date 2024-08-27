/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.

Enunciado 
Dados dos arrays, devolver array con solo los elementos comunes
entre ambos

Ejemplo:
elementosComunes([1,2,3,7],[2,2,7,3,4,5,2]) Devolver = ("2","3","7")
*/



function arrayDeComunes(array1,array2){

    //creamos const para evitar actualizar el contenido constantemente
    //usamos metodo filter que crea un nuevo array que contenga todos los elementos que cumplan una condicion
    //Usamos el filter, esto recorrer el elemento del primer array y con el includes comprobamso si existe. 
    //Esto devuelve true o false y el filtrado
    
    const filtrado = array1.filter(elemento =>{
        return array2.includes(elemento);
    });
    let textUnido = filtrado.join(", ");
    return textUnido;

    console.log(textUnido);


}

console.log(arrayDeComunes([1,2,3,7],[2,2,7,3,4,5,2]));
console.log(arrayDeComunes(["hola","ola","lola","cola","gey"],["zorra","hola","negro","gey"]));