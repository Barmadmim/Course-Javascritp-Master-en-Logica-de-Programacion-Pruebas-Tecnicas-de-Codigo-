// node data.js

for (let i = 0; i < 5; i++) {
  console.log(`hola ${i}`);
}

const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
  console.log(`Elemento: ${numeros[i]}`);
}
console.log(numeros.length);

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

let texto = "palabra"

let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
let contador = 0

for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i])) {
    contador++
  }
}
console.log(`El número de vocales es: ${contador}`);

for (let i = 1; i < 11; i++) {
  console.log(`5 x ${i} = ${5 * i}`)
}

texto = "hola"
let textoInvertido = ""

for (let i = texto.length - 1; i >= 0; i--) {
  textoInvertido += texto[i]
}

console.log(textoInvertido)


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
