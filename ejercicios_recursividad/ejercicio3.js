class Hotel {
  constructor() {
    this.rooms = {
      single: 3,
      double: 3,
      family: 3,
    };
    this.reservations = [];
  }

  makeReservation(
    name,
    roomType,
    smoker,
    numberOfGuests,
    stayPeriod,
    bringsPet
  ) {
    if (this.rooms[roomType] > 0) {
      if (
        (roomType === "single" && numberOfGuests <= 2) ||
        (roomType === "double" && numberOfGuests <= 4) ||
        (roomType === "family" && numberOfGuests <= 6)
      ) {
        if (roomType === "family" && !bringsPet) {
          console.log(
            "Las habitaciones familiares son para huéspedes con mascotas."
          );
        } else {
          this.rooms[roomType]--;
          const reservation = {
            name,
            roomType,
            smoker,
            numberOfGuests,
            stayPeriod,
            bringsPet,
          };
          this.reservations.push(reservation);
          console.log("Reserva exitosa.");
        }
      } else {
        console.log("Número de personas excede la capacidad de la habitación.");
      }
    } else {
      console.log("No hay habitaciones disponibles de este tipo.");
    }
  }

  getStatistics() {
    const totalReservations = this.reservations.length;
    const totalOccupiedGuests = this.reservations.reduce(
      (total, reservation) => total + reservation.numberOfGuests,
      0
    );
    const totalPets = this.reservations.filter(
      (reservation) => reservation.bringsPet
    ).length;

    console.log(`Total de reservas: ${totalReservations}`);
    console.log(`Total de personas ocupadas: ${totalOccupiedGuests}`);
    console.log(`Total de mascotas: ${totalPets}`);
  }
}

// Modo de uso
const hotel = new Hotel();
hotel.makeReservation("John", "single", false, 2, "October 1st to 5th", false);
hotel.makeReservation("Mary", "double", true, 3, "October 10th to 15th", false);
hotel.makeReservation("Peter", "family", false, 5, "October 5th to 12th", true);

hotel.getStatistics();
