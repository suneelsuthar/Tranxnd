import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Share } from "react-native";
import Theme from './../../../theme';
import Header from './../../components/Header';
import SimpleHeader from "../../components/SimpleHeader";
import Facebook from './../../images/SVG/Facebook.svg'
import Whatsapp from './../../images/SVG/Whatsapp.svg'
import Google from './../../images/SVG/Google.svg'
import Instagram from './../../images/SVG/Instagram.svg'
import Snap from './../../images/SVG/Snap.svg'
import Twitter from './../../images/SVG/Twitter.svg'
import Button from "../../components/Button";
import TextInput from './../../components/TextInpu';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export default function ReferFriend(props) {
  let [email, setEmail] = useState("");
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SimpleHeader title="Refer a friend" onPress={() => props.navigation.goBack()} />
      <ScrollView style={styles._sroll_view}>
        <Text style={styles._heading}>Share on social media</Text>
        <Text style={styles._sub_heading}>Share referral link on social media on your favorite social{'\n'}networking websites!</Text>
        <View style={styles._social_main}>
          <TouchableOpacity>
            <Facebook width={38} height={38} fill={Theme.primary} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Whatsapp width={38} height={38} fill={Theme.primary} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Google width={38} height={38} fill={Theme.primary} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Instagram width={38} height={38} fill={Theme.primary} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Twitter width={38} height={38} fill={Theme.primary} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Snap width={38} height={38} fill={Theme.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles._or_main}>
          <View style={styles._line} />
          <Text style={styles._or}>OR</Text>
          <View style={styles._line} />
        </View>
        <Text style={styles._heading}>Enter friend's email</Text>
        <Text style={styles._sub_heading}>Send a personalized email link to your friend or family!{'\n'}Simply enter email and send a referral link!</Text>
        <View style={styles._input_main}>
          <TextInput
            icon={<Feather name="mail" size={20} color={Theme.primary} />}
            onChangeText={(e) => setEmail(e)}
            placeholder="Recipient Email Address"
            value={email}
          />
        </View>
        <View style={styles._btn_main}>
          <Button title="Share Now" height={45} onPress={onShare} />
        </View>
        <View style={styles._or_main}>
          <View style={styles._line} />
          <Text style={styles._or}>OR</Text>
          <View style={styles._line} />
        </View>
        <Text style={styles._heading}>Share via invite link</Text>
        <Text style={styles._sub_heading}>Copy the invite link and send to your friends or family via{'\n'}messages or any medium you link!</Text>
        <View style={styles._btn_main}>
          <Button title="Copy Invite Link" outline={true} height={45} onPress={onShare} icon={<Ionicons name="link" size={20} color={Theme.secondry} />} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.secondry,
  },
  _sroll_view: {
    paddingHorizontal: 20
  },
  _heading: {
    color: Theme.primary,
    textAlign: "center",
    marginTop: 30,
    fontFamily: Theme.medium,
    fontSize: 15
  },
  _sub_heading: {
    color: Theme.white,
    fontFamily: Theme.regular,
    fontSize: 10,
    textAlign: "center",
  },
  _btn_main: {
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 10
  },
  _social_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20
  },
  _or_main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  _line: {
    backgroundColor: Theme.primary,
    height: 1,
    flex: 1
  },
  _or: {
    color: Theme.white,
    fontFamily: Theme.medium,
    fontSize: 15,
    marginHorizontal: 10
  },
  _input_main: {
    marginTop: 10
  },
});
