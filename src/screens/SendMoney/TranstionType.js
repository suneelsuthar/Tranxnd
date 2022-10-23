import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import SimpleCard from "../../components/SimpleCard";
import Card from './../../images/SVG/Card.svg'
import Wallet from './../../images/SVG/Wallet.svg'
import Cash from './../../images/SVG/Cash.svg'
import Bank from './../../images/SVG/Bank.svg';
import Button from "../../components/Button";
export default function TranstionType(props) {
  let [activeCard, setActiveCard] = useState()
  let CardData = [
    {
      icon: <Card width={41} height={30} fill={Theme.primary} />,
      title: "Card to Card Money Transfer"
    },
    {
      icon: <Wallet width={35} height={34} fill={Theme.primary} />,
      title: "Wallet to Wallet Money Transfer"
    },
    {
      icon: <Cash width={50} height={31} fill={Theme.primary} />,
      title: "Cash Collection"
    },
    {
      icon: <Bank width={40} height={40} fill={Theme.primary} />,
      title: "Bank Account"
    },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Send Money" onPress={() => props.navigation.goBack()} />
      <ScrollView style={styles._sroll_view}>
        <Text style={styles._heading}>Select a transaction type!</Text>
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
                TextMarginTop={10}
                onPress={() => setActiveCard(i)} />
            )
          })}
        </View>
      </ScrollView>
      <View style={styles._btn_main}>
        <Button title="Continue" height={45} onPress={() => props.navigation.navigate("Search")} />
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
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 14,
  }
});
