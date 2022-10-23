import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import Button from "../../components/Button";
import IssueCard from './../../images/SVG/IssueCard.svg'
import Skip from './../../images/SVG/Skip.svg'
export default function TransNdCardIssues(props) {
  let [activeCard, setActiveCard] = useState()
  let CardData = [
    {
      icon: <IssueCard width={126} height={79} fill={Theme.primary} />,
      price: "XOF 5,000",
      title: "transxnd GIM CARD",
      des: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo."
    },
    {
      icon: <IssueCard width={126} height={79} fill={Theme.primary} />,
      price: "XOF 7,000",
      title: "transxnd MASTER CARD",
      des: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo."
    },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Add an Employee" onPress={() => props.navigation.goBack()} />
      <ScrollView>
        <Text style={styles._sub_heading}>Add employee to your business account! These employees{'\n'}will be added in the send salaries list!</Text>
        <Text style={styles._heading}>SELECT A TRANSXND CARD TO ISSUE</Text>
        <Text style={styles._sub_heading2}>Please select a card to issue to this employee! </Text>
        {CardData.map((v, i) => {
          return (
            <TouchableOpacity style={activeCard === i ? styles._active_card_main : styles._card_main} key={i} onPress={() => setActiveCard(i)}>
              <View style={styles._card_header_main}>
                {v.icon}
                <Text style={styles._price}>{v.price}</Text>
              </View>
              <Text style={styles._card_title}>{v.title}</Text>
              <Text style={styles._card_des}>{v.des}</Text>
            </TouchableOpacity>
          )
        })}
        <TouchableOpacity style={styles._skip_btn}>
          <Skip width={24} height={24} fill={Theme.primary} />
          <Text style={styles._skip_btn_text}>Skip for now</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles._btn_main}>
        <Button title="Next" height={45} onPress={() => alert("Comming Soon!")} />
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
  _heading: {
    color: Theme.primary,
    textAlign: "center",
    fontFamily: Theme.medium,
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10
  },
  _btn_main: {
    backgroundColor: Theme.secondry,
    paddingHorizontal: 30,
    marginTop: 10
  },
  _sub_heading: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 10,
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
    marginVertical: 10
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
    borderColor: "#112626"
  },
  _active_card_main: {
    backgroundColor: "#112626",
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: Theme.greenLight
  },
  _card_header_main: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  _price: {
    color: Theme.white,
    fontSize: 22,
    fontFamily: Theme.bold
  },
  _card_title: {
    color: Theme.primary,
    fontFamily: Theme.medium,
    fontSize: 15,
    marginTop: 10,
    textTransform: "uppercase"
  },
  _card_des: {
    color: Theme.white,
    fontSize: 11,
    fontFamily: Theme.regular
  },
  _skip_btn: {
    backgroundColor: "#112626",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  _skip_btn_text: {
    color: Theme.primary,
    fontFamily: Theme.medium,
    fontSize: 15,
    marginLeft: 10
  }
});
