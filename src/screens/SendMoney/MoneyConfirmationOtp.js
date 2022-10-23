import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import Button from "../../components/Button";
import OTPInputView from "@twotalltotems/react-native-otp-input";

export default function MoneyConfirmationOtp(props) {
  let [verify, setverify] = useState(false);
  const verifyHandler = () => {
    setverify(true);
    setTimeout(() => {
      props.navigation.navigate("AnotherTranstions");
    }, 2500);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Send Money" onPress={() => props.navigation.goBack()} />
      {!verify ?
        <>
          <Text style={styles._heading}>Confirm OTP</Text>
          <Text style={styles._sub_heading}>Please enter the 4 digit OPT sent on your email and{'\n'}phone number!</Text>
          <View style={styles._line} />
          <ScrollView>
            <Text style={styles._heading}>SMS OTP</Text>
            <Text style={styles._sub_heading}>Please enter the 4 digit OPT sent on your email and{'\n'}phone number!</Text>
            <Text style={styles._mob_number}>+92 312 486 7888</Text>
            <OTPInputView
              style={{
                width: "80%",
                alignSelf: "center",
                height: 100,
              }}
              code="323"
              pinCount={4}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              editable={true}
              onCodeFilled={(code) => {
                verifyHandler();
              }}
            />
            <View style={{ marginHorizontal: 20 }}>
              <Button title="Resend OTP (00:30)" height={45} onPress={() => alert("Commit soon !")} />
              <TouchableOpacity style={styles._back_btn}>
                <Text style={styles._back_btn_text}>Did'nt receive a code?</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles._heading}>Email OTP</Text>
            <Text style={styles._sub_heading}>Please enter the 4 digit OPT sent on your email and{'\n'}phone number!</Text>
            <Text style={styles._mob_number}>Olalekan@gmail.com</Text>
            <OTPInputView
              style={{
                width: "80%",
                alignSelf: "center",
                height: 100,
              }}
              code="323"
              pinCount={4}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              editable={true}
              onCodeFilled={(code) => {
                verifyHandler();
              }}
            />
            <View style={{ marginHorizontal: 20 }}>
              <Button title="Resend OTP (00:30)" height={45} onPress={() => alert("Commit soon !")} />
              <TouchableOpacity style={styles._back_btn}>
                <Text style={styles._back_btn_text}>Did'nt receive a code?</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
  _heading: {
    color: Theme.primary,
    textAlign: "center",
    marginTop: 30,
    fontFamily: Theme.medium,
    fontSize: 15,
    marginHorizontal: 20
  },
  _sub_heading: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 10,
    textAlign: "center",
    marginHorizontal: 20
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
  _line: {
    borderBottomWidth: 1,
    borderColor: "#535353",
    marginTop: 20
  },
  _mob_number: {
    color: Theme.primary,
    textAlign: "center",
    marginTop: 5,
    fontFamily: Theme.medium,
    fontSize: 13,
    marginHorizontal: 20
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#72FAEC",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  underlineStyleHighLighted: {
    borderWidth: 1,
    borderColor: "#72FAEC",
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
