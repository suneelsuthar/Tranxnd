import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, StyleSheet, View, useColorScheme } from "react-native";

// const getData = async () => {
//   let data = await AsyncStorage.getItem("theme");

//   return data;
// };

// console.log("---sdf--0-lkjl-->", getData());
let theme = "dark";

export default theme === "darkl"
  ? {
      bold: "Poppins-Bold",
      semiBold: "Poppins-SemiBold",
      medium: "Poppins-Medium",
      regular: "Poppins-Regular",
      primary: "#72FAEC",
      secondry: "#000000",
      greenLight: "#00FF08",
      errorColor: "#FF3D3D",
      white: "#FFFFFF",
      fillColor: "#112626",
      btnTextColor: "#0E2725",
      gray: "#262626",
      headerIconColor: "#72faec",
      listFillColor: "#1f4543",
      textColor: "white",
      containerColor: "#000000",
      simpleCardColor: "#112626",
    }
  : {
      bold: "Poppins-Bold",
      semiBold: "Poppins-SemiBold",
      medium: "Poppins-Medium",
      regular: "Poppins-Regular",
      primary: "#27bdad",
      secondry: "#ffffff",
      greenLight: "#00FF08",
      errorColor: "#FF3D3D",
      white: "#FFFFFF",
      fillColor: "#e9f8f7",
      btnTextColor: "#0E2725",
      gray: "#27bdad",
      headerIconColor: "white",
      listFillColor: "#ccefec",
      textColor: "black",
      containerColor: "#ffffff",
      simpleCardColor: "#27bdad",
    };
