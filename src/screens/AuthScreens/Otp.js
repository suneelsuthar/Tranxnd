import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import SimpleHeader from "../../components/SimpleHeader";
import { FontAwesome5 } from "@expo/vector-icons";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const windowWidth = Dimensions.get("window").width;
export default function Otp({ navigation }) {
  let [verify, setverify] = useState(false);
  // useEffect(() => {
  //   if (verify && verify.length === 4) {
  //     alert("Sdf");
  //   }
  // }, [verify]);
  const verifyHandler = () => {
    setverify(true);
    setTimeout(() => {
      navigation.navigate("CompanyDetails");
      // go to Home page
    }, 2500);
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
            Register with <Text style={{ color: "#72FAEC" }}> Transxnd!</Text>
          </Text>
          <Text style={styles._desc}>
            Verify that the information you provided is correct and click Submit
            to register.
          </Text>
          {!verify ? (
            <>
              <Text
                style={[
                  styles._title,
                  {
                    fontSize: 16,
                    color: "#72FAEC",
                    marginTop: 30,
                    marginBottom: 10,
                  },
                ]}
              >
                You're almost done!
              </Text>
              <Text style={styles._desc}>
                We've sent you a 4 digit OTP. Please check you phone or email to
                finish registration!
              </Text>

              <Image
                source={require("./../../images/otpimg.png")}
                style={styles._otp_img}
              />
              <View style={styles._inner_form}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#72FAEC",
                      fontWeight: "bold",
                      marginRight: 10,
                    }}
                  >
                    +92 312 486 7888
                  </Text>
                  <FontAwesome5 name="edit" size={24} color="white" />
                </View>
                <OTPInputView
                  style={{
                    width: "80%",
                    alignSelf: "center",
                    height: 100,
                  }}
                  code="323"
                  pinCount={4}
                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                  editable={true}
                  onCodeFilled={(code) => {
                    verifyHandler();
                  }}
                />
              </View>
            </>
          ) : (
            <View>
              <Image
                source={require("./../../images/loader.png")}
                style={[styles._otp_img, { marginTop: 100 }]}
              />
              <Text style={[styles._desc, { alignSelf: "center" }]}>
                {`Please wait while we process\nyour information`}
              </Text>
              {/*  */}
            </View>
          )}
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
    justifyContent: "center",
    alignItems: "center",
  },

  _bold_text: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
    // flex: 1,
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
  _otp_img: {
    alignSelf: "center",
    marginVertical: 20,
  },
  borderStyleHighLighted: {
    width: 40,
    height: 54,
    borderWidth: 0,
  },

  underlineStyleBase: {
    width: 40,
    height: 54,
    borderWidth: 1,
    borderColor: "#72FAEC",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  underlineStyleHighLighted: {
    borderWidth: 1,
    borderColor: "#72FAEC",
  },
});
