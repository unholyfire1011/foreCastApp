import React, { useState } from "react";
import { View, StyleSheet, Dimensions, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Search = ({ getWeatherData }) => {
  const [cityName, setCityName] = useState("");

  return (
    <View style={style.searchBar}>
      <TextInput
        placeholder="Search Here"
        value={cityName}
        onChangeText={(text) => setCityName(text)}
      ></TextInput>
      <EvilIcons
        name="search"
        size={24}
        color="black"
        onPress={() => getWeatherData(cityName)}
      />
    </View>
  );
};

const style = StyleSheet.create({
  searchBar: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 20,
    borderWidth: 2.5,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 10,
    backgroundColor: "lightgray",
    borderColor: "gray",
    paddingHorizontal: 10,
  },
});

export default Search;
