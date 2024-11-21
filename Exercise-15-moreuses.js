/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.

Enunciado
Dada una cadena de texto, devolver el caracter mas usado.

Ejemplo

masUsado("badadmina")

// Devuelve:

Lo que mas se repite es: a
*/

function masUsado(texto) {
    // Crear un objeto para contar las ocurrencias de cada carácter
    const contador = {};
    
    // Contar cada carácter en la cadena
    for (let char of texto) {
      contador[char] = (contador[char] || 0) + 1;
    }
  
    // Encontrar el carácter con el máximo número de repeticiones
    let maxChar = '';
    let maxCount = 0;
  
    for (let char in contador) {
      if (contador[char] > maxCount) {
        maxChar = char;
        maxCount = contador[char];
      }
    }
  
    return `Lo que más se repite es: ${maxChar}`;
  }
  
  console.log(masUsado("badadmina"));
  

// node Exercise-15-moreuses.js
