// Una pizzería “Italiana pizza” es un establecimiento que ofrece comida preparada principalmente a base de pizza,
// sándwiches y ensaladas. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características
// (programa básico-simulación):
// a. se muestra al usuario un menú de opciones así: 1. Pizza 2. Sándwiches 3 ensaladas
// b. Dependiendo de la opción seleccionada (producto escogido) se pide la cantidad de porciones.
// • Pizza a 7000 por unidad
// • Sándwich a 5000 unidad
// • Ensalada a 15000 unidad
// c. Se le pide al usuario si desea agregar salsa que vale 3000.
// d. El sistema indica el costo que paga el cliente por su producto

let menu = 2; //1 Pizza 🍕 2 Sandwich 🥪 3 Ensalada 🥗
let precioPizza = 7000;
let precioSandwich = 5000;
let precioEnsalada = 15000;
let cantidadPorciones = 10;
let agregarSalsa = true;
let salsa = 3000;

function costoTotal() {
  switch (menu) {
    case 1:
      if (menu == 1 && agregarSalsa == true) {
        console.log(
          `El costo total que debe cancelar es $ ${
            precioPizza * cantidadPorciones + salsa
          }`
        );
      } else if (menu == 1 && agregarSalsa == false) {
        console.log(
          `El costo total que debe cancelar es $ ${
            precioPizza * cantidadPorciones
          }`
        );
      }
      break;
    case 2:
      if (menu == 2 && agregarSalsa == true) {
        console.log(
          `El costo total que debe cancelar es $ ${
            precioSandwich * cantidadPorciones + salsa
          }`
        );
      } else if (menu == 2 && agregarSalsa == false) {
        console.log(
          `El costo total que debe cancelar es $ ${
            precioSandwich * cantidadPorciones
          }`
        );
      }
      break;
    case 3:
      if (menu == 3 && agregarSalsa == true) {
        console.log(
          `El costo total que debe cancelar es $ ${
            precioEnsalada * cantidadPorciones + salsa
          }`
        );
      } else if (menu == 3 && agregarSalsa == false) {
        console.log(
          `El costo total que debe cancelar es $ ${
            precioEnsalada * cantidadPorciones
          }`
        );
      }
    default:
      console.log(
        `Seleccione un valor de menu valido 1 Pizza 🍕 2 Sandwich 🥪 3 Ensalada 🥗`
      );
      break;
  }
}

costoTotal();
