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

export default function Login({ navigation }) {
  let [password, setpassword] = useState("");
  let [email, setemail] = useState("");
  let [showpassword, setshowpassword] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const loginHandler = () => {
    // login api  here
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
            <TouchableOpacity style={styles._tab}>
              <Text style={styles._tab_title}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles._tab, { borderBottomWidth: 0 }]}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={[styles._tab_title, { color: "white" }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
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

            <TextInput
              icon={<FontAwesome name="envelope-o" size={16} color="#72FAEC" />}
              onPress={(e) => setemail(e)}
              placeholder="Email"
              value={email}
            />

            <TextInput
              icon={<Feather name="lock" size={16} color="#72FAEC" />}
              onPress={() => setshowpassword(!showpassword)}
              value={password}
              showpassword={showpassword}
              password={true}
              placeholder="Password"
            />
            <Text
              style={styles._forgot_text}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              Forgot Password
            </Text>
          </View>
        </View>
        {/* BIOMETRIC */}
        <View style={styles._biometric_row}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="fingerprint"
              size={44}
              color="#72FAEC"
            />
          </TouchableOpacity>
          <Text style={styles._bold_text}>Biometric Login</Text>
          <Switch
            trackColor={{ false: "#12F806", true: "#12F806" }}
            thumbColor={"white"}
            ios_backgroundColor="#12F806"
            onValueChange={() => setIsEnabled(!isEnabled)}
            value={isEnabled}
          />
        </View>
        {/* FOOTER */}

        <View style={styles._error_view}>
          <View
            style={[
              styles._row,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <FontAwesome name="warning" size={24} color="#FF3D3D" />
            <Text style={styles._error_text}>
              Any front end error will show up here!
            </Text>
          </View>
        </View>
        <Button
          outline={false}
          title="Login"
          onPress={() => loginHandler()}
          style={styles._login_btn}
          color={"black"}
          height={45}
        />
        <TouchableOpacity
          style={styles._bottom_row}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={[styles._bold_text, { flex: 0 }]}>Not a member?</Text>
          <Text style={[styles._bold_text, { flex: 0, color: "#72F9EB" }]}>
            Register Now!
          </Text>
        </TouchableOpacity>
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
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: "#444444",
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
});
