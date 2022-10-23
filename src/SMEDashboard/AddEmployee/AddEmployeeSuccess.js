import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import Button from "../../components/Button";
import Done from './../../images/SVG/Done.svg'
export default function AddEmployeeSuccess(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Add an Employee" onPress={() => props.navigation.goBack()} />
      <Text style={[styles._sub_heading, { marginTop: 10 }]}>Add employee to your business account! These employees{'\n'}will be added in the send salaries list!</Text>
      <View style={styles._data_main}>
        <View style={{ alignSelf: "center" }}>
          <Done width={96} height={96} fill={Theme.primary} />
        </View>
        <Text style={styles._heading}>Thank you!</Text>
        <Text style={styles._sub_heading}>You've added an employee in your business account!{'\n'}The employee will notified shortly!</Text>
        <Button title="Add another employee" height={45} onPress={() => props.navigation.navigate("BillType")} />
        <Text style={styles._sub_heading}>Go to employee management</Text>
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
