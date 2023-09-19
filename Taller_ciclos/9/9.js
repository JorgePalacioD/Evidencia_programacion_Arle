// Un sistema de voto electrónico es una aplicación informática diseñada para permitir a los votantes emitir sus
// votos de forma electrónica. Hacer un programa en JavaScript que cumpla los siguientes requisitos o
// características (programa básico-simulación):
// a. La cantidad de votantes son 10 personas
// b. Hay dos opciones de votos: 1. Ana Maria Suarez 2. Diego Acero
// c. El sistema debe ir sumando los votos de cada candidato.
// d. El sistema debe arrojar el ganador y perdedor de la votación

let voto = 0; //1. Ana Maria Suarez 2. Diego Acero
let totalVotos = 0;
let sumaVotos1 = 0;
let sumaVotos2 = 0;

function sumaVotos() {
  while (totalVotos < 10) {
    voto = prompt(`Selecione 1. Ana Maria Suarez 2. Diego Acero`);
    if (voto == 1) {
      totalVotos += 1;
      sumaVotos1 += 1;
    } else if (voto == 2) {
      totalVotos += 1;
      sumaVotos2 += 1;
    } else {
      alert(`Seleccione un voto valido 1. Ana Maria Suarez 2. Diego Acero`);
    }
  }
  ValidarGanador();
}

function ValidarGanador() {
  if (sumaVotos1 > sumaVotos2) {
    document.write(
      `El ganador es Ana Maria Suarez con ${sumaVotos1} votos. El perdedor es Diego Acero con ${sumaVotos2} votos.`
    );
  } else if (sumaVotos1 < sumaVotos2) {
    document.write(
      `El ganador es Diego Acero con ${sumaVotos2} votos. El perdedor es Ana Maria Suarez con ${sumaVotos1} votos.`
    );
  } else {
    document.write(`Es un empate`);
  }
}

sumaVotos();
