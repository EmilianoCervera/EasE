import React from "react";
import { ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { globalStyles } from "../globalStyle";

export const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={globalStyles.scrollViewContent}>
      <View styles={globalStyles.container}>
        <Text>Open up App.js to start working on your emi!</Text>
        <StatusBar styles="auto" />
      </View>
    </ScrollView>
  );
};
