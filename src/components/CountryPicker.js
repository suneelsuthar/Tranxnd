import React from "react";
import { View, Text } from "react-native";

// import IntlPhoneInput from 'react-native-intl-phone-input';
import IntlPhoneInput from "react-native-intl-phone-input";
import theme from "../../theme";

class EnterPhone extends React.Component {
  constructor() {
    super();
    this.state = {
      PhoneNumber: "",
      CountryCode: "+92",
      PhoneNumberError: "",
      isLoading: false,
      number: "",
      numberfocused: false,
      numberError: "",
      searchText: "",
      countryName: "",
    };
  }

  countrycode = (props) => {
    this.setState({ CountryCode: props });
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  onChangeText = ({
    dialCode,
    unmaskedPhoneNumber,
    phoneNumber,
    isVerified,
  }) => {
    console.log(
      "dialCode",
      dialCode,
      "unmaskedPhoneNumber",
      unmaskedPhoneNumber,
      "phoneNumber",
      phoneNumber,
      "isVerified",
      isVerified
    );
    this.setState({
      CountryCode: dialCode.substring(1),
      PhoneNumber: phoneNumber.replace(/\s/g, ""),
    });
  };
  render() {
    return (
      <IntlPhoneInput
        containerStyle={{
          backgroundColor: "transparent",
          borderRadius: 100,
          borderWidth: 1,
          borderColor: theme.primary,
          padding: 0,
          height: 45,
          marginBottom: 10,
          //   alignItems: "center",
        }}
        // flagStyle={{ height: 30, width: 30 }}
        onChangeText={this.onChangeText}
        phoneInputStyle={{
          color: "white",
          fontFamily: theme.regular,
          alignItems: "center",
          paddingTop: 5,
          //   marginVertical: 10,
        }}
        dialCodeTextStyle={{
          color: "white",
          fontFamily: theme.regular,
          paddingTop: 5,
          borderRightWidth: 1,
          borderColor: theme.white,
          paddingRight: 10,
        }}
      />
    );
  }
}

export default EnterPhone;
