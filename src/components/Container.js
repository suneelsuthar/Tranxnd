import React from "react";
import { View } from "react-native";
import theme from "../../theme";
export default class Container extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: theme.containerColor,
          flex: 1,
        }}
      >
        {this.props.children}
      </View>
    );
  }
}
