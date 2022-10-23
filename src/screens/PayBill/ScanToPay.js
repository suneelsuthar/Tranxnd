import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
export default function ScanToPay(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Pay a Bill" onPress={() => props.navigation.goBack()} />
      <ScrollView style={styles._sroll_view}>
        <Text style={styles._heading}>Scan to Pay</Text>
        <Text style={styles._sub_heading}>Hold your camera on the QR Code to pay!</Text>
      </ScrollView>
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

});
