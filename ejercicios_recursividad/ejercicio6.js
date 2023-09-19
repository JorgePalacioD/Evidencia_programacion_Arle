class Auction {
  constructor() {
    this.products = [];
  }

  registerProduct(productId, productName, auctionDate, startingPrice) {
    const product = {
      productId,
      productName,
      auctionDate,
      startingPrice,
      bids: [],
      winner: null,
    };
    this.products.push(product);
    console.log(`Producto "${productName}" registrado para subasta.`);
  }

  placeBid(productId, bidder, bidAmount) {
    const product = this.products.find((p) => p.productId === productId);
    if (product) {
      if (bidAmount > product.startingPrice) {
        product.bids.push({ bidder, bidAmount });
        console.log(
          `Oferta de $${bidAmount} colocada por ${bidder} por el producto "${product.productName}".`
        );
      } else {
        console.log("la oferta debe ser mayor que el precio inicial.");
      }
    } else {
      console.log(`Producto con ID ${productId} no encontrado.`);
    }
  }

  selectWinner(productId) {
    const product = this.products.find((p) => p.productId === productId);
    if (product) {
      if (product.bids.length > 0) {
        const winningBid = product.bids.reduce((maxBid, bid) =>
          bid.bidAmount > maxBid.bidAmount ? bid : maxBid
        );
        product.winner = winningBid.bidder;
        console.log(
          `El ganador de la subasta por "${product.productName}" es ${product.winner} con una oferta de $${winningBid.bidAmount}.`
        );
      } else {
        console.log(`No se hicieron ofertas para "${product.productName}".`);
      }
    } else {
      console.log(`Producto con ID ${productId} no encontrado.`);
    }
  }

  listProducts() {
    console.log("Productos registrados en la subasta:");
    this.products.forEach((product) => {
      console.log(
        `- ${product.productName} (ID: ${product.productId}), Precio Inicial:  $${product.startingPrice}`
      );
    });
  }
}

const auction = new Auction();
auction.registerProduct(1, "Pintura famosa", "2023-10-15", 500);
auction.registerProduct(2, "Reloj antiguo", "2023-10-20", 300);

auction.listProducts();

auction.placeBid(1, "Bidder A", 600);
auction.placeBid(1, "Bidder B", 550);
auction.placeBid(2, "Bidder C", 400);

auction.selectWinner(1);
auction.selectWinner(2);
