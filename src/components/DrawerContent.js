import React, { Component, useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Drawer } from "react-native-paper";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

export default function CustomDrawerContent(props) {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: theme.secondry }}
    >
      {/* <StatusBar translucent backgroundColor={theme.gray} /> */}
      <View style={styles.sideMenuContainer}>
        <View style={styles._profile_container}>
          <Image
            source={require("./../images/ProfileImage.jpg")}
            style={styles._profile_image}
          />
          <View style={{ flex: 1 }}>
            <Text style={[styles._bold_text, { color: theme.primary }]}>
              Olalekan Abcdef
            </Text>
            <Text style={[styles._bold_text, { color: "white" }]}>
              olalekan.l@transxnd.com
            </Text>
          </View>

          <TouchableOpacity style={styles._btn}>
            <Text style={styles._btn_text}>TCN # 123456789</Text>
          </TouchableOpacity>
        </View>
        {/* <DrawerItemList {...props} /> */}
        <Drawer.Section style={{ backgroundColor: "gray", height: 0.5 }} />
        {/* </Drawer.Section> */}
        <DrawerItem
          style={{ color: "red" }}
          label="Historic Transcations"
          labelStyle={{
            fontFamily: theme.semiBold,
            color: theme.white,
          }}
          icon={() => <Image source={require("./../images/historic.png")} />}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate("HistoricTransactions");
          }}
        />

        {/*  */}
        <Drawer.Section style={{ backgroundColor: "gray", height: 0.5 }} />

        <DrawerItem
          style={{ color: "red" }}
          label="Cards Managements"
          labelStyle={{
            fontFamily: theme.semiBold,
            color: theme.white,
          }}
          icon={() => <Image source={require("./../images/management.png")} />}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate("CardManagement");
          }}
        />
        <Drawer.Section style={{ backgroundColor: "gray", height: 0.5 }} />

        <DrawerItem
          style={{ color: "red" }}
          label="Pay a Bill"
          labelStyle={{
            fontFamily: theme.semiBold,
            color: theme.white,
          }}
          icon={() => <Image source={require("./../images/pay.png")} />}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());

            navigation.navigate("BillType");
          }}
        />
        <Drawer.Section style={{ backgroundColor: "gray", height: 0.5 }} />

        <DrawerItem
          style={{ color: "red" }}
          label="Send Money"
          labelStyle={{
            fontFamily: theme.semiBold,
            color: theme.white,
          }}
          icon={() => <Image source={require("./../images/send.png")} />}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate("TranstionType");
          }}
        />
        <Drawer.Section style={{ backgroundColor: "gray", height: 0.5 }} />

        <DrawerItem
          style={{ color: "red" }}
          label="Refer a Friend"
          labelStyle={{
            fontFamily: theme.semiBold,
            color: theme.white,
          }}
          icon={() => <Image source={require("./../images/share.png")} />}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate("ReferFriend");
          }}
          //
        />
        <Drawer.Section style={{ backgroundColor: "gray", height: 0.5 }} />
        <View style={{ height: 300, justifyContent: "flex-end" }}>
          <DrawerItem
            style={{ color: "red" }}
            label="Account Security"
            labelStyle={{
              fontFamily: theme.semiBold,
              color: theme.white,
            }}
            icon={() => <Image source={require("./../images/historic.png")} />}
            onPress={() => {
              navigation.navigate("SecuritySettings");
            }}
          />
          <Drawer.Section style={{ backgroundColor: "gray", height: 0.5 }} />

          <DrawerItem
            style={{ color: "red" }}
            label="Profile Setting"
            labelStyle={{
              fontFamily: theme.semiBold,
              color: theme.white,
            }}
            icon={() => <Image source={require("./../images/historic.png")} />}
            onPress={() => {
              navigation.dispatch(DrawerActions.closeDrawer());
              navigation.navigate("UpdatePersonalInfo");
            }}
          />
          <Drawer.Section style={{ backgroundColor: "gray", height: 0.5 }} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  sideMenuContainer: {
    marginTop: -10,
    backgroundColor: theme.secondry,
    // padding: 0,
    // margin: 0,
    flex: 1,
  },
  _profile_container: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#1e90ff",
    // height: 230,
    marginBottom: 20,
    flexDirection: "row",
    flex: 1,
    padding: 10,
    marginTop: 40,
  },

  _profile_view: {
    borderWidth: 1,
    height: 110,
    width: 110,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 50,
  },
  _copy_right: {
    // fontFamily: "SourceSansPro_Regular",
    fontSize: 8,
    marginTop: 1,
    padding: 10,
  },
  _bold_text: {
    // fontFamily: "SourceSansPro_Regular",
    // marginTop: 20,
    fontSize: 12,
    fontFamily: theme.semiBold,
  },
  _profile_image: {
    height: 60,
    width: 60,
    borderRadius: 100,
    marginRight: 10,
  },
  _btn: {
    borderWidth: 2,
    borderColor: theme.primary,
    borderRadius: 100,
    padding: 5,
    // paddingLeft: 5,
    // paddingRight: 10,
    // paddingHorizentol: 10,
  },
  _btn_text: {
    color: theme.primary,
    fontSize: 10,
  },
});
