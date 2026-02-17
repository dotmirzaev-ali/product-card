import { Drink } from "./Drink.js";

export class Coffee extends Drink {

  constructor(name, size, price, temperature, espressoAmount, milkAmount, waterAmount) {
    super(name, size, price, temperature);
    this.espressoAmount = espressoAmount;
    this.milkAmount = milkAmount;
    this.waterAmount = waterAmount;
  }

  getRecipe() {
    return console.log(`Смешать эспрессо - ${this.espressoAmount}, вспененное молоко - ${this.milkAmount}, воду - ${this.waterAmount}`);
  }

}