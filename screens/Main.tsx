import * as React from "react";
import { View, StyleSheet } from "react-native";

import SearchLocationTextInput from "../components/SearchLocationTextInput";
import WeatherCard, { weatherType } from "../components/WeatherCard";

import { Color } from "../GlobalStyles";
import { useState } from "react";
import { fetchWeatherData } from "../api/weather";
import { fetchGeoData } from "../api/geo";
import { fetchAirPollution } from "../api/airpolution";

const Main = () => {
  const [city, setCity] = useState("");
  const [pollution, setPollution] = useState("");
  const [weatherData, setWeatherData] = useState<weatherType | null>(null);

  const handleSearch = async (city: string) => {
    try {
      const data = await fetchWeatherData(city).then((res) => {
        setWeatherData(res);
        fetchAirPollution(res.coord.lat, res.coord.lon).then((pollutionRes) => {
          console.log("pollution", pollutionRes);
          setPollution(pollutionRes);
        });
      });
    } catch (error) {
      // Handle the error
    }
  };

  return (
    <View style={styles.main}>
      <SearchLocationTextInput
        backgroundColor="rgba(255, 255, 255, 0.1)"
        searchLocationText="Search location"
        propTop={65}
        propLeft={30}
        propFontWeight="700"
        propFontFamily="NotoSans-Bold"
        propFontSize={12}
        onSearchboxPress={(val) => {
          val.nativeEvent.text ? handleSearch(val.nativeEvent.text) : null;
        }}
      />
      <WeatherCard weatherData={weatherData} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Color.colorMidnightblue,
    flex: 1,
    width: "100%",
    height: 844
  }
});

export default Main;
