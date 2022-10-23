import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import DriversLicense from './../../images/SVG/DriversLicense.svg';
import Button from "../../components/Button";
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import CustomDrowpdown from "../../components/Dropdown";
import * as ImagePicker from "expo-image-picker";
export default function ProofofVerification(props) {
  const [image, setImage] = useState([]);
  const [img, setImg] = useState("");
  const countries = [
    { label: "Pakistan", value: "Pakistan" },
    { label: "India", value: "India" },
    { label: "USA", value: "USA" },
  ];
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      image.push(result.uri);
      setImage(image);
      setImg(result.uri);
    }
  };
  const removeImg = (i, uri) => {
    let arr = image;
    arr.splice(i, 1);
    setImage(image);
    setImg(i);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Update Personal Information" onPress={() => props.navigation.goBack()} />
      <ScrollView>
        <Text style={styles._heading}>Proof of Verification</Text>
        <Text style={styles._sub_heading}>Please ensure that your profile data is correct and up-to-date{'\n'}before sending a request for change. Invalid or incorrect{'\n'}information my lead to rejection of request and account{'\n'}blockage!</Text>
        <Text style={styles._heading}>Identification Type</Text>
        <View style={styles._data_main}>
          <CustomDrowpdown
            placeholder="Driver's License"
            data={countries}
            left={<DriversLicense width={20} height={20} fill={Theme.primary} />}
          />
        </View>
        <Text style={styles._heading}>Driver's License Front Image</Text>
        <TouchableOpacity
          style={styles._upload_btn_view}
          activeOpacity={0.5}
          onPress={() => pickImage()}
        >
          <View style={styles._upload_inner_view}>
            <MaterialCommunityIcons name="upload" size={34} color="#72FAEC" />
            <Text style={[styles._desc, { paddingTop: 0 }]}>
              Upload Image from gallery or
            </Text>
            <Text style={[styles._bold_text, { color: "#72FAEC" }]}>
              capture a photo!
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={styles._heading}>Driver's License Back Image</Text>
        {image.length !== 0 &&
          image.map((val, i) => {
            return (
              <View style={styles._uploaded_img} key={i}>
                <TouchableOpacity
                  style={styles._cancel_btn}
                  activeOpacity={0.8}
                  onPress={() => removeImg(i, val)}
                >
                  <Entypo
                    name="circle-with-cross"
                    size={30}
                    color="red"
                  />
                </TouchableOpacity>
                <Image
                  source={{ uri: val }}
                  style={styles._card_image}
                />
              </View>
            );
          })}
        <View style={{ paddingBottom: 30 }} />
      </ScrollView>
      <View style={styles._btn_main}>
        <Button title="Submit for verification" height={45} onPress={() => alert("Comming Soon!")} />
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
  _heading: {
    color: Theme.primary,
    textAlign: "center",
    marginTop: 30,
    fontFamily: Theme.medium,
    fontSize: 15,
    marginBottom: 5
  },
  _btn_main: {
    backgroundColor: Theme.secondry,
    paddingHorizontal: 30,
    marginTop: 10
  },
  _profile_image: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
  },
  _data_main: {
    paddingHorizontal: 20,
    marginTop: 5
  },
  _first_last_name_main: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  _first_name: {
    width: "48%",
  },
  _sub_heading: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 10,
    textAlign: "center"
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
  _upload_btn_view: {
    height: 140,
    borderWidth: 1,
    borderColor: "#72FAEC",
    borderStyle: "dashed",
    borderRadius: 10,
    marginVertical: 30,
    padding: 5,
    marginHorizontal: 20
  },
  _upload_inner_view: {
    backgroundColor: "#1C3F3B",
    flex: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  _uploaded_img: {
    height: 193,
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  _desc: {
    color: "white",
    textAlign: "center",
    // paddingVertical: 15,
    fontWeight: "bold",
    paddingTop: 15,
  },
  _cancel_btn: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 100,
    overflow: "hidden",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  _card_image: {
    height: 193,
    width: "100%",
    borderRadius: 10,
    marginTop: 10
  }
});
