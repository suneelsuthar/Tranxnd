import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomDrowpdown from "../../components/Dropdown";
import { Entypo } from "@expo/vector-icons";
import SimpleHeader from "../../components/SimpleHeader";
import theme from "../../../theme";
import TranscationsCard from "./../../components/TransitionCard";

export default function HistoricTransactions({ navigation }) {
  let [email, setemail] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const getMegicLind = () => {
    //   const get Megic Lik api
  };
  const countries = [
    { label: "Pakistan", value: "Pakistan" },
    { label: "India", value: "India" },
    { label: "USA", value: "USA" },
  ];

  let recentransaction = [
    {
      type: "Card",
      id: "HVPACVH1134",
      username: "Miss Cecilia Kerluke",
      date: "December 23, 2020",
      time: "6:04:47 PM",
      price: "1204.71",
    },
    {
      type: "Card",
      id: "HVPACVH1134",
      username: "Miss Cecilia Kerluke",
      date: "December 23, 2020",
      time: "6:04:47 PM",
      price: "4054.39",
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles._inner_view}>
        <SimpleHeader
          title="Historic Transactions"
          onPress={() => navigation.goBack()}
          right={
            <MaterialCommunityIcons
              name="file-pdf"
              size={24}
              color={theme.primary}
            />
          }
        />
        <ScrollView>
          <View
            style={[
              styles._row,
              {
                justifyContent: "space-between",
                paddingHorizontal: 20,
                borderColor: "#8C8C8C",
                paddingVertical: 20,
              },
            ]}
          >
            <Text style={[styles._title, { fontSize: 14 }]}>
              Olalekan Abcdef
            </Text>
            <Text style={[styles._title, { fontSize: 14 }]}>
              TCN # 123456789
            </Text>
          </View>
          <View style={styles._available_balance}>
            <Text style={[styles._bold_text, { textAlign: "center" }]}>
              Available Balance
            </Text>
            <Text style={[styles._h1, { textAlign: "center" }]}>
              104,535.53
            </Text>
            <View style={styles._row}>
              <Text style={styles._bold_text}>E-Wallet Balance</Text>
              <Text style={styles._bold_text}>Card Balance</Text>
            </View>
            <View style={styles._row}>
              <Text style={styles._h1}>20,535.53</Text>
              <Text style={styles._h1}>20,535.53</Text>
            </View>
          </View>
          <View style={styles._layer}>
            <View
              style={[
                styles._row,
                {
                  justifyContent: "space-between",
                  marginVertical: 20,
                  alignItems: "center",
                },
              ]}
            >
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Entypo name="calendar" size={24} color={theme.white} />
                  <Text
                    style={[
                      styles._bold_text,
                      { marginBottom: -5, paddingLeft: 5 },
                    ]}
                  >
                    Date Range:
                  </Text>
                </View>
                <Text style={[styles._bold_text, { color: theme.white }]}>
                  Dec 23, 2021 - Dec 22, 2021
                </Text>
              </View>

              <CustomDrowpdown
                // placeholder="All transcations"
                data={countries}
                width={170}
              />
            </View>
          </View>
          <View style={styles._date_row}>
            <Text style={[styles._date_title]}>December 23, 2021</Text>
          </View>
          {recentransaction.map((val, i) => {
            return (
              <View>
                <TranscationsCard
                  id={i}
                  data={val}
                  price="104,535.53"
                  title="Available Balance"
                  header={true}
                  width="100%"
                />
                <View
                  style={[
                    styles._row,
                    {
                      justifyContent: "space-between",
                      paddingHorizontal: 5,
                      borderColor: "#8C8C8C",
                      marginBottom: 10,
                      // paddingVertical: 20,
                    },
                  ]}
                >
                  <Text style={[styles._title, { fontSize: 14 }]}>Balance</Text>
                  <Text style={[styles._title, { fontSize: 14 }]}>
                    80,545.23
                  </Text>
                </View>
              </View>
            );
          })}

          <View style={styles._date_row}>
            <Text style={[styles._date_title]}>December 23, 2021</Text>
          </View>

          {recentransaction.map((val, i) => {
            return (
              <View>
                <TranscationsCard
                  id={i}
                  data={val}
                  price="104,535.53"
                  title="Available Balance"
                  header={true}
                  width="100%"
                />
                <View
                  style={[
                    styles._row,
                    {
                      justifyContent: "space-between",
                      paddingHorizontal: 5,
                      borderColor: "#8C8C8C",
                      marginBottom: 10,
                      // paddingVertical: 20,
                    },
                  ]}
                >
                  <Text style={[styles._title, { fontSize: 14 }]}>Balance</Text>
                  <Text style={[styles._title, { fontSize: 14 }]}>
                    80,545.23
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
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

  _available_balance: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: theme.fillColor,
    borderColor: "#575C5B",
    padding: 20,
    justifyContent: "center",
    // alignItems: "center",
  },
  _bold_text: {
    color: theme.white,
    fontFamily: theme.semiBold,
  },
  _h1: {
    color: theme.primary,
    fontFamily: theme.semiBold,
    fontSize: 22,
    paddingVertical: 5,
  },

  _date_row: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#575C5B",
    marginBottom: 10,
    marginTop:20
  },
  _date_title: {
    borderColor: "white",
    color: "white",
    marginTop: -10,
    paddingHorizontal: 10,
    backgroundColor: theme.secondry,
    fontFamily: theme.medium,
  },
});
