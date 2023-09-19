// El concesionario de carros “VenXtucarro” es un lugar donde los compradores pueden comprar un carro nuevo o
// usado. Estos establecimientos generalmente están asociados con una marca de automóviles específica y tienen
// un inventario de vehículos nuevos. Hacer un programa en JavaScript que cumpla los siguientes requisitos o
// características (programa básico-simulación):
// a. El usuario debe ingresar una marca de carros entre Chevrolet-Mazda y Renault.
// b. Dependiendo de la marca, se seleccionará una de dos referencias por marca ejemplo: captiva -traker
// c. El sistema le mostrara toda la información de cada una de las referencias en particular.

let carBrand = 2; // 1. Chevrolet 2. Mazda 3. Renault
let brandReference = 2; // 1. Captiva 2. Traker

function aplyReference() {
  selectCar();
  selectReference();
  getInformacion();
}

function selectCar() {
  if (carBrand == 1) {
    carBrand = "Chevrolet";
  } else if (carBrand == 2) {
    carBrand = "Mazda";
  } else if (carBrand == 3) {
    carBrand = "Renault";
  } else {
    console.log(`seleccione un numero valido 1. Chevrolet 2. Mazda 3. Renault`);
  }
}

function selectReference() {
  if (carBrand == "Chevrolet" && brandReference == 1) {
    brandReference = "Captiva";
  } else if (carBrand == "Chevrolet" && brandReference == 2) {
    brandReference = "Tracker";
  } else if (carBrand == "Mazda" && brandReference == 1) {
    brandReference = "CX5";
  } else if (carBrand == "Mazda" && brandReference == 2) {
    brandReference = "CX9";
  } else if (carBrand == "Renault" && brandReference == 1) {
    brandReference = "Captur";
  } else if (carBrand == "Renault" && brandReference == 2) {
    brandReference = "Koleos";
  } else {
    console.log(`seleccione un numero valido 1. Modelo 1 2. Modelo 2`);
  }
}

function getInformacion() {
  switch (carBrand) {
    case "Chevrolet":
      if (carBrand == "Chevrolet" && brandReference == "Captiva") {
        console.log(
          `El vehiculo ${carBrand} ${brandReference} tiene las siguientes caracteristicas: SUV elegante, con rendimiento excepcional, comoda y espaciosa.`
        );
      } else if (carBrand == "Chevrolet" && brandReference == "Tracker") {
        console.log(
          `El vehiculo ${carBrand} ${brandReference} tiene las siguientes caracteristicas: SUV compacto, diseño aerodinámico, conectividad avanzada y tracción integral.`
        );
      }
      break;
    case "Mazda":
      if (carBrand == "Mazda" && brandReference == "CX5") {
        console.log(
          `El vehiculo ${carBrand} ${brandReference} tiene las siguientes caracteristicas: Elegancia, rendimiento ágil, tecnología SKYACTIV y seguridad avanzada.`
        );
      } else if (carBrand == "Mazda" && brandReference == "CX9") {
        console.log(
          `El vehiculo ${carBrand} ${brandReference} tiene las siguientes caracteristicas: SUV de lujo, potente motor, cabina espaciosa y características premium.`
        );
      }
      break;
    case "Renault":
      if (carBrand == "Renault" && brandReference == "Captur") {
        console.log(
          `El vehiculo ${carBrand} ${brandReference} tiene las siguientes caracteristicas: SUV urbano, estilo personalizable, tecnología inteligente y versatilidad destacada.`
        );
      } else if (carBrand == "Renault" && brandReference == "Koleos") {
        console.log(
          `El vehiculo ${carBrand} ${brandReference} tiene las siguientes caracteristicas: Elegante SUV, rendimiento eficiente, lujo interior y seguridad avanzada.`
        );
      }
      break;
    default:
      console.log(`Seleccione una marca y modelo valido.`);
      break;
  }
}

aplyReference();
