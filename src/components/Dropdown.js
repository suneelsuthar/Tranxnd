import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SelectCountry } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import theme from "../../theme";

const CustomDrowpdown = ({ left, data, placeholder, width }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    // <SelectCountry
    //   style={styles.dropdown}
    //   selectedTextStyle={styles.selectedTextStyle}
    //   placeholderStyle={styles.placeholderStyle}
    //   iconStyle={styles.iconStyle}
    //   containerStyle={{ color: "blue", backgroundColor: "#262626" }}
    //   activeColor="black"
    //   iconColor="#72FAEC"
    //   maxHeight={200}
    //   value={country}
    //   renderRightIcon={() => (
    //     <AntDesign
    //       style={styles.icon}
    //       color={"white"}
    //       name="Safety"
    //       size={20}
    //     />
    //   )}
    //   //   renderLeftIcon={() => <Entypo name="location" size={24} color="black" />}
    //   data={local_data}
    //   valueField="value"
    //   labelField="lable"
    //   dropdownPosition="bottom"
    //   placeholder="Select country"
    //   onChange={(e) => {
    //     setCountry(e.value);
    //   }}
    //   selectedStyle={{ color: "red" }}
    // />
    <Dropdown
      style={[styles.dropdown, { width: width ? width : "100%" }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      containerStyle={{ backgroundColor: theme.fillColor }}
      maxHeight={200}
      dropdownPosition="bottom"
      activeColor={theme.fillColor}
      labelField="label"
      iconColor="#72FAEC"
      valueField="value"
      placeholder={placeholder}
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        setValue(item.value);
        setIsFocus(false);
      }}
      renderLeftIcon={() => left}
    />
  );
};

export default CustomDrowpdown;

const styles = StyleSheet.create({
  dropdown: {
    height: 45,
    borderRadius: 100,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: "#72FAEC",
    // backgroundColor: "transparent",
  },

  placeholderStyle: {
    fontSize: 16,
    color: theme.textColor,
    paddingHorizontal: 10,
    // numberOfLines:1
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
    color: theme.textColor,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
