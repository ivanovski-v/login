class NotificationManagerUI {
  constructor() {
    this._container = this.createNotificationsContainer();
  }

  /**
   * @param {Object} settings
   * @param {String} setting.msg
   * @param {String} setting.alertClass
   * @param {Number} setting.timeout
   */
  notify({
    msg = "Info message",
    alertClass = "alert-info",
    timeout = 3000,
  } = {}) {
    if (!this._container) {
      console.log("no container");
      this._container = this.createNotificationsContainer();
    }

    const alertIndex = this.generateAlertIndex();
    const alert = this.generateAlertTemplate(msg, alertClass, alertIndex);
    this._container.insertAdjacentHTML("afterbegin", alert);

    setTimeout(() => {
      this.removeAlertByIndex(alertIndex);
    }, timeout);
  }

  createNotificationsContainer() {
    document.body.insertAdjacentHTML(
      "afterbegin",
      this.generateNotificationContainerTemplate()
    );

    return document.querySelector(".notifications-container");
  }

  removeAlertByIndex(index) {
    this._container.removeChild(
      document.querySelector(
        `.notifications-container .alert[data-index="${index}"]`
      )
    );
  }

  generateAlertIndex() {
    return this._container.childNodes.length;
  }

  generateNotificationContainerTemplate() {
    return `<div class="notifications-container" style="position: fixed;"></div>`;
  }

  generateAlertTemplate(msg, alertClass, index) {
    return `<div class="alert ${alertClass}" data-index="${index}">${msg}</div>`;
  }
}

const notificationsManagerUI = new NotificationManagerUI();
export default notificationsManagerUI;
