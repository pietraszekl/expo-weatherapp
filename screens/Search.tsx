import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import SearchLocationTextInput from "../components/SearchLocationTextInput";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Search = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.search}>
      <Text style={styles.weatherApp} numberOfLines={1}>
        Weather app
      </Text>
      <SearchLocationTextInput
        propTop={450}
        propLeft={27}
        propFontWeight="unset"
        propFontFamily="unset"
        onSearchboxPress={() => navigation.navigate("Main")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  weatherApp: {
    position: "absolute",
    top: 330,
    left: 52,
    fontSize: FontSize.size_29xl,
    fontWeight: "700",
    fontFamily: FontFamily.kaiseiTokuminBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  search: {
    backgroundColor: Color.colorMidnightblue,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Search;
