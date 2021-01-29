import "bootstrap/dist/css/bootstrap.css";
import "../css/style.css";
import loginFormUI from "./views/loginForm.js";
import { validate } from "./helpers/validate.js";
import { login } from "./services/auth.service.js";
import notificationsManagerUI from "./views/notificationsManager.js";

/// Controls
const inputElements = [loginFormUI.email, loginFormUI.password];

/// Events
loginFormUI.form.addEventListener("submit", (e) => {
  e.preventDefault();
  onSubmit();
});

inputElements.forEach((element) =>
  element.addEventListener("focus", () => loginFormUI.removeInputError(element))
);

/// Handlers
async function onSubmit() {
  const isValidForm = inputElements.every((element) => {
    const isInputValid = validate(element);

    if (!isInputValid) {
      loginFormUI.showInputError(element);
    }

    return isInputValid;
  });

  if (!isValidForm) return;

  try {
    await login(loginFormUI.email.value, loginFormUI.password.value);
    loginFormUI.form.reset();

    notificationsManagerUI.notify({
      msg: "Success",
      alertClass: "alert-success",
      timeout: 3000,
    });
  } catch {
    notificationsManagerUI.notify({
      msg: "Failed login",
      alertClass: "alert-danger",
      timeout: 3000,
    });
  }
}
