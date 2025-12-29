import { productCards } from "./productCards.js";

// №3. Создать и реализовать шаблон продуктовых карточек.

const productTemplate = document.getElementById('product-template')
const productList = document.getElementById('product-list')

function displayProductCards(productCards) {
  productCards.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector('.product-img').src = `src/assets/images/${product.img}.png`
    productClone.querySelector('.product-category').textContent = product.category
    productClone.querySelector('.product-name').textContent = product.name
    productClone.querySelector('.product-description').textContent = product.description
    productClone.querySelector('.product-compound').innerHTML = product.compound.map(item =>
      `<li>${item}</li>`).join("");
    productClone.querySelector('.product-price').textContent = product.price + " \u20BD"
    productList.appendChild(productClone)
  })
};

// №4. Получить массив объектов используя reduce

const productDescription = productCards.reduce((accum, product) =>
  [...accum, {[product.name]: product.description}], [])
console.log(productDescription);

// №5. Реализовать функцию для отображения карточек

const showCards = () => {
  const question = prompt("Сколько карточек отобразить? От 1 до 5");
  const numbers = Number(question);
  if (numbers > 0 && numbers <= productCards.length) {
    displayProductCards(productCards.slice(0, numbers));
  } else {
    alert("Введите число от 1 до 5");
  }
}

showCards()