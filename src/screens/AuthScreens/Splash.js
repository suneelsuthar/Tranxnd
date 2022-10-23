import { useEffect } from "react";
import { StyleSheet, Text, Image, ImageBackground } from "react-native";
export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);
  return (
    <ImageBackground
      style={styles.container}
      source={require("./../../images/bg.png")}
    >
      <Image source={require("./../../images/logo.png")} />
      <Text>Open up App.js to start working on your app!</Text>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
  },
});
