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
import * as ImagePicker from "expo-image-picker";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import CountryDropdown from "../../components/CountryPicker";
export default function AccountSettings(props) {
  const [image, setImage] = useState(null);
  let [fistName, setFirstName] = useState("Olalekan");
  let [lastName, setLastName] = useState("Abcdefg");
  let [dataOfBirth, setDateOfBirth] = useState("September 26, 1995");
  let [email, setEmail] = useState("olalekan123@gmail.com");
  let [location, setLocation] = useState("Pakistan");
  let [mobileNumber, setMobileNumber] = useState("+92 335 5623 751");
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader
        title="Account Settings"
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView>
        <View style={styles._profile_main}>
          <View>
            {image === null ? (
              <Image
                source={require("./../../images/ProfileImage.jpg")}
                style={styles._profile_image}
              />
            ) : (
              <Image source={{ uri: image }} style={styles._profile_image} />
            )}
            <TouchableOpacity
              style={styles._upload_profile}
              onPress={pickImage}
            >
              <Ionicons
                name="ios-camera-sharp"
                size={15}
                color={Theme.primary}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles._name}>Olalekan Abcdef</Text>
            <Text style={styles._email}>olalekan.l@transxnd.com</Text>
          </View>
          <View style={styles._token_main}>
            <Text style={styles._token}>TCN # 123456789</Text>
          </View>
        </View>
        <Text style={styles._heading}>Personal Details</Text>
        <View style={styles._data_main}>
          <View style={styles._first_last_name_main}>
            <View style={styles._first_name}>
              <Text style={styles._input_heading}>First Name</Text>
              <TextInput
                icon={<AntDesign name="user" size={20} color={Theme.primary} />}
                onChangeText={(e) => setFirstName(e)}
                placeholder="First Name"
                value={fistName}
              />
            </View>
            <View style={styles._first_name}>
              <Text style={styles._input_heading}>First Name</Text>
              <TextInput
                icon={<AntDesign name="user" size={20} color={Theme.primary} />}
                onChangeText={(e) => setLastName(e)}
                placeholder="Last Name"
                value={lastName}
              />
            </View>
          </View>
          <Text style={styles._input_heading}>Date of Birth</Text>
          <TextInput
            icon={<DateOfBirth width={20} height={20} fill={Theme.primary} />}
            onChangeText={(e) => setDateOfBirth(e)}
            placeholder="Date Of Birth"
            value={dataOfBirth}
          />
          <Text style={styles._input_heading}>Email Address</Text>
          <TextInput
            icon={<Feather name="mail" size={20} color={Theme.primary} />}
            onChangeText={(e) => setEmail(e)}
            placeholder="Email Address"
            value={email}
          />
        </View>
        <Text style={styles._heading}>Contact Details</Text>
        <View style={styles._data_main}>
          <Text style={styles._input_heading}>Location</Text>
          <TextInput
            icon={
              <Ionicons
                name="ios-location-outline"
                size={20}
                color={Theme.primary}
              />
            }
            onChangeText={(e) => setLocation(e)}
            placeholder="Location"
            value={location}
          />
          <Text style={styles._input_heading}>Mobile Number</Text>
          <CountryDropdown />
        </View>
      </ScrollView>
      <View style={styles._btn_main}>
        <Button
          title="Update Details"
          height={45}
          onPress={() => alert("Comming Soon!")}
        />
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
  _profile_main: {
    borderBottomWidth: 1,
    borderColor: "#535353",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _name: {
    color: Theme.primary,
    fontSize: 15,
    fontFamily: Theme.medium,
  },
  _email: {
    color: Theme.white,
    fontSize: 10,
    fontFamily: Theme.regular,
  },
  _token_main: {
    borderWidth: 1,
    borderColor: Theme.primary,
    borderRadius: 50,
    height: 29,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  _token: {
    color: Theme.primary,
    fontFamily: Theme.medium,
    fontSize: 10,
  },
  _upload_profile: {
    width: 26,
    height: 26,
    borderRadius: 26 / 2,
    backgroundColor: Theme.gray,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -13,
    marginLeft: 30,
  },
  _data_main: {
    backgroundColor: "#060D0C",
    borderBottomWidth: 1,
    borderColor: "#535353",
    borderTopWidth: 1,
    padding: 20,
  },
  _input_heading: {
    color: Theme.primary,
    fontSize: 14,
    fontFamily: Theme.medium,
    marginBottom: 5,
    marginTop: 5,
  },
  _first_last_name_main: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _first_name: {
    width: "48%",
  },
});
