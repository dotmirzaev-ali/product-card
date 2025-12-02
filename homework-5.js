// Задание 3.Создаю функцию и применяю интерполяцию

function takeInfo(city, temperature) {
  console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию`);
}

takeInfo('Москве', -10)

// Задание 4. Создаем функцию, проводим проверку

const SOUND_SPEED = 1225

function showSpeed() {
  if (speed > SOUND_SPEED) {
    console.log('Сверхзвуковая скорость')
  } else if (speed === SOUND_SPEED) {
    console.log('Скорость звука')
  } else {
    console.log('Дозвуковая скорость')
  }
}

showSpeed(1220);
showSpeed(1300);
// Задание 5. Создаем переменные, с помощью функции выводим сумму

const product = 'Телевизор Samsung';
const price = 40500

function makePurchase(budget) {
  if (budget >= price) {
    console.log(`${product} приобретен. Спасибо за покупку!`)
  } else {
    const missingAmount = budget - price
    console.log(`Вам не хватает ${missingAmount}, пополните баланс!`)
  }
}

makePurchase(45000)
makePurchase(10000)

// Задание 6-7. Дополнительная функция и переменные

function compareAbilities(speed) {
  if (speed >= 42) {
    console.log("Ты Усейн Болта пахан что ли?");
  } else {
    console.log("Много не бери на себя");
  }
}

compareAbilities(44);

const time = 10:34;
const yourCountry = "Тюмень"
let auto = "Porshe"