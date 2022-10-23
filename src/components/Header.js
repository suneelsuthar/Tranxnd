import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import theme from "../../theme";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles._header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Entypo name="menu" size={30} color={theme.headerIconColor} />
      </TouchableOpacity>
      <Image
        source={require("./../images/headerlogo.png")}
        style={styles._logo}
      />

      <TouchableOpacity onPress={() => navigation.navigate("DashboardHome")}>
        <Entypo name="home" size={24} color={theme.headerIconColor} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  _header: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
    backgroundColor: theme.gray,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 15,
    borderBottomWidth: 1,
    borderColor: "#535353",
  },
  _logo: {
    // height: 40,
    // width: 75,
  },
});
