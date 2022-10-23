import React, { useState } from "react";
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
import SimpleCard from "../../components/SimpleCard";
import Mobile from "./../../images/SVG/Mobile.svg";
import Electricity from "./../../images/SVG/Electricity.svg";
import WaterBills from "./../../images/SVG/WaterBills.svg";
import Gas from "./../../images/SVG/Gas.svg";
import Button from "../../components/Button";
import TextInput from "../../components/TextInpu";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function CardsDetails(props) {
  let [activeCard, setActiveCard] = useState("");
  let [password, setpassword] = useState("");
  let [email, setemail] = useState("");
  let [showpassword, setshowpassword] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  let CardData = [
    {
      icon: <Image source={require("./../../images/airtel.png")} />,
      title: "Mobile Recharge",
    },
    {
      icon: <Image source={require("./../../images/mtn.png")} />,
      title: "Electricity Bills",
    },
    {
      icon: <Image source={require("./../../images/mtn.png")} />,
      title: "Water Bills",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader
        title="Pay a Bill"
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView style={styles._sroll_view}>
        <View style={styles._card}>
          <Text style={styles._h1}>BILLING DETAILS</Text>
          <View style={styles._row}>
            <Text style={styles._card_title}>Card Type</Text>
            <Text style={[styles._bank_name, { color: Theme.primary }]}>
              Master Card
            </Text>
          </View>

          <View style={[{ flexDirection: "column", paddingVertical: 10 }]}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Text style={styles._card_title}>Card Issuance Fee</Text>
              <Text style={styles._bank_name}>XOF 20.59</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomWidth: 0.7,
                borderColor: Theme.primary,
                paddingBottom: 5,
              }}
            >
              <Text style={styles._card_title}>Service Charges</Text>
              <Text style={styles._bank_name}>XOF 2.59</Text>
            </View>
            <View
              style={[
                styles._row,
                { borderBottomWidth: 0, paddingVertical: 0, paddingTop: 10 },
              ]}
            >
              <Text style={styles._card_title}>Card Type</Text>
              <Text style={[styles._bank_name, { color: Theme.primary }]}>
                Master Card
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles._heading}>PLEASE SLECT A PAYMENT METHOD</Text>

        <View style={styles._card_list_main}>
          {CardData.map((v, i) => {
            return (
              <TouchableOpacity
                style={[
                  activeCard === v.title
                    ? styles._active_card
                    : styles.type_card,
                ]}
                onPress={() => setActiveCard(v.title)}
              >
                {v.icon}
              </TouchableOpacity>
            );
          })}
        </View>

        <TextInput
          icon={<FontAwesome name="envelope-o" size={16} color="#72FAEC" />}
          onPress={(e) => setemail(e)}
          placeholder="Email"
          value={email}
        />

        <TextInput
          icon={<Feather name="lock" size={16} color="#72FAEC" />}
          onPress={() => setshowpassword(!showpassword)}
          value={password}
          showpassword={showpassword}
          password={true}
          placeholder="Password"
        />
      </ScrollView>

      <View style={styles._btn_main}>
        <Button
          title="Confirm and Pay"
          height={45}
          onPress={() => props.navigation.navigate("Confirmation")}
        />
        <TouchableOpacity
          style={styles._back_btn}
          onPress={() => props.navigation.goBack()}
        >
          <Text style={styles._back_btn_text}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.secondry,
  },
  _sroll_view: {
    paddingHorizontal: 20,
  },
  _heading: {
    color: Theme.primary,
    textAlign: "center",
    marginTop: 30,
    fontFamily: Theme.medium,
    fontSize: 15,
  },
  _sub_heading: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 10,
    textAlign: "center",
  },
  _card_list_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 20,
    marginBottom: 20,
  },
  _btn_main: {
    backgroundColor: Theme.secondry,
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 30,
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

  type_card: {
    backgroundColor: "#112626",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    height: 114,
    width: 114,
  },

  _active_card: {
    backgroundColor: "#112626",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    // marginRight: 10,
    borderWidth: 1,
    borderColor: Theme.greenLight,
    marginTop: 10,
    height: 114,
    width: 114,
  },
  _card: {
    backgroundColor: "#112626",
    borderRadius: 10,
    padding: 20,
    // alignItems: "center",
    marginTop: 20,
  },
  _card_title: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 12,
  },
  _card_title2: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 12,
    marginTop: 10,
  },
  _bank_name: {
    color: Theme.white,
    fontFamily: Theme.medium,
    fontSize: 15,
  },
  _h1: {
    fontFamily: Theme.bold,
    color: "white",
    marginBottom: 20,
  },
  _row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.7,
    borderColor: Theme.primary,
    paddingVertical: 10,
    alignItems: "center",
  },
});
