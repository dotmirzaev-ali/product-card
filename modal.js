export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay");
    this.closeBtn = this.modal.querySelector("#close-modal");

    this.closeBtn.addEventListener("click", () => {
      this.close();
    });

    this.overlay.addEventListener("click", () => {
      this.close();
    })
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("modal-showed");
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("modal-showed");
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }
}