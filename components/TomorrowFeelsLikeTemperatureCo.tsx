import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const TomorrowFeelsLikeTemperatureCo = () => {
  return (
    <View style={styles.higlights}>
      <View style={styles.forcastContainer} />
      <Text style={[styles.humidityWillMake, styles.humidityWillMakeFlexBox]}>
        Humidity will make high feel like 32 C
      </Text>
      <Text style={[styles.tomorrowFeelsLike, styles.humidityWillMakeFlexBox]}>
        Tomorrow Feels Like Temperature
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  humidityWillMakeFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
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
  humidityWillMake: {
    top: "50.57%",
    left: "17.68%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.notoSansRegular,
    color: Color.colorWhite,
  },
  tomorrowFeelsLike: {
    top: 11,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.kaiseiTokuminRegular,
    color: Color.colorSkyblue,
    left: 30,
  },
  higlights: {
    top: 740,
    width: 328,
    height: 87,
    left: 30,
    position: "absolute",
  },
});

export default TomorrowFeelsLikeTemperatureCo;
