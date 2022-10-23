import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import SimpleCard from "../../components/SimpleCard";
import Mobile from './../../images/SVG/Mobile.svg'
import Electricity from './../../images/SVG/Electricity.svg'
import WaterBills from './../../images/SVG/WaterBills.svg'
import Gas from './../../images/SVG/Gas.svg';
import Button from "../../components/Button";
import Text from "../../components/Text";
export default function BillType(props) {
  let [activeCard, setActiveCard] = useState()
  let CardData = [
    {
      icon: <Mobile width={25} height={47} fill={Theme.primary} />,
      title: "Mobile Recharge"
    },
    {
      icon: <Electricity width={46} height={46} fill={Theme.primary} />,
      title: "Electricity Bills"
    },
    {
      icon: <WaterBills width={46} height={46} fill={Theme.primary} />,
      title: "Water Bills"
    },
    {
      icon: <Gas width={25} height={41} fill={Theme.primary} />,
      title: "Gas/CNG Bills"
    },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Pay a Bill" onPress={() => props.navigation.goBack()} />
      <ScrollView style={styles._sroll_view}>
        <Text style={styles._heading}>Select a BIll type</Text>
        <Text style={styles._sub_heading}>Please select a vendor type and continue to proceed!</Text>
        <View style={styles._card_list_main}>
          {CardData.map((v, i) => {
            return (
              <SimpleCard
                key={i}
                width={"48%"}
                height={128}
                activeCard={activeCard === i ? true : false}
                title={v.title}
                icon={v.icon}
                TextMarginTop={20}
                onPress={() => setActiveCard(i)} />
            )
          })}
        </View>
      </ScrollView>
      <View style={styles._btn_main}>
        <Button title="Continue" height={45} onPress={() => props.navigation.navigate("VendorDetails")} />
        <TouchableOpacity style={styles._back_btn} onPress={() => props.navigation.goBack()}>
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
    paddingHorizontal: 20
  },
  _heading: {
    color: Theme.primary,
    textAlign: "center",
    marginTop: 30,
    fontFamily: Theme.medium,
    fontSize: 15
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
  },
  _btn_main: {
    backgroundColor: Theme.secondry,
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 30
  },
  _back_btn: {
    textAlign: "center",
    alignItems: "center",
    marginVertical: 10
  },
  _back_btn_text: {
    color: Theme.textColor,
    fontFamily: Theme.regular,
    fontSize: 14,
  }
});
