import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
  StyleSheet,
} from "react-native";
import Search from "./Search.js";
import { haze, rainy, snow, sunny } from "../assets/backgroundImages/index.js";

const Forecast = ({ data, getWeatherData }) => {
  const [background, setBackground] = useState(null);
  const {
    weather,
    name,
    main: { temp, humidity },
    wind: { speed },
  } = data;
  const [{ main }] = weather;

  useEffect(() => {
    setBackground(getBackgroundImg(main));
  }, [main]);

  function getBackgroundImg(weather) {
    if (weather === "Snow") return snow;
    if (weather === "Clear") return sunny;
    if (weather === "Rain") return rainy;
    if (weather === "Haze") return haze;
    return haze;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <Search getWeatherData={getWeatherData}></Search>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{name}</Text>
          <Text style={styles.details}>{main}</Text>
          <Text style={styles.details}>{temp}</Text>
        </View>

        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Text style={styles.extra}>Humidity</Text>
            <Text style={styles.extra}>{humidity} %</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.extra}>Wind Speed</Text>
            <Text style={styles.extra}>{speed} m/s</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  header: {
    color: "black",
    fontSize: 36,
    marginTop: 30,
    fontWeight: "bold",
  },
  headerContainer: {
    alignItems: "center",
  },
  details: {
    color: "black",
    fontSize: 30,
    marginTop: 20,
    fontWeight: "500",
  },
  extra: {
    fontSize: 15,
    color: "white",
    fontWeight: "300",
  },
  extraInfo: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    padding: 10,
  },
  info: {
    width: Dimensions.get("screen").width / 2.5,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Forecast;
