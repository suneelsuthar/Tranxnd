import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
export default function CustomInput({
  icon,
  style,
  password,
  placeholder,
  showpassword,
  onPress,
  value,
  width,
  onChangeText,
  rightIcon,
}) {
  console.log("------->", width);
  return (
    <View>
      {!password && (
        <View
          style={[styles._textinput_view, { width: width ? width : "100%" }]}
        >
          {icon}
          <TextInput
            style={[styles._textinput]}
            placeholder={placeholder}
            placeholderTextColor={"#808080"}
            value={value}
            onChangeText={() => onChangeText()}
          />
        </View>
      )}

      {password && (
        <View style={styles._textinput_view}>
          {icon}
          <TextInput
            style={styles._textinput}
            placeholder={placeholder}
            placeholderTextColor={"#808080"}
            secureTextEntry={!showpassword ? true : false}
            value={value}
            onChangeText={() => onChangeText()}
          />
          {rightIcon ? (
            rightIcon
          ) : !showpassword ? (
            <Feather
              name="eye-off"
              size={24}
              color="#72FAEC"
              onPress={() => onPress()}
            />
          ) : (
            <Feather
              name="eye"
              size={24}
              color="#72FAEC"
              onPress={() => onPress()}
            />
          )}
        </View>
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
  },
  _btn_text: {
    fontWeight: "bold",
  },
  _icon_btn: {
    flexDirection: "row",
    height: 45,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    borderWidth: 2,
  },
  _textinput: {
    fontWeight: "bold",
    padding: 10,
    flex: 1,
    borderWidth: 0,
    color: "white",
  },
  _textinput_view: {
    borderWidth: 1,
    borderColor: "#72FAEC",
    borderRadius: 100,
    height: 45,
    fontWeight: "bold",
    // padding: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});
