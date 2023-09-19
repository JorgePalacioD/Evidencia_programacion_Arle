// Los sticker son etiquetas adhesivas diseñadas para ser pegadas en objetos, como lápices, libretas, cuadernos,
// pizarras, muebles, etc. Se utilizan para decorar y personalizar los productos de una manera barata y sencilla.
// Hacer un programa en JavaScript que cumpla los siguientes requisitos o características (programa básicosimulación):
// a. Se solicita al usuario el tamaño del stikers, pequeño o grande.
// • Costo pequeño es de 4000 y costo del grande 6000
// b. Se pide al usuario la cantidad de estikers teniendo en cuenta que solo se pueden enviar mínimo 10; Sino
// debe indicarse al usuario un numero correcto.
// c. El sistema debe arrojar cuanto es el costo total para pagar

let tipoSticker = 2;
let costoStickerGrande = 6000;
let costoStickerPequeño = 4000;
let cantidadSticker = 9;

function costoStickers() {
  if (cantidadSticker >= 10) {
    if (tipoSticker == 1) {
      console.log(
        `El costo total a pagar es $ ${costoStickerPequeño * cantidadSticker}`
      );
    } else if (tipoSticker == 2) {
      console.log(
        `El costo total a pagar es $ ${costoStickerGrande * cantidadSticker}`
      );
    } else {
      console.log(`Seleccione un tipo de sticker valido 1 Pequeño 2 Grande`);
    }
  } else {
    console.log(`Debe seleccionar como minimo 10 stickers`);
  }
}

costoStickers();
