import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import theme from "../../theme";
import CustomText from "./Text";
export default function BalanceCard({ price, header, title, width }) {
  return (
    <View style={[styles._card, { width }]}>
      <View style={styles._header}>
        {header && (
          <View style={[styles._row, { justifyContent: "space-between" }]}>
            <CustomText style={styles._title}>XOF</CustomText>
            <Feather name="eye" size={24} color={theme.primary} />
          </View>
        )}
        <CustomText style={styles._price}>{price}</CustomText>
      </View>
      <CustomText style={[styles._title, { textAlign: "center", padding: 15 }]}>
        {title}
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  _header: {
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#535353",
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
    backgroundColor: theme.fillColor,
    borderRadius: 10,
    alignSelf: "center",
  },
  _title: {
    // color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  _price: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: theme.primary,
  },
});
