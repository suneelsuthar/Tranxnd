import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import Button from "../../components/Button";
import SearchCard from "../../components/SearchCard";
export default function BonusReview(props) {
  let CardData = [
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF 1,000,000",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF 1,000,000",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF 1,000,000",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF 1,000,000",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF 1,000,000",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF 1,000,000",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF 1,000,000",
      bankName: "Bank of Queensland (BAQ)"
    },

  ]
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Disburse Salaries" onPress={() => props.navigation.goBack()} />
      <ScrollView>
        <Text style={styles._heading}>Review Salries</Text>
        <View style={styles._card_main}>
          <View style={styles._card_header}>
            <Text style={styles._card_title}>Payee Details</Text>
            <Text style={styles._card_title}>Salary Amount</Text>
          </View>
          {CardData.map((v, i) => {
            return (
              <SearchCard
                key={i}
                firstAndLastName={v.firstAndLastName}
                userName={v.userName}
                ibn={v.ibn}
                email={v.email}
                exBank={v.exBank}
                bankName={v.bankName}
                bgColorShow={true}
                ShowBankNamme={true}
              // onPress={() => props.navigation.navigate("RecipientDetails")}
              />
            )
          })}
        </View>
        <View style={styles._card_footer}>
          <Text style={styles._card_title}>Total</Text>
          <Text style={styles._price}>XOF 6,000,000</Text>
        </View>
        <View style={{ marginBottom: 150 }} />
      </ScrollView>
      <View style={styles._btn_main}>
        <Button title="Proceed and Pay" height={45} onPress={() => props.navigation.navigate("BonusOtp")} />
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
  _heading: {
    textAlign: "center",
    color: Theme.primary,
    fontSize: 15,
    fontFamily: Theme.medium,
    marginTop: 20
  },
  _card_main: {
    marginHorizontal: 10,
    backgroundColor: "#0C1A18",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 20
  },
  _card_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 10,
    marginVertical: 5
  },
  _card_title: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 14
  },
  _card_footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#535353",
    paddingHorizontal: 10
  },
  _price: {
    color: Theme.primary,
    fontFamily: Theme.medium,
    fontSize: 16,

  }
});
