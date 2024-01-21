import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

type NextDayType = {
  /** Style props */
  nextDayPosition?: string;
  nextDayHeight?: number | string;
  nextDayWidth?: number | string;
  nextDayTop?: number | string;
  nextDayRight?: number | string;
  nextDayBottom?: number | string;
  nextDayLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NextDay = ({
  nextDayPosition,
  nextDayHeight,
  nextDayWidth,
  nextDayTop,
  nextDayRight,
  nextDayBottom,
  nextDayLeft,
}: NextDayType) => {
  const nextDayStyle = useMemo(() => {
    return {
      ...getStyleValue("position", nextDayPosition),
      ...getStyleValue("height", nextDayHeight),
      ...getStyleValue("width", nextDayWidth),
      ...getStyleValue("top", nextDayTop),
      ...getStyleValue("right", nextDayRight),
      ...getStyleValue("bottom", nextDayBottom),
      ...getStyleValue("left", nextDayLeft),
    };
  }, [
    nextDayPosition,
    nextDayHeight,
    nextDayWidth,
    nextDayTop,
    nextDayRight,
    nextDayBottom,
    nextDayLeft,
  ]);

  return (
    <View style={[styles.nextDay, nextDayStyle]}>
      <View style={styles.day1} />
      <Image
        style={styles.weathericon}
        contentFit="cover"
        source={require("../assets/weathericon.png")}
      />
      <Text style={[styles.june8, styles.cText]}>June, 8</Text>
      <Text style={[styles.text, styles.cText]}>17:00</Text>
      <Text style={[styles.c, styles.cText]}>28 C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cText: {
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  day1: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSteelblue_100,
    position: "absolute",
  },
  weathericon: {
    height: "22.69%",
    width: "72.29%",
    top: "47.58%",
    right: "14.46%",
    bottom: "29.74%",
    left: "13.25%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  june8: {
    top: "7.05%",
    left: "19.28%",
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_base,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorWhite,
  },
  text: {
    top: "81.94%",
    left: "20.48%",
    fontFamily: FontFamily.kaiseiTokuminRegular,
    fontSize: FontSize.size_base,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorWhite,
  },
  c: {
    top: "25.11%",
    left: "22.89%",
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.kaiseiTokuminExtraBold,
  },
  nextDay: {
    width: 83,
    height: 227,
  },
});

export default NextDay;
