const userTemplate = document.getElementById("user-template");
const userList = document.getElementById("user-list");
const loadingText = document.getElementById("loading-text");

let users = [];

function loadUsers() {
  const savedUsers = localStorage.getItem("users");

  if (!savedUsers) {
    void fetchData();
  } else {
    users = JSON.parse(savedUsers);
    loadingText.innerText = '';
    renderUsers(users);
  }
}

loadUsers();

async function fetchData() {
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });

    const response = await fetch("./users.json");

    if (!response.ok) {
      throw new Error("Не удалось загрузить данные пользователей");
    }

    const data = await response.json();
    users = data.users;

    localStorage.setItem("users", JSON.stringify(users));
    loadingText.innerText = "";
    renderUsers(users);
  } catch (error) {
    console.log(error);
    loadingText.innerText = 'Ошибка при загрузке данных';
  }
}

function renderUsers(usersToRender) {
  userList.innerHTML = "";

  usersToRender.forEach((user) => {
    const userClone = userTemplate.content.cloneNode(true);

    userClone.querySelector(".user-photo").src = `./photos/${user.img}.jpg`;
    userClone.querySelector(".user-id").textContent = `ID: ${user.id}`;
    userClone.querySelector(".user-name").textContent = user.name;
    userClone.querySelector(".user-surname").textContent = user.surname;
    userClone.querySelector(".user-age").textContent = `Возраст: ${user.age}`;
    userClone.querySelector(".user-email").textContent = `Почта: ${user.email}`;
    userClone.querySelector(".user-location").textContent = `Место рождения: ${user.location}`;

    const deleteButton = userClone.querySelector(".delete-button");
    deleteButton.id = `delete-user-card-button-${user.id}`;
    deleteButton.onclick = () => deleteUser(user.id);

    userList.appendChild(userClone);
  });
}

function deleteUser(id) {
  const updatedUsers = users.filter((user) => user.id !== id);

  if (updatedUsers.length === users.length) {
    alert("Пользователь с таким id не найден");
    return;
  }

  users = updatedUsers;
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers(users);
}

const deleteAllButton = document.getElementById('.clear-all-button');
deleteAllButton.addEventListener('click', deleteAll);

function deleteAll() {
  users = [];
  localStorage.removeItem("users");
  renderUsers(users);
}

const addAllButton = document.getElementById("restore-all-button");
addAllButton.addEventListener('click', getAllUsers);

function getAllUsers() {
  const savedUsers = localStorage.getItem("users");

  if (users.length === 0 && !savedUsers) {
    void fetchData();
    return;
  }

  if (users.length === 0 && savedUsers !== null) {
    users = JSON.parse(savedUsers);
    renderUsers(users);
    return;
  }

  alert("Все пользователи уже отображены");

}