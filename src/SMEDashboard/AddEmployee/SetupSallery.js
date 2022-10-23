import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import Button from "../../components/Button";
import DateOfBirth from './../../images/SVG/DateOfBirth.svg';
import TextInput from './../../components/TextInpu';
import XOF from './../../images/SVG/XOF.svg'
export default function SetupSallery(props) {
  let [dataOfBirth, setDateOfBirth] = useState("September 26, 1995")
  let [billId, setBillId] = useState("");
  let [save, setSave] = useState(true)
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Add an Employee" onPress={() => props.navigation.goBack()} />
      <ScrollView>
        <Text style={styles._sub_heading}>Add employee to your business account! These employees{'\n'}will be added in the send salaries list!</Text>
        <Text style={styles._heading}>SETUP SALARY PAYMENTS</Text>
        <Text style={styles._sub_heading2}>Add a recurring payment, to be sent every month. You can{'\n'}always change these setting in employee management.</Text>
        <Text style={styles._heading}>Recurring Salary Amount</Text>
        <View style={{ marginHorizontal: 20 }}>
          <TextInput
            icon={<XOF width={27} height={20} fill={Theme.primary} />}
            onChangeText={(e) => setBillId(e)}
            placeholder="Enter Amount"
            value={billId}
          />
        </View>
        <Text style={styles._heading}>Payment Date</Text>
        <View style={{ marginHorizontal: 20 }}>
          <TextInput
            icon={<DateOfBirth width={20} height={20} fill={Theme.primary} />}
            onChangeText={(e) => setDateOfBirth(e)}
            placeholder="Date Of Birth"
            value={dataOfBirth}
          />
        </View>
        <TouchableOpacity style={styles._save_main} onPress={() => setSave(!save)}>
          <View style={styles._select_main}><View style={save ? styles._selected : styles._not_selected} /></View>
          <Text style={styles._save_title}>Send a notification every time you send payment on this account!</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles._btn_main}>
        <Button title="Continue" height={45} onPress={() => alert("Comming Soon!")} />
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
  _save_main: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20
  },
  _select_main: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: Theme.primary,
    borderRadius: 20 / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  _selected: {
    backgroundColor: Theme.primary,
    width: 10,
    height: 10,
    borderRadius: 10 / 2
  },
  _not_selected: {
    backgroundColor: Theme.secondry,
    width: 10,
    height: 10,
    borderRadius: 10 / 2
  },
  _save_title: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 14,
    marginLeft: 10,
    marginTop: 5
  },
});
