import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import Button from "../../components/Button";
import Done from './../../images/SVG/Done.svg'
export default function UpdateProfileSuccess(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Update Personal Information" onPress={() => props.navigation.goBack()} />
      <View style={styles._data_main}>
        <View style={{ alignSelf: "center" }}>
          <Done width={96} height={96} fill={Theme.primary} />
        </View>
        <Text style={styles._heading}>Thank you!</Text>
        <Text style={styles._sub_heading}>Your request for changes to your account have been sent successfully! Please note that it may take up to 14 days before changes are reflected on your account</Text>
        <Button title="Return to home" height={45} onPress={() => alert("commit soon !")} />
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
    color: Theme.white,
    textAlign: "center",
    marginTop: 30,
    fontFamily: Theme.semiBold,
    fontSize: 16,
  },
  _sub_heading: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 10,
    textAlign: "center",
    marginBottom: 20
  },
  _data_main: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center"
  }
});
