// La biblioteca municipal de Armenia, necesita un sistema de Gestión de multas. Hacer un programa en JavaScript
// que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Se pregunta al usuario si es devolución o perdida.
// b. Se le pide al usuario de la biblioteca que indique la cantidad de días de retraso.
// c. La cantidad de libros prestados o revistas
// • Revistas 500 pesos día.
// • Libro 600 pesos día.
// d. Si es perdida, debe de pagar 10000 por ejemplar

let tipoDevulocion = 6; //1 Devolucion 2 Perdida
let tipoArchivo = 1; //1 Libro 2 Revista
let cantidadArchivos = 3;
let diasRetraso = 3;
let costoRetrasoRevista = 500;
let costoRetrasoLibro = 600;
let costoPerdida = 10000;

function costoMulta() {
  switch (tipoDevulocion) {
    case 1:
      if (tipoDevulocion == 1 && tipoArchivo == 1) {
        console.log(
          `Tiene una multa de $ ${
            costoRetrasoLibro * cantidadArchivos * diasRetraso
          }`
        );
      } else if (tipoDevulocion == 1 && tipoArchivo == 2) {
        console.log(
          `Tiene una multa de $ ${
            costoRetrasoRevista * cantidadArchivos * diasRetraso
          }`
        );
      }
      break;
    case 2:
      if (tipoDevulocion == 2) {
        console.log(`Tiene una multa de $ ${costoPerdida * cantidadArchivos}`);
      }
      break;
    default:
      console.log(
        `Seleccione un tipo de devolucion correcto 1 Devolucion 2 Perdida y un tipo de archivo correcto 1 Libro 2 Revista`
      );
      break;
  }
}

costoMulta();
