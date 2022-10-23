import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Navigation from "./src/navigation/index";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Theme from './theme'
export default function App(props) {
  let [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/Poppins/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./assets/Poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("./assets/Poppins/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} backgroundColor={Theme.gray} translucent={true} />
        <Navigation />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});