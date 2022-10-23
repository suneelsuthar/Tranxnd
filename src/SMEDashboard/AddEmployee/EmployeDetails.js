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
import Button from "../../components/Button";
import TextInput from "./../../components/TextInpu";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import CustomDrowpdown from "../../components/Dropdown";
import CountryDropdown from "../../components/CountryPicker";

export default function EmployeDetails(props) {
  let [fistName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [EmployeeDesignation, setEmployeeDesignation] = useState("");
  let [email, setEmail] = useState("");
  let [mobileNumber, setMobileNumber] = useState("");
  let [ReferralID, setReferralID] = useState("");
  let [save, setSave] = useState(true);
  const countries = [
    { label: "Pakistan", value: "Pakistan" },
    { label: "India", value: "India" },
    { label: "USA", value: "USA" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader
        title="Add an Employee"
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView>
        <Text style={styles._sub_heading}>
          Add employee to your business account! These employees{"\n"}will be
          added in the send salaries list!
        </Text>
        <Text style={styles._heading}>EMPLOYEE DETAILS</Text>
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
            icon={<AntDesign name="user" size={20} color={Theme.primary} />}
            onChangeText={(e) => setEmployeeDesignation(e)}
            placeholder="Employee Designation"
            value={EmployeeDesignation}
          />
          <TextInput
            icon={<Feather name="mail" size={20} color={Theme.primary} />}
            onChangeText={(e) => setEmail(e)}
            placeholder="Email Address"
            value={email}
          />
        </View>
        <View style={styles._data_main}>
          <CustomDrowpdown
            placeholder="Country of Residence"
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

          <CountryDropdown />

          {/* <TextInput
            icon={
              <FontAwesome
                name="mobile-phone"
                size={20}
                color={Theme.primary}
              />
            }
            onChangeText={(e) => setMobileNumber(e)}
            placeholder="Phone Number"
            value={mobileNumber}
          /> */}
          <CountryDropdown />
          <TextInput
            icon={
              <MaterialIcons
                name="lock-outline"
                size={20}
                color={Theme.primary}
              />
            }
            onChangeText={(e) => setReferralID(e)}
            placeholder="Referral ID (Optional)"
            value={ReferralID}
          />
          <TouchableOpacity
            style={styles._save_main}
            onPress={() => setSave(!save)}
          >
            <View style={styles._select_main}>
              <View style={save ? styles._selected : styles._not_selected} />
            </View>
            <Text style={styles._save_title}>
              Send a notification every time you send payment on this account!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles._btn_main}>
        <Button
          title="Next"
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
    fontFamily: Theme.medium,
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10,
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
    marginTop: 10,
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
    justifyContent: "center",
  },
  _selected: {
    backgroundColor: Theme.primary,
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
  },
  _not_selected: {
    backgroundColor: Theme.secondry,
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
  },
  _save_title: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 14,
    marginLeft: 10,
    marginTop: 5,
  },
});
