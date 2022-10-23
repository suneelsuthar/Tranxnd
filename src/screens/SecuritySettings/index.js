import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import Error from './../../images/SVG/Error.svg';
import Button from "../../components/Button";
import TextInput from './../../components/TextInpu';
import { Feather } from '@expo/vector-icons';
export default function SecuritySettings(props) {
  let [password, setpassword] = useState("");
  let [newPassword, setNewPassword] = useState("");
  let [showpassword, setshowpassword] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Security Settings" onPress={() => props.navigation.goBack()} />
      <ScrollView style={styles._sroll_view}>
        <Text style={styles._heading}>Security Settings</Text>
        <Text style={styles._sub_heading}>Share referral link on social media on your favorite social{'\n'}networking websites!</Text>
        <Text style={styles._heading}>Old Password</Text>
        <TextInput
          icon={<Feather name="lock" size={16} color="#72FAEC" />}
          onPress={() => setshowpassword(!showpassword)}
          value={password}
          showpassword={showpassword}
          password={true}
          placeholder="Password"
          onChangeText={(e) => setpassword(e)}
        />
        <Text style={styles._heading2}>New Password</Text>
        <TextInput
          icon={<Feather name="lock" size={16} color="#72FAEC" />}
          onPress={() => setshowpassword(!showpassword)}
          value={newPassword}
          showpassword={showpassword}
          password={true}
          placeholder="New Password"
          onChangeText={(e) => setNewPassword(e)}
        />
        <Text style={styles._heading2}>Confirm New Password</Text>
        <TextInput
          icon={<Feather name="lock" size={16} color="#72FAEC" />}
          onPress={() => setshowpassword(!showpassword)}
          value={newPassword}
          showpassword={showpassword}
          password={true}
          placeholder="Confirm New Password"
          onChangeText={(e) => setNewPassword(e)}
        />
        <Text style={styles._message}>MUST contain at least 8 characters (12+ recommended){'\n'}MUST contain at least one uppercase letter{'\n'}MUST contain at least one lowercase letter.</Text>
        <View style={styles._error_main}>
          <Error width={27} height={20} fill={Theme.errorColor} />
          <Text style={styles._error_show}>Any front end error will show up here!</Text>
        </View>
        <View style={styles._btn_main}>
          <Button title="Change Password" height={45} onPress={() => alert("Comming Soon!")} />
          <TouchableOpacity style={styles._back_btn} onPress={() => props.navigation.goBack()}>
            <Text style={styles._back_btn_text}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  _heading2: {
    color: Theme.primary,
    textAlign: "center",
    marginTop: 10,
    fontFamily: Theme.medium,
    fontSize: 15,
    marginBottom: 5
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
  _message: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 10,
    textAlign: "center",
    marginTop: 20
  }
});
