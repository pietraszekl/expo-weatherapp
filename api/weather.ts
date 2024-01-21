export const fetchWeatherData = async (city: string) => {
  try {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("ERROR", error);
    throw error;
  }
};
