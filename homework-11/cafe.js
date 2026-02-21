export class Cafe {

  constructor(cafeName, location) {
    this.cafeName = cafeName;
    this.location = location;
  }

  getInfo() {
    console.log(`${this.cafeName} находится на ${this.location}`)
  }

  orderDrink(drink, quantity) {
    console.log(`Заказ:${drink.name} - ${quantity}шт.`);
    drink.serve();
  }

}