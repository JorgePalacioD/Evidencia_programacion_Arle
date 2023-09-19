class Bank {
  constructor() {
    this.boxes = [
      { type: "withdrawal" },
      { type: "withdrawal" },
      { type: "cashier" },
      { type: "cashier" },
      { type: "advisory" },
    ];

    this.clients = {
      preferencial: [],
      general: [],
      sinCuenta: [],
    };
  }

  arriveClient(clientType) {
    this.clients[clientType].push({ type: clientType });
  }

  assignBox() {
    for (const box of this.boxes) {
      if (box.type === "advisory") continue;

      if (box.type === "withdrawal") {
        if (this.clients.preferencial.length > 0) {
          return { box, client: this.clients.preferencial.shift() };
        } else if (this.clients.general.length > 0) {
          return { box, client: this.clients.general.shift() };
        } else if (this.clients.sinCuenta.length > 0) {
          return { box, client: this.clients.sinCuenta.shift() };
        }
      } else if (box.type === "cashier") {
        if (this.clients.preferencial.length > 0) {
          return { box, client: this.clients.preferencial.shift() };
        } else if (this.clients.general.length > 0) {
          return { box, client: this.clients.general.shift() };
        } else if (this.clients.sinCuenta.length > 0) {
          return { box, client: this.clients.sinCuenta.shift() };
        }
      }
    }
    return null; // Todas las cajas están ocupadas
  }

  serveClients() {
    while (true) {
      const assignment = this.assignBox();
      if (!assignment) {
        console.log("Todas las cajas están ocupadas. Esperando...");
        break;
      }

      const { box, client } = assignment;
      console.log(
        `Atendiendo cliente ${client.type} en caja ${
          this.boxes.indexOf(box) + 1
        }`
      );
    }
  }
}

// Modo de uso
const bank = new Bank();

// Arrival of clients
bank.arriveClient("preferencial");
bank.arriveClient("general");
bank.arriveClient("sinCuenta");
bank.arriveClient("preferencial");
bank.arriveClient("general");
bank.arriveClient("sinCuenta");

// Serve clients
bank.serveClients();
