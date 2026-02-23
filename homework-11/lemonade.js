import { Drink } from "./Drink.js";

export class Lemonade extends Drink {

  constructor(name, size, price, temperature, waterType) {
    super(name, size, price, temperature);
    this.waterType = waterType;
  }

  getRecipe() {
    console.log(`Добавить ${this.waterType} в лимонный сироп. Хорошенько перемешать.`);
  }

}