import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text
} from "react-native";
import Header from "../../components/Header";
import { useState } from "react";
import CustomDrowpdown from "../../components/Dropdown";
import { Octicons } from "@expo/vector-icons";
import TranscationsCard from "./../../components/TransitionCard";
import { BarChart } from "react-native-chart-kit";
import BalanceCard from "../../components/BalanceCard";
import SimpleCard from "../../components/SimpleCard";
import theme from "./../../../theme";
// import Text from "../../components/Text";
const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  backgroundGradientFrom: theme.fillColor,
  backgroundGradientFromOpacity: 1,
  backgroundGradientToOpacity: 1,
  // strokeWidth: 3, // optional, default 3
  useShadowColorFromDataset: false, // optional
  labelColor: (opacity = 1) => `white`,
  backgroundGradientTo: theme.fillColor,
  color: (opacity = 1) => `rgba(114, 250, 236,0.2)`,
  style: {
    borderRadius: 16,
  },
};
export default function QuickBalance({ navigation }) {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
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
    {
      type: "E-Wallet",
      id: "KMQITAO1",
      username: "Kameron Tremblay",
      date: "February 15, 2021",
      time: "February 15, 2021",
      price: "4054.39",
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
        <ScrollView>
          <View
            style={[
              styles._row,
              {
                justifyContent: "space-between",
                paddingHorizontal: 20,
                borderColor: "#8C8C8C",
                paddingTop: 20,
                paddingBottom: 10,
                alignItems: "center",
              },
            ]}
          >
            <View style={{ flexDirection: "column" }}>
              <Text
                style={[styles._title, { fontSize: 14, textAlign: "left" }]}
              >
                Welcome <Text style={{ color: theme.primary }}>! Olalekan</Text>
              </Text>
              <Text
                style={[
                  styles._title,
                  { fontSize: 14, color: theme.primary, textAlign: "left" },
                ]}
              >
                olalekan.l@transxnd.com
              </Text>
            </View>
            <Text style={[styles._tcn_number, { fontSize: 14 }]}>
              TCN # 123456789
            </Text>
          </View>

          <View style={styles._layer}>
            <View style={styles._slider_Row}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ marginRight: 10 }}>
                  <SimpleCard
                    title="Pay Bill"
                    width={100}
                    height={100}
                    icon={
                      <Image source={require("./../../images/paybill.png")} />
                    }
                    onPress={() => alert("")}
                  />
                </View>
                <View style={{ marginRight: 10 }}>
                  <SimpleCard
                    title="Send Money"
                    width={100}
                    height={100}
                    onPress={() => alert("")}
                    icon={
                      <Image source={require("./../../images/sendmoney.png")} />
                    }
                  />
                </View>
                <View style={{ marginRight: 10 }}>
                  <SimpleCard
                    title="Cards Managm."
                    width={100}
                    height={100}
                    onPress={() => alert("")}
                    icon={
                      <Image source={require("./../../images/cardmanag.png")} />
                    }
                  />
                </View>
                <View style={{ marginRight: 10 }}>
                  <SimpleCard
                    title="Pay Bill"
                    width={100}
                    height={100}
                    onPress={() => alert("")}
                    icon={
                      <Image source={require("./../../images/refer.png")} />
                    }
                  />
                </View>
              </ScrollView>
            </View>

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

            <View style={styles._chart_view}>
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
                <Text style={styles._chart_title}>YOUR SUMMARY</Text>
                <CustomDrowpdown
                  placeholder="Funds Transfers"
                  data={countries}
                  width={200}
                />
              </View>
              <BarChart
                // style={graphStyle}
                data={data}
                width={screenWidth - 50}
                height={260}
                yAxisLabel="$"
                chartConfig={chartConfig}
                verticalLabelRotation={30}
              />
            </View>

            <View style={styles._chart_view}>
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
                <Text style={styles._chart_title}>RECENT TRANSCATIONS</Text>
                <CustomDrowpdown placeholder="" data={countries} width={140} />
              </View>

              {recentransaction.map((val, i) => {
                return (
                  <TranscationsCard
                    id={i}
                    data={val}
                    price="104,535.53"
                    title="Available Balance"
                    header={true}
                    width="100%"
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles._view_all}>
          <Text style={styles._view_all_text}>View All</Text>
        </TouchableOpacity>
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
    backgroundColor: theme.primary,
    color: "white",
    borderColor: theme.primary,
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
    justifyContent: "center",
    // alignItems:"center"
  },
  _tcn_number: {
    borderColor: theme.primary,
    color: theme.primary,
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontWeight: "bold",
  },
  _slider_Row: {
    flexDirection: "row",
    marginBottom: 10,
    // padding: 2,
  },
  _chart_view: {
    backgroundColor: theme.fillColor,
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  _chart_title: {
    fontFamily: "Poppins-Medium",
    color: "white",
  },
  _view_all: {
    alignSelf: "flex-end",
  },
  _view_all_text: {
    color: "white",
    fontFamily: "Poppins-Medium",
    color: theme.primary,
    padding: 14,
  },
});
