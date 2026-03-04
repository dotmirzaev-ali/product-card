export class Modal {

  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.#initOpen();
    this.#initClose()
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.openButton = document.getElementById(buttonId);
    this.closeButton = document.getElementById("#modal-close-button");
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen() {
    this.openButton.addEventListener('click', this.open);
  }

  #initClose() {
    this.closeButton.addEventListener('click', this.close);

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.close);
    }

  }

}