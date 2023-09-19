class CallCenter {
  constructor() {
    this.usersServed = 0;
    this.statistics = {
      terminal: {
        total: 0,
        students: 0,
        teachers: 0,
        transfers: 0,
      },
      office: {
        total: 0,
        students: 0,
        teachers: 0,
        transfers: 0,
      },
    };
  }

  attendUser(type, segment) {
    this.usersServed++;
    this.statistics[type].total++;

    if (segment === "Estudiante") {
      this.statistics[type].students++;
    } else if (segment === "Docente") {
      this.statistics[type].teachers++;
    }
  }

  transferUser(from, to, segment) {
    this.statistics[from].transfers++;
    this.statistics[to].transfers++;

    this.attendUser(to, segment);
  }

  showStatistics() {
    console.log("Usuarios atendidos en total:", this.usersServed);
    console.log("Estadísticas por módulo de atención:");
    console.log("Terminal:", this.statistics.terminal);
    console.log("Oficina:", this.statistics.office);
  }
}

// Agregar usuarios
const callCenter = new CallCenter();

callCenter.attendUser("terminal", "Estudiante");
callCenter.attendUser("office", "Docente");
callCenter.transferUser("office", "terminal", "Estudiante");
callCenter.transferUser("terminal", "office", "Docente");
callCenter.attendUser("terminal", "Docente");
callCenter.showStatistics();
