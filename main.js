// Покраска первой карточки

const firstProductCard = document.querySelector(".card-container");
const editFirstCardColor = document.querySelector("#edit-first-card-color");
const greenColorHash = '#006400'

editFirstCardColor.addEventListener ('click', () => {
  firstProductCard.style.backgroundColor = greenColorHash;
})

// Покраска всех карточек

const productCards = document.querySelectorAll(".card-container");
const editAllCardsColor = document.querySelector("#edit-all-cards-color");
const redColorHash = '#ff0000'

editAllCardsColor.addEventListener ('click', () => {
  productCards.forEach((card) =>card.style.backgroundColor = redColorHash)
})

// Открываем Google

const openGoogleButton = document.querySelector("#open-google");

openGoogleButton.addEventListener("click", openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if(answer === true) {
    window.open("https://google.com/");
  } else {
    return;
  }
}

// Вывод консоль лог
const outputLogButton = document.querySelector("#output-console-log");

outputLogButton.addEventListener("click", () => outputConsoleLog ('ДЗ №5'));

function outputConsoleLog(message) {
  alert(message);
  console.log(message)
}

// Слушатель события mouseover

const contentTitle = document.querySelector(".main-title");

contentTitle.addEventListener('mouseover', (event) => {
  console.log('target', event.target);
})

// Меняем цвет кнопки

const colorToggleButton = document.querySelector("#color-toggle-button");

colorToggleButton.addEventListener("click", () => {
  colorToggleButton.classList.toggle('activate-color');
})