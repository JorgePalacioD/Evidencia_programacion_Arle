// La Champions League es la competición de fútbol más importante en el mundo. Se juega cada año entre los
// mejores equipos de Europa y es organizada por la Unión de Asociaciones Europeas de Fútbol (UEFA). Los
// equipos compiten por la Copa de Europa y la gloria de ser el mejor equipo. Hacer un programa en JavaScript que
// cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Ingresar por el usuario el nombre del primer equipo
// b. Ingresar por el usuario el marcador del primer equipo.
// c. Ingresar por el usuario el nombre del segundo equipo
// d. Ingresar por el usuario el marcador del segundo equipo
// e. Hacer el ingreso para 3 fechas particulares de la Champions League.
// f. Mostrar Resultados de ranking de equipos.

let equipoA = 0;
let equipoB = 0;
let marcadorEquipoA = 0;
let marcadorEquipoB = 0;
let partidosJugados = 0;
let puntosEquipoA = 0;
let puntosEquipoB = 0;

function rankingEquipos() {
  while (partidosJugados < 3) {
    equipoA = prompt(`Ingrese el nombre del Equipo A`);
    marcadorEquipoA = prompt(`Ingrese marcador equipo A`);
    equipoB = prompt(`Ingrese el nombre del Equipo B`);
    marcadorEquipoB = prompt(`Ingrese marcador equipo B`);
    partidosJugados++;
    asignarPuntos();
    alert(
      `En la fecha ${partidosJugados}, ${equipoA} hizo ${marcadorEquipoA} goles y ${equipoB} hizo ${marcadorEquipoB} goles`
    );
  }
  puntajeTotal();
}

function asignarPuntos() {
  if (marcadorEquipoA > marcadorEquipoB) {
    puntosEquipoA += 3;
  } else if (marcadorEquipoA < marcadorEquipoB) {
    puntosEquipoB += 3;
  } else {
    puntosEquipoB += 0;
  }
}

function puntajeTotal() {
  if (puntosEquipoA > puntosEquipoB) {
    document.write(
      `El ganador es ${equipoA} con ${puntosEquipoA} puntos. El perdedor es ${equipoB} con ${puntosEquipoB} puntos`
    );
  } else if (puntosEquipoA < puntosEquipoB) {
    document.write(
      `El ganador es ${equipoB} con ${puntosEquipoB} puntos. El perdedor es ${equipoA} con ${puntosEquipoA} puntos`
    );
  } else {
    document.write(
      `Hay un empate ${equipoA} tiene ${puntosEquipoA} puntos y ${equipoB} tiene ${puntosEquipoB} puntos`
    );
  }
}

rankingEquipos();
