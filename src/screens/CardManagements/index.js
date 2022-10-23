import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  Image,
  ScrollView,
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
import { Octicons } from "@expo/vector-icons";
import SimpleHeader from "../../components/SimpleHeader";
import BalanceCard from "../../components/BalanceCard";
import theme from "../../../theme";
import SimpleCard from "../../components/SimpleCard";

export default function CardManagement({ navigation }) {
  let [email, setemail] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const getMegicLind = () => {
    //   const get Megic Lik api
  };
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles._inner_view}>
          <SimpleHeader
            title="Cards Managment"
            onPress={() => navigation.goBack()}
            right={
              <Button
                outline={false}
                title="Request a New Card"
                onPress={() => navigation.navigate("CardType")}
                style={styles._quick_style}
                height={34}
              />
            }
          />
          <View style={styles._layer}>
            <View style={[styles._tab]}>
              <TouchableOpacity style={styles._btn}>
                <Text style={styles._btn_text}>GIM Card</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles._btn, { backgroundColor: theme.fillColor }]}
              >
                <View style={styles._label}>
                  <Text
                    style={[
                      styles._btn_text,
                      { color: theme.fillColor, fontSize: 10 },
                    ]}
                  >
                    New
                  </Text>
                </View>
                <Text style={[styles._btn_text, { color: theme.primary }]}>
                  Master Card
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles._detail_view}>
              <Image
                source={require("./../../images/card.png")}
                style={{ alignSelf: "center" }}
              />
              <View style={styles._row}>
                <Text style={styles._bold_text}>Status: </Text>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Octicons
                    name="primitive-dot"
                    size={24}
                    color={theme.greenLight}
                    style={{ marginRight: 5 }}
                  />

                  <Text
                    style={[styles._bold_text, { textAlign: "right", flex: 0 }]}
                  >
                    Active
                  </Text>
                </View>
              </View>

              <View style={styles._row}>
                <Text style={styles._bold_text}>Card Number </Text>
                <Text style={[styles._bold_text, { textAlign: "right" }]}>
                  1565 1236 8985 5698
                </Text>
              </View>

              <View style={styles._row}>
                <Text style={styles._bold_text}>Holder Name </Text>
                <Text style={[styles._bold_text, { textAlign: "right" }]}>
                  Olalekan Abcdef
                </Text>
              </View>
              <View style={styles._row}>
                <Text style={styles._bold_text}>Issue Date </Text>
                <Text style={[styles._bold_text, { textAlign: "right" }]}>
                  December 21,2020
                </Text>
              </View>

              <View style={[styles._row]}>
                <Text style={styles._bold_text}>Expiry Date </Text>
                <Text style={[styles._bold_text, { textAlign: "right" }]}>
                  January 21,2022
                </Text>
              </View>
              <View style={styles._slider_Row}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{ marginRight: 10 }}>
                    <SimpleCard
                      title="Top Up Card"
                      width={85}
                      height={85}
                      icon={
                        <Image
                          source={require("./../../images/cardmanag.png")}
                          style={styles._logo}
                        />
                      }
                      onPress={() => alert("")}
                    />
                  </View>
                  <View style={{ marginRight: 10 }}>
                    <SimpleCard
                      title="View E-Statement"
                      width={85}
                      height={85}
                      onPress={() => alert("")}
                      icon={
                        <Image
                          source={require("./../../images/paybill.png")}
                          style={styles._logo}
                        />
                      }
                    />
                  </View>
                  <View style={{ marginRight: 10 }}>
                    <SimpleCard
                      title="Change PIN"
                      width={85}
                      height={85}
                      onPress={() => alert("")}
                      icon={
                        <Image
                          source={require("./../../images/changepin.png")}
                          style={styles._logo}
                        />
                      }
                    />
                  </View>
                  <View style={{ marginRight: 10 }}>
                    <SimpleCard
                      title="Report as lost/stolen"
                      width={90}
                      height={90}
                      onPress={() => alert("")}
                      icon={
                        <Image
                          source={require("./../../images/reports.png")}
                          height={47}
                          style={styles._logo}
                        />
                      }
                    />
                  </View>
                </ScrollView>
              </View>
            </View>

            <View style={styles._detail_view}>
              <Image
                source={require("./../../images/card.png")}
                style={{ alignSelf: "center", marginBottom: 20 }}
              />

              <View style={styles._row}>
                <Text style={styles._bold_text}>Card Number </Text>
                <Text style={[styles._bold_text]}>Holder Name</Text>
              </View>

              <View style={styles._row}>
                <Text style={[styles._bold_text, { color: theme.primary }]}>
                  1565 1236 8985 5698{" "}
                </Text>
                <Text style={[styles._bold_text, { color: theme.primary }]}>
                  Olalekan Abcdef
                </Text>
              </View>
              <View style={styles._row}>
                <Text style={styles._bold_text}>Issue Date</Text>
                <Text style={[styles._bold_text]}>Expiry Date</Text>
              </View>

              <View style={[styles._row]}>
                <Text style={[styles._bold_text, { color: theme.primary }]}>
                  December 21,2020{" "}
                </Text>
                <Text style={[styles._bold_text, { color: theme.primary }]}>
                  January 21,2022
                </Text>
              </View>
              <View style={styles._slider_Row}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{ marginRight: 10 }}>
                    <SimpleCard
                      title="Top Up Card"
                      width={85}
                      height={85}
                      icon={
                        <Image
                          source={require("./../../images/cardmanag.png")}
                          style={styles._logo}
                        />
                      }
                      onPress={() => alert("")}
                    />
                  </View>
                  <View style={{ marginRight: 10 }}>
                    <SimpleCard
                      title="View E-Statement"
                      width={85}
                      height={85}
                      onPress={() => alert("")}
                      icon={
                        <Image
                          source={require("./../../images/paybill.png")}
                          style={styles._logo}
                        />
                      }
                    />
                  </View>
                  <View style={{ marginRight: 10 }}>
                    <SimpleCard
                      title="Change PIN"
                      width={85}
                      height={85}
                      onPress={() => alert("")}
                      icon={
                        <Image
                          source={require("./../../images/changepin.png")}
                          style={styles._logo}
                        />
                      }
                    />
                  </View>
                  <View style={{ marginRight: 10 }}>
                    <SimpleCard
                      title="Report as lost/stolen"
                      width={90}
                      height={90}
                      onPress={() => alert("")}
                      icon={
                        <Image
                          source={require("./../../images/reports.png")}
                          height={47}
                          style={styles._logo}
                        />
                      }
                    />
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
    color: "white",
    flex: 1,
    marginVertical: 5,
    fontFamily: "Poppins-SemiBold",
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
  _tab: {
    backgroundColor: theme.fillColor,
    marginVertical: 20,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  _btn: {
    backgroundColor: theme.primary,
    flex: 1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  _btn_text: {
    fontFamily: "Poppins-SemiBold",
  },
  _label: {
    backgroundColor: theme.primary,
    borderRadius: 100,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 1,
    right: 10,
  },
  _detail_view: {
    padding: 10,
    borderBottomWidth: 2,
    borderColor: theme.fillColor,
    paddingBottom: 40,
    marginBottom: 40,
    paddingTop: 0,
  },
  _slider_Row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _logo: {},
});
