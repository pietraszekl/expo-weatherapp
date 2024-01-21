export const fetchAirPollution = async (lat: string, lon: string) => {
  try {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    // const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`);

    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("ERROR", error);
    throw error;
  }
};
