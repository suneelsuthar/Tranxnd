import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import Button from "../../components/Button";
import CustomDrowpdown from "../../components/Dropdown";
import { SimpleLineIcons } from '@expo/vector-icons';
export default function VendorDetails(props) {
  const countries = [
    { label: "Pakistan", value: "Pakistan" },
    { label: "India", value: "India" },
    { label: "USA", value: "USA" },
  ];
  let CardData = [
    {
      title: "01"
    },
    {
      title: "02"
    },
    {
      title: "03"
    },
    {
      title: "04"
    },
    {
      title: "05"
    },
    {
      title: "06"
    },
    {
      title: "07"
    },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Pay a Bill" onPress={() => props.navigation.goBack()} />
      <ScrollView style={styles._sroll_view}>
        <Text style={styles._heading}>Vendor Details</Text>
        <Text style={styles._sub_heading}>Please select a vendor type and continue to proceed!</Text>
        <CustomDrowpdown
          placeholder="Select vendor country"
          data={countries}
          left={<SimpleLineIcons name="location-pin" size={20} color={Theme.primary} />}
        />
        <Text style={styles._heading}>Select a Vendor</Text>
        <View style={styles._card_main}>
          {CardData.map((v, i) => {
            return (
              <TouchableOpacity key={i} style={styles._card}>
                {/* <Text>{v.title}</Text> */}
              </TouchableOpacity>
            )
          })}

        </View>
      </ScrollView>
      <View style={styles._btn_main}>
        <Button title="Continue" height={45} onPress={() => props.navigation.navigate("BillingDetails")} />
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
    marginBottom: 20
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
  },
  _card_main: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  _card: {
    backgroundColor: Theme.primary,
    height: 76,
    width: "22%",
    marginTop: 10,
    marginRight: "3%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"

  }
});
