import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import Error from './../../images/SVG/Error.svg';
import Button from "../../components/Button";
import CustomDrowpdown from "../../components/Dropdown";
import { SimpleLineIcons } from '@expo/vector-icons';
import TextInput from './../../components/TextInpu';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import theme from "./../../../theme";
export default function RecipientDetails(props) {
  let [billId, setBillId] = useState("");

  const countries = [
    { label: "Pakistan", value: "Pakistan" },
    { label: "India", value: "India" },
    { label: "USA", value: "USA" },
  ];
  let [save, setSave] = useState(true)

  let [verify, setverify] = useState(false);
  const verifyHandler = () => {
    setverify(true);
    setTimeout(() => {
      props.navigation.navigate("ReviewRecipient");
    }, 2500);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Send Money" onPress={() => props.navigation.goBack()} />
      {!verify ?
        <ScrollView style={styles._sroll_view}>
          <Text style={styles._heading}>Recipient details</Text>
          <Text style={styles._sub_heading}>Please enter recipient details!</Text>
          <View style={styles._input_main}>
            <CustomDrowpdown
              placeholder="Recipient Bank Name"
              data={countries}
              left={<SimpleLineIcons name="location-pin" size={20} color={Theme.primary} />}
            />
          </View>
          <View style={styles._input_main}>
            <TextInput
              icon={<AntDesign name="user" size={20} color={Theme.primary} />}
              onChangeText={(e) => setBillId(e)}
              placeholder="Recipient Account Number"
              value={billId}
            />
          </View>
          <Text style={styles._account_format}>Account Number formats</Text>
          <Text style={styles._ibn}>IBAN: 1234-5678-1234-5678</Text>
          <Text style={styles._ibn}>IBAN: ABCD-5678-1234-ABCD</Text>
          <View style={styles._input_main}>
            <TextInput
              icon={<Feather name="mail" size={20} color={Theme.primary} />}
              onChangeText={(e) => setBillId(e)}
              placeholder="Recipient Email Address (Optional)"
              value={billId}
            />
          </View>
          <View style={styles._input_main}>
            <TextInput
              icon={<AntDesign name="user" size={20} color={Theme.primary} />}
              onChangeText={(e) => setBillId(e)}
              placeholder="Recipient Nick Name (Optional)"
              value={billId}
            />
          </View>
          <TouchableOpacity style={styles._save_main} onPress={() => setSave(!save)}>
            <View style={styles._select_main}><View style={save ? styles._selected : styles._not_selected} /></View>
            <Text style={styles._save_title}>Save Recipient</Text>
          </TouchableOpacity>
          <View style={styles._error_main}>
            <Error width={27} height={20} fill={Theme.errorColor} />
            <Text style={styles._error_show}>Any front end error will show up here!</Text>
          </View>
          <View style={styles._btn_main}>
            <Button title="Verify Account" height={45} onPress={() => verifyHandler()} />
            <TouchableOpacity style={styles._back_btn} onPress={() => props.navigation.goBack()}>
              <Text style={styles._back_btn_text}>Back</Text>
            </TouchableOpacity>
          </View>
        </ScrollView> :
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
  },
  _btn_main: {
    backgroundColor: Theme.secondry,
    paddingHorizontal: 10,
    marginTop: 10
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
    marginTop: 10
  },
  _account_format: {
    color: Theme.white,
    fontSize: 14,
    fontFamily: Theme.medium,
    textAlign: "center"
  },
  _ibn: {
    color: Theme.white,
    fontSize: 12,
    fontFamily: Theme.regular,
    textAlign: "center"
  },
  _save_title: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 14,
    marginLeft: 10,
    marginTop: 5
  },
  _save_main: {
    flexDirection: "row",
    alignItems: "center",
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
    backgroundColor: theme.primary,
    width: 10,
    height: 10,
    borderRadius: 10 / 2
  },
  _not_selected: {
    backgroundColor: theme.secondry,
    width: 10,
    height: 10,
    borderRadius: 10 / 2
  },
  _error_main: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20
  },
  _error_show: {
    color: Theme.errorColor,
    fontFamily: Theme.medium,
    fontSize: 14,
    marginLeft: 5,
    marginTop: 5
  },
  _otp_img: {
    alignSelf: "center",
    marginVertical: 20,
  },
  _loader_main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
