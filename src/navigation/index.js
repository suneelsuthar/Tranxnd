// In App.js in a new project

import * as React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { Dimensions, useColorScheme } from "react-native";
import {
  // AUTH SCREENS
  Splash,
  Signup,
  Login,
  BusinessDetails,
  CompanyDetails,
  ContactDetails,
  ForgotPassrod,
  Otp,
  QuickBalance,
  PersonalDetails,
  // home
  Home,
  // CardManagement
  CardManagement,
  //Pay Bill
  BillType,
  VendorDetails,
  BillingDetails,
  ScanToPay,
  PaymentDeatails,
  ConfirmOtp,
  PayAnother,

  // Transtion
  TranstionType,
  Search,
  RecipientDetails,
  ReviewRecipient,
  PaymentAmount,
  ReviewTranscation,
  MoneyConfirmationOtp,
  AnotherTranstions,

  //Refer Friend
  ReferFriend,

  //Security Settings
  SecuritySettings,

  // Account Settings
  AccountSettings,
  UpdatePersonalInfo,
  ProofofVerification,
  UpdateProfileSuccess,
  ChangeProfilePic,
  // request card
  CardType,
  DeliveryDetails,
  Identification,
  CardsDetails,
  Confirmation,
  // HistoricTransactions sceens
  HistoricTransactions,
} from "./../screens";
// custom drawer
import DrawerContent from "./../components/DrawerContent";

// SMEDashboard
import {
  // home
  DashboardHome,
  EmployeDetails,
  TransNdCardIssues,
  SetupSallery,
  AddEmployeeSuccess,

  // Employee Management
  EmployeeManagement,
  EmployeeDetails,

  // Transation Type
  TransationType,
  SearchDashboard,
  ReviewSalries,
  SendMoneyOtp,
  SendMoneySuccess,

  // Bonus
  SearchBonus,
  BonusAmount,
  BonusReview,
  BonusOtp,
  BonusSuccess,
} from "./../SMEDashboard";
import theme from "../../theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const windowWidth = Dimensions.get("window").width;

const Navigation = () => {
  const scheme = useColorScheme();
  React.useEffect(() => {
    (async () => {
      await AsyncStorage.setItem("theme", JSON.stringify(scheme));
    })();
  });
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* DashboardHome */}
        <Stack.Screen name="Splash" component={Splash} />

        <Stack.Screen name="Public" component={PublicDrawer} />
        <Stack.Screen name="DashboardHome" component={DashboardHome} />
        {/* HistoricTransactions screens */}
        <Stack.Screen
          name="HistoricTransactions"
          component={HistoricTransactions}
        />
        <Stack.Screen name="CardManagement" component={CardManagement} />
        {/* request for new card screens */}
        <Stack.Screen name="CardType" component={CardType} />
        <Stack.Screen name="DeliveryDetails" component={DeliveryDetails} />
        <Stack.Screen name="Identification" component={Identification} />
        <Stack.Screen name="CardsDetails" component={CardsDetails} />
        <Stack.Screen name="Confirmation" component={Confirmation} />

        {/* auth screens */}
        <Stack.Screen name="CompanyDetails" component={CompanyDetails} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
        <Stack.Screen name="ContactDetails" component={ContactDetails} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassrod} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="QuickBalance" component={QuickBalance} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen name="Home" component={Home} />
        {/* home */}

        {/* Pay Bill */}
        <Stack.Screen name="BillType" component={BillType} />
        <Stack.Screen name="VendorDetails" component={VendorDetails} />
        <Stack.Screen name="BillingDetails" component={BillingDetails} />
        <Stack.Screen name="ScanToPay" component={ScanToPay} />
        <Stack.Screen name="PaymentDeatails" component={PaymentDeatails} />
        <Stack.Screen name="ConfirmOtp" component={ConfirmOtp} />
        <Stack.Screen name="PayAnother" component={PayAnother} />

        {/* Transtion */}
        <Stack.Screen name="TranstionType" component={TranstionType} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="RecipientDetails" component={RecipientDetails} />
        <Stack.Screen name="ReviewRecipient" component={ReviewRecipient} />
        <Stack.Screen name="PaymentAmount" component={PaymentAmount} />
        <Stack.Screen name="ReviewTranscation" component={ReviewTranscation} />
        <Stack.Screen
          name="MoneyConfirmationOtp"
          component={MoneyConfirmationOtp}
        />
        <Stack.Screen name="AnotherTranstions" component={AnotherTranstions} />

        {/* Refer Friend */}
        <Stack.Screen name="ReferFriend" component={ReferFriend} />

        {/* Security Settings */}
        <Stack.Screen name="SecuritySettings" component={SecuritySettings} />

        {/* Account Settings */}
        <Stack.Screen name="AccountSettings" component={AccountSettings} />
        <Stack.Screen
          name="UpdatePersonalInfo"
          component={UpdatePersonalInfo}
        />
        <Stack.Screen
          name="ProofofVerification"
          component={ProofofVerification}
        />
        <Stack.Screen
          name="UpdateProfileSuccess"
          component={UpdateProfileSuccess}
        />
        <Stack.Screen name="ChangeProfilePic" component={ChangeProfilePic} />

        {/* SMEDashboard */}
        <Stack.Screen name="EmployeDetails" component={EmployeDetails} />
        <Stack.Screen name="TransNdCardIssues" component={TransNdCardIssues} />
        <Stack.Screen name="SetupSallery" component={SetupSallery} />
        <Stack.Screen
          name="AddEmployeeSuccess"
          component={AddEmployeeSuccess}
        />

        {/* Employee Management */}
        <Stack.Screen
          name="EmployeeManagement"
          component={EmployeeManagement}
        />
        <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />

        {/* Transation Type */}
        <Stack.Screen name="TransationType" component={TransationType} />
        <Stack.Screen name="SearchDashboard" component={SearchDashboard} />
        <Stack.Screen name="ReviewSalries" component={ReviewSalries} />
        <Stack.Screen name="SendMoneyOtp" component={SendMoneyOtp} />
        <Stack.Screen name="SendMoneySuccess" component={SendMoneySuccess} />

        {/* Bonus */}
        <Stack.Screen name="SearchBonus" component={SearchBonus} />
        <Stack.Screen name="BonusAmount" component={BonusAmount} />
        <Stack.Screen name="BonusReview" component={BonusReview} />
        <Stack.Screen name="BonusOtp" component={BonusOtp} />
        <Stack.Screen name="BonusSuccess" component={BonusSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function PublicDrawer() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#283878",
        inactiveTintColor: "#283878",
        labelStyle: {
          fontFamily: theme.regular,
        },
      }}
      screenOptions={{
        drawerStyle: {
          width: windowWidth - 40,
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Feather name="home" size={24} color="#283878" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function DashboardDrawer() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#283878",
        inactiveTintColor: "#283878",

        labelStyle: {
          fontFamily: theme.regular,
        },
      }}
      screenOptions={{
        drawerStyle: {
          width: windowWidth - 40,
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",

          drawerIcon: ({ focused, size }) => (
            <Feather name="home" size={24} color="#283878" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default Navigation;
