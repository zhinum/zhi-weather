export class locationFetch {
  async fetchWeather(userLocation, displayMessage) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=UG4RFWYRU892D4U4TA9NW58WR`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Invalid request error ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      displayMessage.textContent = error.message;
    }
  }
}
