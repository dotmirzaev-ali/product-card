import { Drink } from "./Drink.js";

export class Tea extends Drink {

  constructor(name, size, price, temperature, structure, amount) {
    super(name, size, price, temperature);
    this.structure = structure;
    this.amount = amount;
  }

  getRecipe() {
    return console.log(`Найти чай ${this.structure} и добавить в чайник ${this.amount} пакетиков`);
  }

}