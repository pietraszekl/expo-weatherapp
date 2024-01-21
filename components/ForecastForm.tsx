import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import NextDay from "./NextDay";
import { Border, Color } from "../GlobalStyles";

const ForecastForm = () => {
  return (
    <View style={styles.forecastContainer}>
      <View style={styles.forcastContainer} />
      <NextDay
        nextDayPosition="absolute"
        nextDayHeight="65.99%"
        nextDayWidth="25.3%"
        nextDayTop="26.74%"
        nextDayRight="68.9%"
        nextDayBottom="7.27%"
        nextDayLeft="5.79%"
      />
      <NextDay
        nextDayPosition="absolute"
        nextDayHeight="65.99%"
        nextDayWidth="25.3%"
        nextDayTop="26.74%"
        nextDayRight="37.8%"
        nextDayBottom="7.27%"
        nextDayLeft="36.89%"
      />
      <NextDay
        nextDayPosition="absolute"
        nextDayHeight="65.99%"
        nextDayWidth="25.3%"
        nextDayTop="26.74%"
        nextDayRight="6.4%"
        nextDayBottom="7.27%"
        nextDayLeft="68.29%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  forcastContainer: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  forecastContainer: {
    top: 360,
    left: 30,
    width: 328,
    height: 344,
    position: "absolute",
  },
});

export default ForecastForm;
