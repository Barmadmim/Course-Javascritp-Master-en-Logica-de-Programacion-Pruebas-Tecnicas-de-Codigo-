// node data.js
/*
for (let i = 0; i < 5; i++) {
  console.log(`hola ${i}`);
}

let i = 0;
while (i < 5) {
  console.log(`Si hay un uno`);
  i++;
}

for (let i = 1; i < 21; i++) {
  console.log(i);
}

for (let i = 1; i < 101; i++) {
  console.log(i + i);
}

for (let i = 1; i < 51; i++) {
  console.log(i);
}

for (let i = 1; i < 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let nombres = ["alberto", "sobrino"]

for (let valor of nombres) {
  console.log(valor)
}


let num1 = 0;
let num2 = 1;

console.log(num1);
console.log(num2);

for (let i = 3; i <= 10; i++) {
  let siguiente = num1 + num2;
  console.log(siguiente);
  num1 = num2;
  num2 = siguiente;
}

let numero10 = [11, 1, 24, 556, 4, 9, 5]

for (let valor of numero10) {
  if (valor >= 10) {
    console.log(valor)
  }
}

function sumar(num1, num2) {
  console.log(`${num1} + ${num2} = `, num1 + num2)
}

function calcular(numero1 = 0, operador = "+", numero2 = 0) {
  switch (operador) {
    case "+":
      return numero1 + numero2;
    case "-":
      return numero1 - numero2;
    case "x":
      return numero1 * numero2;
    case "/":
      if (numero2 === 0) {
        return "Error: No se puede dividir entre 0";
      }
      return numero1 / numero2;
    case "%":
      return numero1 % numero2;
    default:
      return "Error: Operador no válido";
  }
}

console.log(calcular(10, "x", 5)); // 50
console.log(calcular(10, "/", 2)); // 5
console.log(calcular(10, "/", 0)); // Error: No se puede dividir entre 0
console.log(calcular(10, "&", 5)); // Error: Operador no válido



function encontrarMayor(array) {
  if (array.length === 0) {
    return "El array está vacío";
  }
  let mayor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  return mayor;
}
let numeros = [3, 5, 7, 2, 8, -7, 4];
console.log(`El mayor número es: ${encontrarMayor(numeros)}`);




function vocales(palabra) {
  let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
  let contador = 0;
  for (let i = 0; i < palabra.length; i++) {
    if (vocales.includes(palabra[i])) {
      contador++;
    }
  }
  return contador;
}
console.log(vocales("palabra"));


function convertirAMayusculas(arrayStrings) {
  let arrayMayusculas = [];

  for (let i = 0; i < arrayStrings.length; i++) {
      arrayMayusculas.push(arrayStrings[i].toUpperCase());
  }

  return arrayMayusculas;
}

let palabras = ["hola", "mundo", "javascript"];
let resultado = convertirAMayusculas(palabras);
console.log(resultado);


function primo(numero)
{
  let resultado = false;
  if (numero % 2 !== 0)
  {
    resultado = true;
  } else
  {
    resultado = false;
  }
  return resultado;
}

console.log(primo(1));
console.log(primo(2));
*/

function elementosComunes(array1, array2) {
  let comunes = [];

  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      comunes.push(array1[i]);
    }
  }

  return comunes;
}

// Ejemplo de uso
let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];
let resultado = elementosComunes(array1, array2);
console.log(resultado);


class Animal {
  #name
  #id
  constructor(name = "Dog", strong = 5, heart = 10, id = "") {
    this.#name = name
    this.strong = strong
    this.heart = heart
    this.#id = id
  }
  walk() {
    console.log("Caminando...")
  }
  sleep() {
    console.log("Durmiendo...")
  }
  hunter() {
    console.log("Cazando...")
  }
  get name() {
    return this.#name
  }
  get id() {
    return this.#id
  }
  set id(id) {
    this.#id = id
  }
}

let Perro = new Animal()
console.log(Perro)
console.log(Perro.name)
Perro.walk()

let Gato = new Animal("Cat", 2, 8)
console.log(Gato)
console.log(Gato.name)

Gato.id = "14567573545456"
console.log(Gato.id)

Gato.sleep()

class Dog extends Animal {

  walk() {
      console.log("Guau!")
  }

  run() {
      console.log("El perro corre")
  }

}

let myDog = new Dog("MoureDog")
myDog.run()
myDog.walk()

class sumar {
    static sum(a, b) {
      return a + b
    }
}

console.log(sumar.sum(5, 10))

try {
  console.log(myObject.email)
} catch (error) {
  console.log("Se ha producido un error:", error.message)
}