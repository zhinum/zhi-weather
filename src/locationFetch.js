export class locationFetch {
  constructor(location, locationBtn) {
    this.location = location;
    this.locationBtn = locationBtn;
    this.init();
  }

  init() {
    this.getLocation();
  }
  getLocation() {
    this.locationBtn.addEventListener("click", () => {
      const userLocation = this.location.value;
      this.fetchWeather(userLocation);
    });
  }

  async fetchWeather(userLocation) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=UG4RFWYRU892D4U4TA9NW58WR`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`failed to load page error${response.status}`);
      }
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
}
