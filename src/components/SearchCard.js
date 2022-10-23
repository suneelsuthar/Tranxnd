import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import theme from "./../../theme";
import Theme from "./../../theme";
import IssueCard from "./../images/SVG/IssueCard.svg";
import Text from "./Text";
let SearchCard = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles._card_main,
        // { backgroundColor: props.bgColorShow ? "#112623" : "#060D0C" },
      ]}
      onPress={props.onPress}
    >
      {props.select && (
        <View style={styles._active_main}>
          <View
            style={
              props.selected
                ? styles._selected_active
                : styles._un_selected_active
            }
          />
        </View>
      )}
      <View style={styles._profile_main}>
        <Text style={styles._first_last_name}>{props.firstAndLastName}</Text>
      </View>
      <View style={styles._user_details_main}>
        <Text style={styles._name}>{props.userName}</Text>
        <Text style={styles._ibn_num}>{props.ibn}</Text>
        <Text style={styles._email}>{props.email}</Text>
      </View>
      <View
        style={
          props.select
            ? styles._select_active_bank_details_main
            : styles._bank_details_main
        }
      >
        {props.cardImage ? (
          <>
            <Text style={styles._card_id}>{props.Id}</Text>
            {/* <Text /> */}
            <View style={styles._card_name_main}>
              <Text style={styles._card_name}>{props.cardName}</Text>
              <IssueCard width={27} height={17} fill={Theme.primary} />
            </View>
          </>
        ) : (
          <>
            {/* <Text /> */}
            <Text style={styles._ex_bank_name}>{props.exBank}</Text>
            {!props.ShowBankNamme && (
              <Text style={styles._bank_name}>{props.bankName}</Text>
            )}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};
let styles = StyleSheet.create({
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderTopColor: theme.primary,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.primary,
    backgroundColor: theme.fillColor,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  _profile_main: {
    width: 58,
    height: 58,
    borderRadius: 58 / 2,
    borderWidth: 1,
    borderColor: Theme.primary,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  _user_details_main: {
    width: "45%",
  },
  _bank_details_main: {
    width: "35%",
    alignItems: "flex-end",
  },
  _select_active_bank_details_main: {
    width: "28%",
    alignItems: "flex-end",
  },
  _name: {
    color: Theme.primary,
    fontFamily: Theme.medium,
    fontSize: 15,
    margin: 0,
    padding: 0,
  },
  _ibn_num: {
    // color: Theme.white,
    fontSize: 9,
    fontFamily: Theme.regular,
    margin: 0,
    padding: 0,
  },
  _email: {
    // color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 8,
  },
  _ex_bank_name: {
    fontSize: 15,
    fontFamily: Theme.medium,
    color: Theme.primary,
  },
  _bank_name: {
    fontFamily: Theme.regular,
    fontSize: 8,
    // color: Theme.white,
  },
  _first_last_name: {
    color: Theme.textColor,
    fontFamily: Theme.medium,
    fontSize: 23,
  },
  _card_id: {
    // color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 10,
  },
  _card_name: {
    // color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 10,
    marginRight: 5,
  },
  _card_name_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _active_main: {
    backgroundColor: "#112626",
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  _selected_active: {
    width: 10,
    height: 10,
    backgroundColor: Theme.primary,
    borderRadius: 10 / 2,
  },
  _un_selected_active: {
    width: 10,
    height: 10,
    backgroundColor: "#112626",
    borderRadius: 10 / 2,
  },
});
export default SearchCard;
