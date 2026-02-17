import { Cafe } from "./Cafe.js";
import { Coffee } from "./Coffee.js";
import { Juice } from "./Juice.js";
import { Limonade } from "./Limonade.js";
import { Tea } from "./Tea.js";

const jasmin = new Cafe("Jasmin", "Am Minster str. 2");
const latte = new Coffee("Латте", "300мл", "450 рублей", "50°C", "2", "1", "0");
const orangeJuice = new Juice("Апельсиновая свежесть", "250мл", "350 рублей", "5°C", "апельсины");
const pearLimonade = new Limonade("Лимонадовый крышеснос", "300мл", "500 рублей", "5°C", "минералку");
const chefirTea = new Tea("Чефир из хаты", "500мл", "1000 рублей", "90°C", "принцесса Нури", "20");


jasmin.getInfo();
jasmin.orderDrink(latte, 1);
jasmin.orderDrink(orangeJuice, 3);
jasmin.orderDrink(pearLimonade, 1);
jasmin.orderDrink(chefirTea, 2);