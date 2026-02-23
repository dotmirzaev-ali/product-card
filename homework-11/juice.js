import { Drink } from "./Drink.js";

export class Juice extends Drink {

  constructor(name, size, price, temperature, fruitType) {
    super(name, size, price, temperature);
    this.fruitType = fruitType;
  }

  getRecipe() {
    console.log(`Выжать ${this.fruitType} - 3шт. в стакан, добавить лед.`);
  }

}