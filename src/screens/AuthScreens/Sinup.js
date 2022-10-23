import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";
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
export default function Signup({ navigation }) {
  let [password, setpassword] = useState("");
  let [email, setemail] = useState("");
  let [showpassword, setshowpassword] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const signupHandler = () => {
    // signup api  here
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles._inner_view}>
        <Button
          outline={false}
          title="Quick Balance"
          onPress={() => navigation.navigate("QuickBalance")}
          style={styles._quick_style}
          height={34}
        />

        {/* tab */}
        <View style={styles._form}>
          <View style={styles._row}>
            <TouchableOpacity
              style={[styles._tab, { borderBottomWidth: 0 }]}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={[styles._tab_title, { color: "white" }]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles._tab]}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={[styles._tab_title]}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles._title}>
            Please select how'd you like to register with us!
          </Text>
          <View style={styles._inner_form}>
            <Button
              icon={<EvilIcons name="sc-facebook" size={24} color="white" />}
              outline={true}
              title="Register using Facebook"
              onPress={() => alert("")}
              bg="#3C66C4"
              color="white"
              borderColor={"#3C66C4"}
              style={styles._btn_style}
            />

            <Button
              icon={<AntDesign name="google" size={20} color="white" />}
              outline={true}
              title="Register using Google"
              onPress={() => alert("")}
              bg="#CB4636"
              color="white"
              borderColor={"#CB4636"}
              style={styles._btn_style}
            />

            <View style={styles._or_row}>
              <Text style={styles._or_text}>OR</Text>
            </View>
            <Button
              icon={
                <MaterialCommunityIcons
                  name="email-open"
                  size={16}
                  color="white"
                />
              }
              outline={true}
              title="Register using Email"
              onPress={() => navigation.navigate("PersonalDetails")}
              bg="#27BDAD"
              color="white"
              borderColor={"#27BDAD"}
              style={styles._btn_style}
            />
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles._footer}>
          <View style={{ margin: 20 }}>
            <Button
              outline={false}
              title="Register as a corporate client"
              onPress={() => signupHandler()}
              color={"white"}
              height={45}
              bg="#000000"
              icon={
                <Foundation name="shopping-bag" size={24} color="#72F9EB" />
              }
              outline={true}
              borderColor={"#72FAEC"}
            />
          </View>
          <TouchableOpacity
            style={styles._bottom_row}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles._bold_text, { flex: 0 }]}>
              Already a member?{" "}
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
    alignSelf: "flex-end",
  },
  _inner_view: {
    backgroundColor: "#000000",
    flex: 1,
    padding: 20,
  },
  _btn_style: {
    marginBottom: 10,
  },
  _quick_style: {
    backgroundColor: "#72FAEC",
    color: "white",
    borderColor: "#72FAEC",
    width: 140,
    alignSelf: "flex-end",
    height: 50,
    margin: 15,
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
    // borderTopWidth: 0.3,
    // borderBottomWidth: 0.3,
    // borderColor: "#444444",
    backgroundColor: "#060D0C",
    padding: 10,
    paddingTop: 40,
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
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
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
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  _title: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
