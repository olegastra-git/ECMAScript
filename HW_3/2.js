class Order {
  constructor(orderNumber) {
    this.orderNumber = orderNumber;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.products.forEach(product => {
      totalPrice += product.price;
    });
    return totalPrice;
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Output: 600