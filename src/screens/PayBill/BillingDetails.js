import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import Button from "../../components/Button";
import { AntDesign } from '@expo/vector-icons';
import TextInput from './../../components/TextInpu';
import BillId from './../../images/SVG/BillId.svg'
export default function BillingDetails(props) {
  let [billId, setBillId] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Pay a Bill" onPress={() => props.navigation.goBack()} />
      <ScrollView style={styles._sroll_view}>
        <Text style={styles._heading}>Billing Details</Text>
        <Text style={styles._sub_heading}>Please enter Bill ID/Consumer ID</Text>
        <TextInput
          icon={<BillId width={10} height={15} fill={Theme.primary} />}
          onChangeText={(e) => setBillId(e)}
          placeholder="Enter Bill/Consumer ID"
          value={billId}
        />
        <View style={styles._or_main}>
          <View style={styles._line} />
          <Text style={styles._or}>OR</Text>
          <View style={styles._line} />
        </View>
        <View style={{ alignSelf: "center", marginTop: 20 }}>
          <Button title="Scan a QR Code" outline={true} width={"100%"} height={45} icon={<AntDesign name="qrcode" size={24} color={Theme.secondry} />} onPress={() => props.navigation.navigate("ScanToPay")} />
        </View>
      </ScrollView>
      <View style={styles._btn_main}>
        <Button title="Continue" height={45} onPress={() => props.navigation.navigate("PaymentDeatails")} />
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
  _or_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  _line: {
    backgroundColor: Theme.primary,
    height: 1,
    flex: 1
  },
  _or: {
    color: Theme.white,
    fontFamily: Theme.medium,
    fontSize: 15,
    marginHorizontal: 10
  }
});
