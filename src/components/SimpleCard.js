import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import theme from "./../../theme";
import Theme from './../../theme'
export default function SimpleCard({ title, width, height, icon, onPress, activeCard, TextMarginTop }) {
  return (
    <TouchableOpacity
      style={[activeCard ? styles._active_card : styles._card, { width, height }]}
      onPress={() => onPress()}
    >
      {icon}
      <Text style={[styles._title, { textAlign: "center", marginTop: TextMarginTop }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  _card: {
    backgroundColor: Theme.simpleCardColor,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    // marginRight: 10,
    marginTop: 10
  },
  _title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    padding: 5,
  },
  _active_card: {
    backgroundColor: theme.simpleCardColor,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    // marginRight: 10,
    borderWidth: 1,
    borderColor: Theme.greenLight,
    marginTop: 10
  }
});
