// Задание №3, создаю пользователя

const user = {
  name: "Ali",
  surname: "Dotmirzaev",
  email: "dotmirzaev@gmail.com",
  job: "Amazon",
  age: 32,
  country: "Germany",
  city: "Kulmbach",
  maritalStatus: true,
}

console.log(user);

// Задание  №4, создаю авто

const auto = {
  brand: "BMW",
  model: "X7",
  release: 2025,
  color: "Dark Green",
  transmission: "automatic",
}

auto.owner = user;

console.log(auto);

// Задание №5, проверяем есть ли новое свойство в объекте, если нет, то добавляем

function checkMaxSpeed(auto) {
  if (!auto.maxSpeed) {
    auto.maxSpeed = 300;
  }
}

checkMaxSpeed(auto);

// Хадание №6, пишем функцию, которая выводит объект и свойство объекта

function getObjValue(object, key) {
  if (key in object) {
    console.log(object[key]);
  }
}

getObjValue(auto, "model");

// Задание №7, создаю массив из продуктовё

const products = ["bread", "butter", "milk", "meat"]

// Задание №8, создаем массив, состоящий из объектов и добавляем еще один объект

const movies = [
  {
    name: "Home alone",
    country: "USA",
    year: 1990,
    director: "Chris Columbus",
    genre: "comedy"
  },
  {
    name: "The Mask",
    country: "USA",
    year: 1994,
    director: "Chuck Russell",
    genre: "comedy"
  },
  {
    name: "Intouchables",
    country: "France",
    year: 2011,
    director: "Olivier Nakache",
    genre: "comedy"
  }
];
movies.push(
  {
    name: "Il bisbetico domato",
    country: "Italy",
    year: 1980,
    director: "Giuseppe Moccia",
    genre: "comedy",
  },
);

console.log(movies);

// Задание №9, создаем массив, состоящий из определенных объектов и объединяем с предыдущим заданием

const fantasyMovies = [
  {
    name: "The Dark Knight",
    country: "USA",
    year: 2008,
    director: "Christopher Nolan",
    genre: "fantasy"
  },
  {
    name: "The Fifth Element",
    country: "France",
    year: 1997,
    director: "Luc Besson",
    genre: "fantasy"
  },
  {
    name: "Bicentennial Man",
    country: "Germany",
    year: 1990,
    director: "Chris Columbus",
    genre: "fantasy"
  }
];
const allMovies = movies.concat(fantasyMovies);
console.log(allMovies);

// Задание №10, добавляем метод массива map

function rareMovie(movie) {
  return movie.map(movie => ({
    ...movie,
    isRare: movie.year > 2000
  }))
}
const result = rareMovie(movies);
console.log(result);