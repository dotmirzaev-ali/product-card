// Задание 3.Создаю функцию и применяю интерполяцию

function cityWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию`);
}

cityWeather('Москве', -10)

// Задание 4. Создаем функцию, проводим проверку

const SOUND_SPEED = 1225
const speed = 1220

function getSpeed() {
  if (speed > SOUND_SPEED) {
    console.log('Сверхзвуковая скорость')
  } else if (speed === SOUND_SPEED) {
    console.log('Скорость звука')
  } else {
    console.log('Дозвуковая скорость')
  }
}

getSpeed()

// Задание 5. Создаем переменные, с помощью функции выводим сумму

const product = 'Телевизор Samsung';
const price = 40500

function conclusion(budget) {
  const billing = budget - price
  if (budget >= price) {
    console.log(`${product} приобретен. Спасибо за покупку!`)
  } else {
    console.log(`Вам не хватает ${billing}, пополните баланс!`)
  }
}

conclusion(45000)
conclusion(10000)

// Задание 6-7. Дополнительная функция и переменные

function yourAbilities(speed) {
  if (speed >= 42) {
    console.log("Ты Усейн Болта пахан что ли?");
  } else {
    console.log("Много не бери на себя");
  }
}

yourAbilities(44);

const time = 10:34;
const yourCountry = "Тюмень"
let auto = "Porshe"