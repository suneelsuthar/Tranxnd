import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Theme from "./../../../theme";
import Header from "./../../components/Header";
import SimpleHeader from "../../components/SimpleHeader";
import SearchCard from "../../components/SearchCard";
import DisburseSalaries from "./../../images/SVG/DisburseSalaries.svg";
import Statement from "./../../images/SVG/Statement.svg";
import Iconawesomegift from "./../../images/SVG/Iconawesomegift.svg";
import Text from "../../components/Text";
import theme from "./../../../theme";
export default function EmployeeManagement(props) {
  let HeaderCard = [
    {
      icon: <DisburseSalaries width={30} height={26} fill={Theme.primary} />,
      title: `Disburse${"\n"}Salaries`,
      path: "SearchDashboard",
    },
    {
      icon: <Statement width={26} height={33} fill={Theme.primary} />,
      title: `View${"\n"}E-Statement`,
    },
    {
      icon: <Iconawesomegift width={32} height={28} fill={Theme.primary} />,
      title: `Send${"\n"}Bonus`,
      path: "SearchBonus",
    },
  ];
  let CardData = [
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      id: "EMP12345",
      cardName: "GIM Card",
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      id: "EMP12345",
      cardName: "GIM Card",
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      id: "EMP12345",
      cardName: "GIM Card",
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      id: "EMP12345",
      cardName: "GIM Card",
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      id: "EMP12345",
      cardName: "GIM Card",
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      id: "EMP12345",
      cardName: "GIM Card",
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      id: "EMP12345",
      cardName: "GIM Card",
    },
    {
      firstAndLastName: "AS",
      userName: "Salman Altaf",
      ibn: "IBAN 1234-5678-1234-5678",
      email: "salman.altaf@hotmail.com",
      id: "EMP12345",
      cardName: "GIM Card",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader
        title="Employee Managment"
        onPress={() => props.navigation.goBack()}
        right={
          <TouchableOpacity
            onPress={() => props.navigation.navigate("EmployeDetails")}
            style={styles._add}
          >
            <Text style={styles._add_Text}>Add an employee</Text>
          </TouchableOpacity>
        }
      />
      <View style={styles._card_main}>
        {HeaderCard.map((v, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={styles._header_card}
              onPress={() =>
                v.path ? props.navigation.navigate(v.path) : null
              }
            >
              {v.icon}
              <Text style={styles._header_card_title}>{v.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={styles._heading}>Your Employees</Text>
      <ScrollView>
        {CardData.map((v, i) => {
          return (
            <SearchCard
              key={i}
              firstAndLastName={v.firstAndLastName}
              userName={v.userName}
              ibn={v.ibn}
              email={v.email}
              cardImage={true}
              Id={v.id}
              cardName={v.cardName}
              // onPress={() => props.navigation.navigate("RecipientDetails")}
            />
          );
        })}
        <View style={{ marginBottom: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.secondry,
  },
  _add: {
    backgroundColor: Theme.primary,
    borderRadius: 50,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  _add_Text: {
    color: Theme.secondry,
    fontFamily: Theme.medium,
    fontSize: 13,
  },
  _card_main: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
  },
  _header_card: {
    width: "30%",
    backgroundColor: theme.simpleCardColor,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginRight: 5,
  },
  _header_card_title: {
    fontFamily: Theme.semiBold,
    fontSize: 10,
    textAlign: "center",
    marginTop: 5,
  },
  _heading: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: Theme.medium,
  },
});
