// hacer en JavaScript el sistema de administración de pago para una pesa electrónica.
// a. El usuario solo puede ingresar monedas o billetes
// • Si es moneda, aceptar monedas de 500, 1000 solamente.
// • Si es billete, de 2000 y 5000.
// b. El servicio vale 500 pesos, el sistema debe indicar si falta dinero, si no tiene que devolver o el valor de la
// devolución.
// c. ¡Mostrar un mensaje “vuelve pronto!”
let tipoPago = 2; //1 Moneda 2 Billete
let moneda = 1000;
let billete = 5000;
let valorServicio = 500;

function cobrarServicio() {
  switch (tipoPago) {
    case 1:
      if (moneda == 500) {
        console.log(`No tiene devuelta. Vuelve pronto!`);
      } else if (moneda == 1000) {
        console.log(
          `Su devuelta es $ ${moneda - valorServicio}. Vuelve pronto!`
        );
      } else {
        console.log(`Ingrese solo monedas de $500 o $1000`);
      }
      break;
    case 2:
      if (billete == 2000) {
        console.log(
          `Su devuelta es $ ${billete - valorServicio}. Vuelve pronto!`
        );
      } else if (billete == 5000) {
        console.log(
          `Tu devuelta es $ ${billete - valorServicio}. Vuelve pronto!`
        );
      } else {
        console.log(`Ingrese solo billetes de $2000 o $5000`);
      }
      break;
  }
}

cobrarServicio();
