import { comments } from "./comments.js";

// Задание №2. Создать массив чисел

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.filter(num => num >= 5);

console.log(newNumbers);

// Задание №3. Создать массив и найти что-то определенное в нем

const movies = ["Властелин колец", "Гарри Поттер", "Трактор пашет океан"];

const checkWord = movies.includes('колец');

console.log(checkWord);

// №4. Перевернуть содержимое массивов

const reverseArrays = array => array.reverse();

console.log(reverseArrays(numbers));
console.log(reverseArrays(movies));

// №7. Выводим пользователей с почтой .com

const commentsWithCom = comments.filter(comment => comment.email.includes('.com'));

console.log(commentsWithCom);

// №8. Перебрать и удорядочить id пользователей

const changedData = comments.map(comment => ({ ...comment, postId: comment.id <= 5 ? 2 : 1}));

console.log(changedData);

// №9. Перебрать массив, чтоб он состоял из id и name

const formattedComments = comments.map(comment => ({
  id: comment.id,
  name: comment.name,
}));

console.log(formattedComments);

// №10. Добавить новое свойство и проверить

const inspectedComments = comments.map(comment => ({ ...comment, isInvalid: comment.body.length > 180}))

console.log(inspectedComments);

// №11. Вывести массив почт через reduce и map

const reducedEmails = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(reducedEmails);

const emailsList = comments.map(comment => comment.email);

console.log(emailsList);

// №12. Перебрать массив через методы toString(), join()

const emailsString = emailsList.toString();

console.log(emailsString);

const emailsJoined = emailsList.join(" | ");

console.log(emailsJoined);

