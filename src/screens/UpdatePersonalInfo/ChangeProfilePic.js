import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import Button from "../../components/Button";
import { MaterialCommunityIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
export default function ChangeProfilePic(props) {
  const [image, setImage] = useState(null);

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

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Account Settings" onPress={() => props.navigation.goBack()} />
      <ScrollView>
        <Text style={styles._heading}>Change Profile Picture</Text>
        <Text style={styles._sub_heading}>Change your profile picture! Please use a picture so face is{'\n'}fully visible and clear!</Text>
        {image === null ?
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
          </TouchableOpacity> :
          <View style={styles._uploaded_img} >
            <Image
              source={{ uri: image }}
              style={styles._card_image}
            />
          </View>
        }
        <View style={{ marginHorizontal: 20 }}>
          <Button
            outline={false}
            title="Upload form Gallery"
            onPress={() => pickImage()}
            color={"white"}
            height={45}
            bg="#000000"
            color={Theme.primary}
            icon={
              <FontAwesome5 name="images" size={20} color={Theme.primary} style={{ marginRight: 10 }} />
            }
            outline={true}
            borderColor={"#72FAEC"}
          />
          <View style={{ marginTop: 10 }} />
          <Button
            outline={false}
            title="Take a photo"
            onPress={() =>alert("comming soon !")}
            color={"white"}
            height={45}
            bg="#000000"
            color={Theme.primary}
            icon={
              <Entypo name="camera" size={20} color={Theme.primary} style={{ marginRight: 10 }} />
            }
            outline={true}
            borderColor={"#72FAEC"}
          />
        </View>



        <View style={{ paddingBottom: 30 }} />
      </ScrollView>
      <View style={styles._btn_main}>
        <Button title="Save Changes" height={45} onPress={() => alert("Comming Soon!")} />
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
  _upload_btn_view: {
    height: 240,
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
    height: 250,
    width: 250,
    borderRadius: 20,
    backgroundColor: "#1C3F3B",
    alignSelf: "center",
    marginVertical: 20
  },
  _desc: {
    color: "white",
    textAlign: "center",
    // paddingVertical: 15,
    fontWeight: "bold",
    paddingTop: 15,
  },
  _card_image: {
    height: 250,
    height: 250,
    borderRadius: 250 / 2,
  }
});
