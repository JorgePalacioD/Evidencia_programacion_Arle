// “Lavan Ya” es un servicio de limpieza en el que los clientes envían sus prendas para que se laven y se planchen
// en un lugar determinado. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características
// (programa básico-simulación):
// a. El cliente escoge entre dos servicios: lavado o planchado.
// b. Si es lavado, se solicita el tipo de lavado 1. En seco o 2. Normal
// c. Se solicita la cantidad de prendas.
// d. Se calcula el costo de los servicios teniendo en cuenta la lista de precios:
// • Lavado en seco: 2000 por prenda
// • Lavado normal: 1500 por prenda
// • Planchado: 1800 por prenda
// e. Adicional se cobra un domicilio de 3000 solo si es planchado; para otros servicios es gratis.
let lavado = 1;
let lavadoSeco = 2000;
let lavadoNormal = 1500;
let planchado = 1800;
let domicilio = 3000;
let numeroPrendas = 5;
let servicioLavado = 3; // 1 lavado 2 Planchado y 3 lavado y planchado

function servicioLavanderia() {
  switch (servicioLavado) {
    case 1:
      if (lavado == 1) {
        console.log(`El costo del servicio es $ ${numeroPrendas * lavadoSeco}`);
      } else if (lavado == 2) {
        console.log(
          `El costo del servicio es $ ${numeroPrendas * lavadoNormal}`
        );
      } else {
        console.log(
          `Seleccione un valor valido 1 Lavado en seco 2 Lavado normal`
        );
      }
      break;
    case 2:
      console.log(
        `El costo del servicio es $ ${numeroPrendas * planchado + domicilio}`
      );
      break;
    case 3:
      if (lavado == 1) {
        console.log(
          `El costo del servicio es $ ${
            numeroPrendas * lavadoSeco + numeroPrendas * planchado + domicilio
          }`
        );
      } else if (lavado == 2) {
        console.log(
          `El costo del servicio es $ ${
            numeroPrendas * lavadoNormal + numeroPrendas * planchado + domicilio
          }`
        );
      } else {
        console.log(
          `Seleccione un valor valido 1 Lavado en seco 2 Lavado normal`
        );
      }
    default:
      console.log(
        `Seleccione un valor valido para el servicio 1 lavado 2 Planchado y 3 lavado y planchado`
      );
      break;
  }
}

servicioLavanderia();
