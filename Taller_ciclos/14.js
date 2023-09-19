// Escriba un programa que dado un numero de tabla de multiplicar las imprima en la consola.

function calcularTabla() {
  let numeroTabla = 12;
  let mostrar = ``;
  for (let i = 1; i <= 10; i++) {
    mostrar += `${i} x ${numeroTabla} = ${i * numeroTabla}\n`;
  }
  return mostrar;
}

console.log(calcularTabla());
