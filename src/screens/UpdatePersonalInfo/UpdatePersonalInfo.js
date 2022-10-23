import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Theme from "./../../../theme";
import Header from "./../../components/Header";
import SimpleHeader from "../../components/SimpleHeader";
import DateOfBirth from "./../../images/SVG/DateOfBirth.svg";
import Button from "../../components/Button";
import TextInput from "./../../components/TextInpu";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import CustomDrowpdown from "../../components/Dropdown";
import CountryDropdown from "../../components/CountryPicker";

export default function UpdatePersonalInfo(props) {
  let [fistName, setFirstName] = useState("Olalekan");
  let [lastName, setLastName] = useState("Abcdefg");
  let [dataOfBirth, setDateOfBirth] = useState("September 26, 1995");
  let [email, setEmail] = useState("olalekan123@gmail.com");
  let [mobileNumber, setMobileNumber] = useState("+92 335 5623 751");
  const countries = [
    { label: "Pakistan", value: "Pakistan" },
    { label: "India", value: "India" },
    { label: "USA", value: "USA" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader
        title="Update Personal Information"
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView>
        <Text style={styles._heading}>Update Personal Information</Text>
        <Text style={styles._sub_heading}>
          Request a change to your profile details. Please note that{"\n"}
          changes are subject to provision of a proof such as a valid{"\n"}
          identity card/passport and verification by our team!
        </Text>
        <Text style={styles._heading}>Personal Details</Text>
        <View style={styles._data_main}>
          <View style={styles._first_last_name_main}>
            <View style={styles._first_name}>
              <TextInput
                icon={<AntDesign name="user" size={20} color={Theme.primary} />}
                onChangeText={(e) => setFirstName(e)}
                placeholder="First Name"
                value={fistName}
              />
            </View>
            <View style={styles._first_name}>
              <TextInput
                icon={<AntDesign name="user" size={20} color={Theme.primary} />}
                onChangeText={(e) => setLastName(e)}
                placeholder="Last Name"
                value={lastName}
              />
            </View>
          </View>
          <TextInput
            icon={<DateOfBirth width={20} height={20} fill={Theme.primary} />}
            onChangeText={(e) => setDateOfBirth(e)}
            placeholder="Date Of Birth"
            value={dataOfBirth}
          />
          <TextInput
            icon={<Feather name="mail" size={20} color={Theme.primary} />}
            onChangeText={(e) => setEmail(e)}
            placeholder="Email Address"
            value={email}
          />
        </View>
        <Text style={styles._heading}>Contact Details</Text>
        <View style={styles._data_main}>
          <CustomDrowpdown
            placeholder="Pakistan"
            data={countries}
            left={
              <Ionicons
                name="ios-location-outline"
                size={20}
                color={Theme.primary}
              />
            }
          />
          <View style={{ marginTop: 10 }} />
          {/* <TextInput
            icon={<FontAwesome name="mobile-phone" size={20} color={Theme.primary} />}
            onChangeText={(e) => setMobileNumber(e)}
            placeholder="Location"
            value={mobileNumber}
          /> */}
          <CountryDropdown />
        </View>
      </ScrollView>
      <View style={styles._btn_main}>
        <Button
          title="Request Change"
          height={45}
          onPress={() => alert("Comming Soon!")}
        />
        <TouchableOpacity
          style={styles._back_btn}
          onPress={() => props.navigation.goBack()}
        >
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
    marginTop: 30,
    fontFamily: Theme.medium,
    fontSize: 15,
    marginBottom: 5,
  },
  _btn_main: {
    backgroundColor: Theme.secondry,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  _profile_image: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
  },
  _data_main: {
    paddingHorizontal: 20,
    marginTop: 5,
  },
  _first_last_name_main: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _first_name: {
    width: "48%",
  },
  _sub_heading: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 10,
    textAlign: "center",
  },
  _back_btn: {
    textAlign: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  _back_btn_text: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 14,
  },
});
