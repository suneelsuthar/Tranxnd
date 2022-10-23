import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Text from "./Text";
import theme from "../../theme";
export default function Button({
  icon,
  outline,
  title,
  bg,
  width,
  onPress,
  color,
  borderColor,
  style,
  alignSelf,
  height,
}) {
  console.log("------->", style);
  return (
    <View>
      {!outline && (
        <TouchableOpacity
          style={[
            style,
            styles.solid_btn,
            {
              backgroundColor: bg ? bg : "#72FAEC",
              height,
            },
          ]}
          onPress={() => onPress()}
        >
          <Text style={[styles._btn_text]}>{title}</Text>
        </TouchableOpacity>
      )}

      {icon && (
        <TouchableOpacity
          style={[
            style,
            styles._icon_btn,
            {
              backgroundColor: bg ? bg : "#72FAEC",
              width,
              borderColor,
            },
          ]}
          onPress={() => onPress()}
        >
          {icon}
          <Text style={[styles._btn_text]}> {title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  solid_btn: {
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 100,
    elevation: 2,
    borderWidth: 2,
    borderColor:theme.primary
  },
  _btn_text: {
    fontWeight: "bold",
    color:theme.white
  },
  _icon_btn: {
    flexDirection: "row",
    height: 45,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    // borderWidth: 2,
  },
});
