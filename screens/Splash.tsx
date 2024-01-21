import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Splash = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.splash}
      onPress={() => navigation.navigate("Search")}
    >
      <Text style={styles.weatherApp} numberOfLines={1}>
        Weather app
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  weatherApp: {
    fontSize: FontSize.size_29xl,
    fontWeight: "700",
    fontFamily: FontFamily.kaiseiTokuminBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  splash: {
    backgroundColor: Color.colorMidnightblue,
    flex: 1,
    width: "100%",
    height: 844,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Splash;
