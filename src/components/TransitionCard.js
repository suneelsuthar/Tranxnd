import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import theme from "./../../theme.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomText from "./Text.js";
export default function TranscationsCard({
  price,
  header,
  title,
  width,
  id,
  data,
}) {
  console.log("00000000", data);
  return (
    <View style={[styles._card, { width }]}>
      <View style={[styles._row, { justifyContent: "space-between" }]}>
        <View
          style={{ width: 40, justifyContent: "center", alignItems: "center" }}
        >
          {id % 2 === 0 ? (
            <MaterialCommunityIcons
              name="arrow-up-drop-circle"
              size={24}
              color={theme.errorColor}
            />
          ) : (
            <MaterialCommunityIcons
              name="arrow-down-drop-circle"
              size={24}
              color={theme.greenLight}
            />
          )}
        </View>
        <View style={styles._inner_view}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CustomText
              style={{
                // color: theme.white,
                fontFamily: "Poppins-SemiBold",
                borderRightWidth: 1,
                // borderColor: theme.white,
                paddingRight: 10,
                marginRight: 10,
                fontSize: 12,
              }}
            >
              Card
            </CustomText>
            <CustomText
              style={{
                // color: theme.white,
                fontFamily: "Poppins-SemiBold",
                fontSize: 12,
              }}
            >
              HVPACVH1134
            </CustomText>
          </View>
          <CustomText
            style={{
              // color: theme.white,
              fontFamily: "Poppins-SemiBold",
              fontSize: 12,
            }}
          >
            Miss Cecilia Kerluke
          </CustomText>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CustomText
              style={{
                // color: theme.white,
                fontFamily: "Poppins-SemiBold",
                borderRightWidth: 1,
                borderColor: theme.textColor,
                paddingRight: 10,
                marginRight: 10,
                fontSize: 12,
              }}
            >
              December 23, 2020
            </CustomText>
            <CustomText
              style={{  fontFamily: "Poppins-SemiBold" }}
            >
              6:04:47 PM
            </CustomText>
          </View>
        </View>
        <View
          style={{ width: 70, justifyContent: "center", alignItems: "center" }}
        >
          <CustomText
            style={[
              styles._title,
              { color: id % 2 === 0 ? theme.errorColor : theme.greenLight },
            ]}
          >
            {data.price}
          </CustomText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  _header: {
    paddingHorizontal: 10,
    padding: 15,
  },
  _logo: {
    // height: 40,
    // width: 75,
  },
  _row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  _card: {
    backgroundColor: theme.listFillColor,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 10,
    padding: 10,
  },
  _title: {
    color: "white",
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
  },
  _price: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "#72FAEC",
  },
  _inner_view: {
    flex: 1,
    // alignItems: "center",
  },
});
