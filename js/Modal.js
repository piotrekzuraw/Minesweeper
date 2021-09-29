import { UI } from "./UI.js";

export class Modal extends UI {
  buttonText = "";
  infoText = "";
  element = this.getElement(this.UiSelectors.modal);
  modalButton = this.getElement(this.UiSelectors.modalButton);
  modalHeader = this.getElement(this.UiSelectors.modalHeader);

  toggleModal = () => {
    this.element.classList.toggle("hide");
  };
  setText() {
    this.modalButton.textContent = this.buttonText;
    this.modalHeader.textContent = this.infoText;
  }
}
