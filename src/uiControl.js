export class Uicontrol {
  constructor() {
    this.conditions = document.getElementById("condition");
    this.temparature = document.getElementById("temparature");
    this.displayMessage = document.getElementById("displayMessage");
    this.weatherDisplay = document.getElementById("weatherDisplay");
  }
  renderUi(weatherReport) {
    this.conditions.textContent = weatherReport.currentConditions.conditions;
    const temp = weatherReport.currentConditions.temp;
    this.temparature.textContent = `${temp}F`;

    this.displayMessage.classList.add("hidden");
    this.weatherDisplay.classList.remove("hidden");
  }
  showError(message) {
    this.displayMessage.textContent = message;

    this.displayMessage.classList.remove("hidden");
    this.weatherDisplay.classList.add("hidden");
  }
}
