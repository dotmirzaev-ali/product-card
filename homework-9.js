let user;

const emailForm = document.getElementById("email-form");

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!emailForm.checkValidity()) {
    emailForm.reportValidity();
    return;
  }
  const formData = new FormData(emailForm);
  const data = Object.fromEntries(formData.entries());
  console.log({ email: data.email });

  emailForm.reset();
});

// №5. Кнопка регистрации

const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

function openModal() {
  modal.classList.add("modal-showed");
  overlay.classList.add("modal-showed");
}

function closeModal() {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("modal-showed");
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// №6. Форма регистрации

const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!registrationForm.checkValidity()) {
    registrationForm.reportValidity();
    alert("Регистрация отклонена: заполните форму корректно.");
    return;
  }

  const formData = new FormData(registrationForm);
  const formValue = Object.fromEntries(formData.entries());
  if (formValue.password !== formValue.confirmPassword) {
    alert("Регистрация отклонена: пароли не совпадают.");
    return;
  }

  user = {
    ...formValue,
    createdOn: new Date(),
  };

  console.log(user);

  registrationForm.reset();
  closeModal();
});
