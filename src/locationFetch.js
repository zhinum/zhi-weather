export class locationFetch {
  async fetchWeather(userLocation) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation}?key=UG4RFWYRU892D4U4TA9NW58WR`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Invalid location,
          Try again`);
    }
    return await response.json();
  }
}
