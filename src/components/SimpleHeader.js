import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../theme";
import CustomText from "./Text";
export default function SimpleHeader({ onPress, right, rightPress, title }) {
  console.log("---rightright----->", right);
  return (
    <View style={styles._header}>
      <TouchableOpacity onPress={() => onPress()}>
        <MaterialIcons name="keyboard-arrow-left" size={34} color="#72FAEC" />
      </TouchableOpacity>
      <CustomText style={styles._title}>{title}</CustomText>
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  _header: {
    alignItems: "center",
    height: 60,
    flexDirection: "row",
    paddingHorizontal: 10,
    backgroundColor: theme.containerColor,
    borderBottomWidth: 1,
    borderColor: theme.containerColor,
    // flex:1
  },
  _title: {
    fontWeight: "bold",
    // color: "white",
    flex: 1,
  },
});
