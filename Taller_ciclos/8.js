// Para verificar si un triángulo es equilátero, se deben comprobar que los tres lados del triángulo tienen la misma
// longitud.
// a. Pedir al usuario los lados y determinar si es equilátero o no
let ladoA = 21;
let ladoB = 21;
let ladoC = 21;

function validacionTriangulo() {
  if (ladoA == ladoB && ladoA == ladoC) {
    console.log(`El triangulo es equilatero`);
  } else {
    console.log(`El triangulo no es equilatero`);
  }
}

validacionTriangulo();
