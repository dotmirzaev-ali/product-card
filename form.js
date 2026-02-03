
export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getValues() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  isValid() {
    return this.form.checkValidity();
  }

  showValidity() {
    this.form.reportValidity();
  }

  reset() {
    this.form.reset();
  }

  onSubmit(callback) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      callback(event);
    });
  }
}
