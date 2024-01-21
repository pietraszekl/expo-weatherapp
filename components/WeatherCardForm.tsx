import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { weatherType } from "./WeatherCard";

const WeatherCardForm = (props: { weatherData: weatherType | null }) => {
  console.log("weatherData", props.weatherData);
  return (
    <View style={styles.humidityWind}>
      <View style={styles.humidity} />
      <Text style={[styles.text, styles.textTypo]}>{props.weatherData?.main.pressure}hPa</Text>
      <Text style={[styles.text1, styles.textTypo]}>{props.weatherData?.main.humidity}%</Text>
      <Text style={[styles.kmh, styles.textTypo]}>{props.weatherData?.wind.speed}km/h</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0,
      height: 1
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_sm,
    position: "absolute"
  },
  humidity: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSteelblue_200,
    position: "absolute"
  },
  text: {
    top: "22.62%",
    left: "5.9%"
  },
  text1: {
    top: "26.19%",
    left: "44.79%"
  },
  kmh: {
    top: "23.81%",
    left: "75.69%"
  },
  humidityWind: {
    top: 385,
    left: 43,
    width: 288,
    height: 42,
    position: "absolute"
  }
});

export default WeatherCardForm;
