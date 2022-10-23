import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import Button from "../../components/Button";
import { Ionicons } from '@expo/vector-icons';
import TextInput from './../../components/TextInpu';
import { AntDesign } from '@expo/vector-icons';
import SearchCard from "../../components/SearchCard";
export default function Search(props) {
  let [search, setSearch] = useState("");
  let CardData = [
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF",
      bankName: "Bank of Queensland (BAQ)"
    },

    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF",
      bankName: "Bank of Queensland (BAQ)"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      exBank: "XOF",
      bankName: "Bank of Queensland (BAQ)"
    },

  ]
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Send Money" onPress={() => props.navigation.goBack()} right={<Ionicons name="add-outline" size={24} color={Theme.primary} />} />
      <View style={styles._input_main}>
        <TextInput
          icon={<AntDesign name="search1" size={24} color={Theme.primary} />}
          onChangeText={(e) => setSearch(e)}
          placeholder="Search"
          value={search}
        />
      </View>
      <ScrollView>
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
              onPress={() => props.navigation.navigate("RecipientDetails")}
            />
          )
        })}
        <View style={{ marginBottom: 150 }} />
      </ScrollView>
      <View style={styles._btn_main}>
        <Button title="Continue" height={45} onPress={() => props.navigation.navigate("RecipientDetails")} />
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
  _input_main: {
    marginHorizontal: 20,
    marginVertical: 10
  }
});
