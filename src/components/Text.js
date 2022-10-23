import React from "react";
import { Text } from "react-native";
import theme from "../../theme";
export default class CustomText extends React.Component {
  render() {
    return (
      <Text
        style={[
          this.props.style,
          { color: this.props.style.color? this.props.style.color: theme.textColor },
        ]}
      >
        {this.props.children}
      </Text>
    );
  }
}
