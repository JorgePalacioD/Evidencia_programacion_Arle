class Product {
  constructor(
    code,
    description,
    purchasePrice,
    sellingPrice,
    stockQuantity,
    minStockQuantity,
    maxStockQuantity,
    discountPercentage
  ) {
    this.code = code;
    this.description = description;
    this.purchasePrice = purchasePrice;
    this.sellingPrice = sellingPrice;
    this.stockQuantity = stockQuantity;
    this.minStockQuantity = minStockQuantity;
    this.maxStockQuantity = maxStockQuantity;
    this.discountPercentage = discountPercentage;
  }

  requestOrder() {
    return this.stockQuantity < this.minStockQuantity;
  }

  calculateTotalToPay(quantityToPurchase) {
    return quantityToPurchase * this.purchasePrice;
  }
}

class Clothing extends Product {
  constructor(
    code,
    description,
    purchasePrice,
    sellingPrice,
    stockQuantity,
    minStockQuantity,
    maxStockQuantity,
    discountPercentage,
    size,
    allowsIroning
  ) {
    super(
      code,
      description,
      purchasePrice,
      sellingPrice,
      stockQuantity,
      minStockQuantity,
      maxStockQuantity,
      discountPercentage
    );
    this.size = size;
    this.allowsIroning = allowsIroning;
  }
}

class Footwear extends Product {
  constructor(
    code,
    description,
    purchasePrice,
    sellingPrice,
    stockQuantity,
    minStockQuantity,
    maxStockQuantity,
    discountPercentage,
    size
  ) {
    super(
      code,
      description,
      purchasePrice,
      sellingPrice,
      stockQuantity,
      minStockQuantity,
      maxStockQuantity,
      discountPercentage
    );
    this.size = size;
  }
}

// Datos de muestra para productos de prendas de vestir
const clothingProductsData = [
  {
    code: "C001",
    description: "Blue Jeans",
    purchasePrice: 25,
    sellingPrice: 50,
    stockQuantity: 100,
    minStockQuantity: 20,
    maxStockQuantity: 200,
    discountPercentage: 10,
    size: "M",
    allowsIroning: true,
  },
  {
    code: "C002",
    description: "Red T-Shirt",
    purchasePrice: 10,
    sellingPrice: 20,
    stockQuantity: 50,
    minStockQuantity: 10,
    maxStockQuantity: 100,
    discountPercentage: 5,
    size: "L",
    allowsIroning: false,
  },
];

// Datos de muestra para productos de calzado
const footwearProductsData = [
  {
    code: "F001",
    description: "Running Shoes",
    purchasePrice: 40,
    sellingPrice: 80,
    stockQuantity: 75,
    minStockQuantity: 15,
    maxStockQuantity: 150,
    discountPercentage: 15,
    size: 42,
  },
  {
    code: "F002",
    description: "Formal Shoes",
    purchasePrice: 30,
    sellingPrice: 60,
    stockQuantity: 60,
    minStockQuantity: 12,
    maxStockQuantity: 120,
    discountPercentage: 10,
    size: 40,
  },
];

// Crear instancias de productos de prendas de vestir
const clothingProducts = clothingProductsData.map(
  (data) =>
    new Clothing(
      data.code,
      data.description,
      data.purchasePrice,
      data.sellingPrice,
      data.stockQuantity,
      data.minStockQuantity,
      data.maxStockQuantity,
      data.discountPercentage,
      data.size,
      data.allowsIroning
    )
);

// Crear instancias de productos de calzado
const footwearProducts = footwearProductsData.map(
  (data) =>
    new Footwear(
      data.code,
      data.description,
      data.purchasePrice,
      data.sellingPrice,
      data.stockQuantity,
      data.minStockQuantity,
      data.maxStockQuantity,
      data.discountPercentage,
      data.size
    )
);

// Imprimir productos de prendas de vestir y calzado
console.log("Productos de prendas de vestir:");
console.log(clothingProducts);

console.log("Productos de calzado:");
console.log(footwearProducts);
