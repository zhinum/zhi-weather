export class Uicontrol {
  constructor() {
    this.conditions = document.getElementById("condition");
    this.temparature = document.getElementById("temparature");
  }
  renderUi(weatherReport) {
    this.conditions.textContent = weatherReport.currentConditions.conditions;
    const temp = weatherReport.currentConditions.temp;
    this.temparature.textContent = `${temp}F`;
  }
}
