import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const WeatherCard = () => {
  return (
    <View style={styles.todayWeather}>
      <Text style={styles.currentTemprature}>27</Text>
      <Text style={[styles.weatherDescription, styles.locationTypo]}>
        Partially cloud
      </Text>
      <Text style={[styles.location, styles.locationTypo]}>Nieborowice</Text>
      <Text style={[styles.feelsLike, styles.locationTypo]}>
        31/24 feels like 31
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  locationTypo: {
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_base,
    left: "4.26%",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  currentTemprature: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_77xl,
    fontFamily: FontFamily.kaiseiTokuminRegular,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  weatherDescription: {
    top: "61.95%",
  },
  location: {
    top: "75.61%",
  },
  feelsLike: {
    top: "89.27%",
  },
  todayWeather: {
    top: 127,
    left: 37,
    width: 141,
    height: 205,
    position: "absolute",
  },
});

export default WeatherCard;
