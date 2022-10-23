import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import Button from "../../components/Button";
export default function ReviewRecipient(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Send Money" onPress={() => props.navigation.goBack()} />
      <ScrollView style={styles._sroll_view}>
        <Text style={styles._heading}>Review Recipient</Text>
        <View style={styles._card}>
          <Text style={styles._card_title}>Recipient Bank Name</Text>
          <Text style={styles._bank_name}>ABCD Bank Private Limited</Text>
          <Text style={styles._card_title2}>Recipient Account Number</Text>
          <Text style={styles._bank_name}>ABCD-1334-5678-9123</Text>
          <Text style={styles._card_title2}>Recipient Email Address</Text>
          <Text style={styles._bank_name}>olalekam.l@transxnd.com</Text>
        </View>
      </ScrollView>
      <View style={styles._btn_main}>
        <Button title="Continue" height={45} onPress={() => props.navigation.navigate("PaymentAmount")} />
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
  _card: {
    backgroundColor: "#112626",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginTop:20
  },
  _card_title: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 12
  },
  _card_title2: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 12,
    marginTop: 10
  },
  _bank_name: {
    color: Theme.primary,
    fontFamily: Theme.medium,
    fontSize: 15
  }
});
