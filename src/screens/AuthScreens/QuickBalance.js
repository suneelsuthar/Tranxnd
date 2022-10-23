import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import TextInput from "../../components/TextInpu";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

import SimpleHeader from "../../components/SimpleHeader";
import BalanceCard from "../../components/BalanceCard";
export default function QuickBalance({ navigation }) {
  let [email, setemail] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const getMegicLind = () => {
    //   const get Megic Lik api
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles._inner_view}>
        <SimpleHeader
          title="Quick Balance"
          onPress={() => navigation.goBack()}
          right={
            <Button
              outline={false}
              title="Login"
              onPress={() => navigation.navigate("Login")}
              style={styles._quick_style}
              height={34}
            />
          }
        />

        <View
          style={[
            styles._row,
            {
              justifyContent: "space-between",
              paddingHorizontal: 20,
              borderBottomWidth: 1,
              borderColor: "#8C8C8C",
              paddingVertical: 20,
            },
          ]}
        >
          <Text style={[styles._title, { fontSize: 14 }]}>Olalekan Abcdef</Text>
          <Text style={[styles._title, { fontSize: 14 }]}>TCN # 123456789</Text>
        </View>
        <View style={styles._layer}>
          <BalanceCard
            price="104,535.53"
            title="Available Balance"
            header={true}
            width="100%"
          />
          <View
            style={[
              styles._row,
              { marginTop: 10, justifyContent: "space-between" },
            ]}
          >
            <BalanceCard
              price="20,535.53"
              title="E-WALLET BALANCE"
              width="48%"
            />
            <BalanceCard price="20,535.53" title="CARD BALANCE" width="48%" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  _btn_style: {
    // alignSelf: "flex-end",
  },
  _inner_view: {
    backgroundColor: "#000000",
    flex: 1,
  },
  _btn_style: {
    marginBottom: 10,
    width: "100%",
  },
  _quick_style: {
    backgroundColor: "#72FAEC",
    color: "white",
    borderColor: "#72FAEC",
    width: "100%",
    margin: 15,
    alignSelf: "center",
  },
  _row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  _bold_text: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
    flex: 1,
  },

  _title: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 22,
  },
  _layer: {
    padding: 15,
  },
});
