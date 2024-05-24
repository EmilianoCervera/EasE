import React from 'react'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import { globalStyles } from "../globalStyle";

export const HomeScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Open up App.js to start working on your emi!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
