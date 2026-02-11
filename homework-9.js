import { Modal } from "./modal.js"
import { Form } from "./form.js"

let user;

const emailForm = new Form("email-form");

emailForm.onSubmit(() => {
  if (!emailForm.isValid()) {
    emailForm.showValidity();
    return;
  }

  const data = emailForm.getValues();
  console.log({ email: data.email });

  emailForm.reset();
})

const modal = new Modal("modal");

const openModalBtn = document.getElementById("open-modal");
openModalBtn.addEventListener("click", () => {
  modal.open();
})

const registrationForm = new Form("registration-form");

registrationForm.onSubmit(() => {
  if (!registrationForm.isValid()) {
    registrationForm.showValidity();
    alert("Регистрация отклонена: заполните форму корректно.");
    return;
  }

  const formValues = registrationForm.getValues();

  if (formValue.password !== formValue.confirmPassword) {
    alert("Регистрация отклонена: пароли не совпадают.");
    return;
  }

  user = {
    ...formValues,
    createdOn: new Date(),
  };

  console.log(user);

  registrationForm.reset();
  modal.close();
});