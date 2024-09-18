import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import Forecast from "./components/Forecast";
import Search from "./components/Search";

export default function App() {
  const API_KEY = "778590e94ccdfbc3364d1f8305395dcd";

  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState("");

  useEffect(() => {
    getWeatherData("Mumbai");
  }, []);

  async function getWeatherData(cityName) {
    setLoaded(false);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    try {
      const response = await fetch(API);
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      }
    } catch (error) {
      setWeatherData(null);
    }
    setLoaded(true);
  }

  if (!loaded) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator color="gray"></ActivityIndicator>
      </SafeAreaView>
    );
  }

  if (weatherData === null) {
    return (
      <View>
        <Search getWeatherData={getWeatherData}></Search>
        <Text> Enter A Valid City</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Forecast data={weatherData} getWeatherData={getWeatherData}></Forecast>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
