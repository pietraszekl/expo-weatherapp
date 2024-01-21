export const fetchGeoData = async (city: string) => {
  try {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`);
    const data = await response.json();
    console.log("GEO Data", data);
    return data;
  } catch (error) {
    console.log("ERROR", error);
    throw error;
  }
};
