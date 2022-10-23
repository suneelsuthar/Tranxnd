import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import TextInput from "../../components/TextInpu";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import CustomDrowpdown from "../../components/Dropdown";
import SimpleHeader from "../../components/SimpleHeader";
import { Octicons } from "@expo/vector-icons";
import CountryDropdown from "../../components/CountryPicker";
const windowWidth = Dimensions.get("window").width;
export default function ContactDetails({ navigation }) {
  let [password, setpassword] = useState("");
  let [cpassword, setcpassword] = useState("");
  let [dob, setdob] = useState("");
  let [fname, setfname] = useState("");
  let [lname, setlname] = useState("");
  let [email, setemail] = useState("");
  let [showpassword, setshowpassword] = useState(false);
  let [showcpassword, setshowcpassword] = useState(false);

  const getMegicLind = () => {
    navigation.navigate("Otp");
    //   const get Megic Lik api
  };

  const countries = [
    { label: "Pakistan", value: "Pakistan" },
    { label: "India", value: "India" },
    { label: "USA", value: "USA" },
  ];
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
            Register with <Text style={{ color: "#72FAEC" }}> Transxnd!</Text>
          </Text>
          <Text style={styles._desc}>
            Verify that the information you provided is correct and click Submit
            to register.
          </Text>
          <Text
            style={[
              styles._title,
              { fontSize: 16, color: "#72FAEC", marginVertical: 20 },
            ]}
          >
            Contact Details
          </Text>
          <View style={styles._inner_form}>
            <TextInput
              icon={<Feather name="lock" size={16} color="#72FAEC" />}
              onPress={() => setshowpassword(!showpassword)}
              value={password}
              showpassword={showpassword}
              onChangeText={(e) => setpassword(e)}
              password={true}
              placeholder="Referral ID (Optional)"
            />

            <CountryDropdown />

            <CustomDrowpdown
              placeholder="Country of Residence"
              data={countries}
              left={
                <Octicons
                  name="location"
                  style={styles.icon}
                  color={"#72FAEC"}
                  size={20}
                />
              }
            />
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles._footer}>
          <View style={styles._error_view}>
            <View
              style={[
                styles._row,
                { justifyContent: "center", alignItems: "center" },
              ]}
            >
              <FontAwesome name="warning" size={24} color="#FF3D3D" />
              <Text style={styles._error_text}>
                Password does't match. Please reenter!
              </Text>
            </View>
          </View>
          <View style={{ margin: 20 }}>
            <Button
              outline={false}
              title="Register"
              onPress={() => getMegicLind()}
              style={styles._quick_style}
              height={45}
            />
          </View>

          <TouchableOpacity
            style={styles._bottom_row}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles._bold_text, { flex: 0 }]}>
              Already a member?
            </Text>
            <Text style={[styles._bold_text, { flex: 0, color: "#72F9EB" }]}>
              Login!
            </Text>
          </TouchableOpacity>
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
  _btn_style: {
    // alignSelf: "flex-end",
  },
  _inner_view: {
    backgroundColor: "#000000",
    flex: 1,
  },
  _btn_style: {
    marginBottom: 10,
    width: "100%",
  },
  _quick_style: {
    backgroundColor: "#72FAEC",
    color: "white",
    borderColor: "#72FAEC",
    width: "100%",
    margin: 15,
    alignSelf: "center",
  },
  _row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  _tab: {
    borderBottomWidth: 2,
    borderColor: "#72FAEC",
    width: 120,
    padding: 10,
  },
  _tab_title: {
    color: "#72FAEC",
    fontWeight: "bold",
    textAlign: "center",
  },
  _inner_form: {
    backgroundColor: "#060D0C",
  },
  _or_row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#3C847D",
    justifyContent: "center",
    marginVertical: 20,
    marginBottom: 30,
  },
  _or_text: {
    color: "#3C847D",
    marginBottom: -10,
    backgroundColor: "#060D0C",
    paddingHorizontal: 10,
    color: "white",
    fontWeight: "bold",
  },
  _forgot_text: {
    color: "#72FAEC",
    fontWeight: "bold",
    alignSelf: "flex-end",
    fontSize: 12,
  },
  _biometric_row: {
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: "#444444",
    backgroundColor: "#060D0C",
    alignItems: "center",
    flexDirection: "row",
    height: 60,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  _bold_text: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
    flex: 1,
  },
  _login_btn: {
    backgroundColor: "#72FAEC",
    color: "white",
    borderColor: "#72FAEC",
    width: "80%",
    // height: 70,
    margin: 15,
    alignSelf: "center",
  },
  _error_view: {
    justifyContent: "flex-end",
  },
  _error_text: {
    color: "#FF3D3D",
    fontWeight: "bold",
    paddingLeft: 10,
  },
  _bottom_row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  _footer: {
    // flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  _form: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
    // alignItems: "center",
  },
  _forgot_img: {
    alignSelf: "center",
    marginBottom: 40,
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
});
