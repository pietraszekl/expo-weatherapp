import React, { useMemo } from "react";
import { TextInput, StyleSheet } from "react-native";
import { FontFamily, FontSize } from "../GlobalStyles";

type SearchLocationTextInputType = {
  backgroundColor?: string;
  searchLocationText?: string;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
  propFontWeight?: string;
  propFontFamily?: string;
  propFontSize?: number | string;

  /** Action props */
  onSearchboxPress?: (val: any) => any;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SearchLocationTextInput = ({
  backgroundColor,
  searchLocationText,
  propTop,
  propLeft,
  propFontWeight,
  propFontFamily,
  propFontSize,
  onSearchboxPress
}: SearchLocationTextInputType) => {
  const searchboxStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("fontWeight", propFontWeight),
      ...getStyleValue("fontFamily", propFontFamily),
      ...getStyleValue("fontSize", propFontSize)
    };
  }, [propTop, propLeft, propFontWeight, propFontFamily, propFontSize]);

  return (
    <TextInput
      style={[styles.searchbox, searchboxStyle]}
      placeholder={searchLocationText}
      placeholderTextColor={backgroundColor}
      onSubmitEditing={onSearchboxPress}
    />
  );
};

const styles = StyleSheet.create({
  searchbox: {
    position: "absolute",
    top: 65,
    left: 30,
    width: 328,
    height: 44,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansBold,
    fontSize: FontSize.size_xs,
    backgroundColor: "#0B103B",
    color: "white"
  }
});

export default SearchLocationTextInput;
