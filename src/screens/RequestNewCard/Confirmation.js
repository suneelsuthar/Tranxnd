import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Theme from "./../../../theme";
import Header from "./../../components/Header";
import SimpleHeader from "../../components/SimpleHeader";
import Button from "../../components/Button";
import IssueCard from "./../../images/SVG/IssueCard.svg";
import Skip from "./../../images/SVG/Skip.svg";
import CustomDrowpdown from "../../components/Dropdown";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function Confirmation(props) {
  let [activeCard, setActiveCard] = useState();

  const countries = [
    { label: "Pakistan", value: "Pakistan" },
    { label: "India", value: "India" },
    { label: "USA", value: "USA" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader
        title="Request a New Card"
        onPress={() => props.navigation.goBack()}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={require("./../../images/confirmation.png")} />
        <Text style={styles._heading}>Thank you!</Text>
        <Text style={[styles._sub_heading, { paddingHorizontal: 25 }]}>
          {`Your request has been submitted!\nYou'll receive an SMS when your card is delivered!`}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.secondry,
  },
  _heading: {
    color: Theme.white,
    textAlign: "center",
    fontFamily: Theme.medium,
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10,
  },
  _btn_main: {
    backgroundColor: Theme.secondry,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  _sub_heading: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
  _sub_heading2: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 10,
    textAlign: "center",
  },
  _back_btn: {
    textAlign: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  _back_btn_text: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 14,
  },
  _card_main: {
    backgroundColor: "#112626",
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#112626",
  },
  _active_card_main: {
    backgroundColor: "#112626",
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: Theme.greenLight,
  },
  _card_header_main: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _price: {
    color: Theme.white,
    fontSize: 22,
    fontFamily: Theme.bold,
  },
  _card_title: {
    color: Theme.primary,
    fontFamily: Theme.medium,
    fontSize: 15,
    marginTop: 10,
    textTransform: "uppercase",
  },
  _card_des: {
    color: Theme.white,
    fontSize: 11,
    fontFamily: Theme.regular,
  },
  _skip_btn: {
    backgroundColor: "#112626",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  _skip_btn_text: {
    color: Theme.primary,
    fontFamily: Theme.medium,
    fontSize: 15,
    marginLeft: 10,
  },
});
