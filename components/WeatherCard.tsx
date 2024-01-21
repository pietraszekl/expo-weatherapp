import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import { Image } from "expo-image";
import ForecastForm from "../components/ForecastForm";
import TomorrowFeelsLikeTemperatureCo from "../components/TomorrowFeelsLikeTemperatureCo";
import WeatherCardForm from "../components/WeatherCardForm";

export type weatherType = {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    feels_like: number;
    temp_min: number;
    humidity: number;
    pressure: number;
  };
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    }
  ];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
};

const WeatherCard = (props: { weatherData: weatherType | null }) => {
  const data = props.weatherData;
  if (data) {
    return (
      <View style={styles.todayWeather}>
        <Text style={styles.currentTemprature}>{Math.floor(data.main.temp)}</Text>
        <Text style={[styles.weatherDescription, styles.locationTypo]}>{data.weather[0].description}</Text>
        <Text style={[styles.location, styles.locationTypo]}>{data.name}</Text>
        <Text style={[styles.feelsLike, styles.locationTypo]}>
          {Math.floor(data.main.temp_max)} / {Math.floor(data.main.temp_min)} feels like{" "}
          {Math.floor(data.main.feels_like)}
        </Text>

        <Image
          style={styles.weatherIcon}
          contentFit="cover"
          source={{ uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` }}
        />
        <ForecastForm weatherData={data} />

        <WeatherCardForm weatherData={data} />
      </View>
    );
  } else {
    return (
      <>
        <View style={styles.todayWeather}>
          <Text style={styles.currentTemprature}>No data</Text>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  weatherIcon: {
    position: "absolute",
    top: 145,
    left: 246,
    width: 121,
    height: 104
  },
  locationTypo: {
    fontFamily: FontFamily.notoSansRegular,
    fontSize: FontSize.size_base,
    left: "4.26%",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute"
  },
  currentTemprature: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_77xl,
    fontFamily: FontFamily.kaiseiTokuminRegular,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute"
  },
  weatherDescription: {
    top: "61.95%"
  },
  location: {
    top: "75.61%"
  },
  feelsLike: {
    top: "89.27%"
  },
  todayWeather: {
    top: 127,
    left: 37,
    width: 141,
    height: 205,
    position: "absolute"
  }
});

export default WeatherCard;
