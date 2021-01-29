class LoginFormUI {
  constructor() {
    this._form = document.forms["loginForm"];
    this.email = document.getElementById("email");
    this.password = document.getElementById("password");
  }

  get form() {
    return this._form;
  }

  /**
   *
   * @param {HTMLInputElement} element
   */
  showInputError(element) {
    element.parentElement.insertAdjacentHTML(
      "beforeend",
      this.generateErrorMessageTemplate(
        element.dataset.invalidMessage || "Invalid input!"
      )
    );

    element.classList.add("is-invalid");
  }

  removeInputError(element) {
    const parent = element.parentElement;
    const error = parent.querySelector(".invalid-feedback");

    if (!error) return;
    element.classList.remove("is-invalid");
    parent.removeChild(error);
  }

  generateErrorMessageTemplate(message) {
    return `<div class="invalid-feedback">${message}</div>`;
  }
}

const loginFormUI = new LoginFormUI();
export default loginFormUI;
