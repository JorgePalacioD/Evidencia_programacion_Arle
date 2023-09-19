// Un examen de conocimientos es una prueba diseñada para evaluar el conocimiento y comprensión de un tema
// o disciplina específica. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características
// (programa básico-simulación):
// a. Se debe presentar 5 preguntas (sea de selección múltiple o verdadero-falso.
// b. Cada pregunta debe ser evaluada si fue correcta o no su respuesta.
// c. Si la opción es correcta se suma 10 puntos por cada pregunta.
// d. Se debe mostrar los resultados del examen.

let pregunta1 = 0;
let pregunta2 = 0;
let pregunta3 = 0;
let pregunta4 = 0;
let pregunta5 = 0;
let sumaPuntos = 0;

function calificarExamen() {
  while (true) {
    pregunta1 = prompt(`Bogota es la capital de Quindio. 1 Verdadero 2 Falso`);
    if (pregunta1 == 2) {
      sumaPuntos += 10;
      break;
    } else if (pregunta1 == 1) {
      sumaPuntos += 0;
      break;
    } else {
      alert(`Seleccione un valor valido 1 Verdadero 2 Falso`);
    }
  }
  while (true) {
    pregunta2 = prompt(`Armenia es la capital de Quindio. 1 Verdadero 2 Falso`);
    if (pregunta2 == 1) {
      sumaPuntos += 10;
      break;
    } else if (pregunta2 == 2) {
      sumaPuntos += 0;
      break;
    } else {
      alert(`Seleccione un valor valido 1 Verdadero 2 Falso`);
    }
  }
  while (true) {
    pregunta3 = prompt(`Ibague es la capital de Tolima. 1 Verdadero 2 Falso`);
    if (pregunta3 == 1) {
      sumaPuntos += 10;
      break;
    } else if (pregunta3 == 2) {
      sumaPuntos += 0;
      break;
    } else {
      alert(`Seleccione un valor valido 1 Verdadero 2 Falso`);
    }
  }
  while (true) {
    pregunta4 = prompt(`Pereira es la capital de Tolima. 1 Verdadero 2 Falso`);
    if (pregunta4 == 2) {
      sumaPuntos += 10;
      break;
    } else if (pregunta4 == 1) {
      sumaPuntos += 0;
      break;
    } else {
      alert(`Seleccione un valor valido 1 Verdadero 2 Falso`);
    }
  }
  while (true) {
    pregunta5 = prompt(`Cali es la capital de Cauca. 1 Verdadero 2 Falso`);
    if (pregunta5 == 2) {
      sumaPuntos += 10;
      break;
    } else if (pregunta5 == 1) {
      sumaPuntos += 0;
      break;
    } else {
      alert(`Seleccione un valor valido 1 Verdadero 2 Falso`);
    }
  }
  document.write(`El resultado del examen es ${sumaPuntos} puntos`);
}

calificarExamen();
