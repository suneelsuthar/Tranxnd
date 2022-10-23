import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useState } from "react";
import { ProgressBar } from "react-native-paper";
import SimpleHeader from "../../components/SimpleHeader";
import * as ImagePicker from "expo-image-picker";
import {
  MaterialCommunityIcons,
  Octicons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
export default function BusinessDetails({ navigation }) {
  const [image, setImage] = useState([]);
  const [img, setImg] = useState("");

  const SubmitRequest = () => {
    navigation.navigate("DashboardHome");
    //   const get Megic Lik api
  };

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
    <View style={styles.container}>
      <Header />
      <View style={styles._inner_view}>
        <SimpleHeader
          title="Register with Transxnd"
          onPress={() => navigation.goBack()}
        />

        {/* tab */}
        <View style={styles._form}>
          <Text style={styles._title}>
            Corporate <Text style={{ color: "#72FAEC" }}> Registeration!</Text>
          </Text>
          <Text style={styles._desc}>
            Please upload the following to confirm a request!
          </Text>
          {/* <Text
            style={[
              styles._title,
              { fontSize: 16, color: "#72FAEC", marginVertical: 20 },
            ]}
          >
            Personal Details
          </Text> */}

          <View style={styles._progress_row}>
            <AntDesign name="checkcircle" size={20} color="#1EE834" />
            <ProgressBar
              progress={1}
              color={"#1EE834"}
              value={100}
              width={159}
              style={{ marginHorizontal: 10 }}
            />
            <Octicons name="primitive-dot" size={24} color="#72FAEC" />
          </View>

          <Text
            style={[
              styles._bold_text,
              { textAlign: "center", textTransform: "uppercase" },
            ]}
          >
            Upload company documents
          </Text>
          <Text style={styles._desc}>
            Please upload all business registration documents including
            certificate of incorporation and registration with the relevant
            authority!
          </Text>
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

          <View style={[styles._row, { marginTop: 0 }]}>
            <ScrollView horizontal>
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
                          size={20}
                          color="red"
                        />
                      </TouchableOpacity>
                      <Image
                        source={{ uri: val }}
                        style={{ flex: 1, borderRadius: 10 }}
                      />
                    </View>
                  );
                })}
            </ScrollView>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles._footer}>
          <View style={{ margin: 20 }}>
            <Button
              outline={false}
              title="Submit Request"
              onPress={() => SubmitRequest()}
              style={styles._quick_style}
              height={45}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  _inner_view: {
    backgroundColor: "#000000",
    flex: 1,
  },
  _row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },

  _bold_text: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },

  _footer: {
    // flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  _form: {
    // flex: 1,
    justifyContent: "center",
    padding: 20,
    // alignItems: "center",
  },

  _title: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 22,
  },
  _desc: {
    color: "white",
    textAlign: "center",
    // paddingVertical: 15,
    fontWeight: "bold",
    paddingTop: 15,
  },
  _progress_row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  _upload_btn_view: {
    height: 140,
    borderWidth: 1,
    borderColor: "#72FAEC",
    borderStyle: "dashed",
    borderRadius: 10,
    marginVertical: 30,
    padding: 5,
  },
  _upload_inner_view: {
    backgroundColor: "#1C3F3B",
    flex: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  _uploaded_img: {
    height: 86,
    width: 86,
    borderRadius: 10,
    backgroundColor: "#1C3F3B",
    marginRight: 10,
    borderWidth: 3,
    borderColor: "#1C3F3B",
  },
  _cancel_btn: {
    position: "absolute",
    top: -5,
    right: -5,
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 100,
    overflow: "hidden",
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
