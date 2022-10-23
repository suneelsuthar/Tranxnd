import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import Button from "../../components/Button";
import { Ionicons } from '@expo/vector-icons';
import TextInput from './../../components/TextInpu';
import { AntDesign } from '@expo/vector-icons';
import SearchCard from "../../components/SearchCard";
export default function SearchBonus(props) {
  let [search, setSearch] = useState("");
  let [active, setActive] = useState();
  let [verify, setverify] = useState(false);
  const verifyHandler = () => {
    setverify(true);
    setTimeout(() => {
      props.navigation.navigate("BonusAmount");
    }, 2500);
  };
  let CardData = [
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      id: "EMP12345",
      cardName: "GIM Card"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      id: "EMP12345",
      cardName: "GIM Card"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      id: "EMP12345",
      cardName: "GIM Card"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      id: "EMP12345",
      cardName: "GIM Card"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      id: "EMP12345",
      cardName: "GIM Card"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      id: "EMP12345",
      cardName: "GIM Card"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      id: "EMP12345",
      cardName: "GIM Card"
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      id: "EMP12345",
      cardName: "GIM Card"
    },

  ]
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Send Bonus" onPress={() => props.navigation.goBack()}  />

      {!verify ?
        <>
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
                  cardImage={true}
                  Id={v.id}
                  cardName={v.cardName}
                  select={true}
                  selected={active === i ? true : false}
                  onPress={() => setActive(i)}
                />
              )
            })}
            <View style={{ marginBottom: 150 }} />
          </ScrollView>
          <View style={styles._btn_main}>
            <Button title="Continue" height={45} onPress={() => verifyHandler()} />
            <TouchableOpacity style={styles._back_btn} onPress={() => props.navigation.goBack()}>
              <Text style={styles._back_btn_text}>Back</Text>
            </TouchableOpacity>
          </View>
        </> :
        <View style={styles._loader_main}>
          <Image
            source={require("./../../images/loader.png")}
            style={[styles._otp_img]}
          />
          <Text style={styles._sub_heading}>Please wait while we process{'\n'}your information</Text>
        </View>
      }

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
  },
  _otp_img: {
    alignSelf: "center",
    marginVertical: 20,
  },
  _loader_main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  _sub_heading: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 10,
    textAlign: "center",
    marginHorizontal: 20
  },
});
