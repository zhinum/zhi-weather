export class locationFetch {
  async fetchWeather(userLocation) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=UG4RFWYRU892D4U4TA9NW58WR`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`failed to load page error${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.log(error.message);
    }
  }
}
