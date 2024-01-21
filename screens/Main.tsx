import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import SearchLocationTextInput from "../components/SearchLocationTextInput";
import WeatherCard from "../components/WeatherCard";
import ForecastForm from "../components/ForecastForm";
import TomorrowFeelsLikeTemperatureCo from "../components/TomorrowFeelsLikeTemperatureCo";
import WeatherCardForm from "../components/WeatherCardForm";
import { Color } from "../GlobalStyles";

const Main = () => {
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
      />
      <WeatherCard />
      <Image
        style={styles.weatherIcon}
        contentFit="cover"
        source={require("../assets/weathericon1.png")}
      />
      <ForecastForm />
      <TomorrowFeelsLikeTemperatureCo />
      <WeatherCardForm />
    </View>
  );
};

const styles = StyleSheet.create({
  weatherIcon: {
    position: "absolute",
    top: 145,
    left: 246,
    width: 121,
    height: 104,
  },
  main: {
    backgroundColor: Color.colorMidnightblue,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default Main;
