import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { globalStyles } from "../globalStyle";
import { Molde2 } from "../components/moldeado/Molde2";
import { Mold1 } from "../components/moldeado/Mold1";

export const HomeScreen = () => {
  return (
    <View styles={globalStyles.container}>
      <StatusBar styles="auto" />
      <View style={globalStyles.moldes}>
        <Mold1 />
        <Molde2 />
      </View>
    </View>
  );
};
