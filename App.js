import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Getstarted from "./Compoenet/GetStarted";
import My1122 from "./Compoenet/1122";
import My12345 from "./Compoenet/12345";
import My12346 from "./Compoenet/12346";
import My123457 from "./Compoenet/123457";
import My112211 from "./Compoenet/112211";
import Mywouldyou from "./Compoenet/wouldyou";
import Mytellus from "./Compoenet/tellus";
import Businessdet1 from "./Compoenet/Businessdet1";
import businessdet2 from "./Compoenet/Buinessdet2";
import Balance from "./Compoenet/Balance";
import Balance1 from "./Compoenet/Balance1";
import fixedTellus from "./fixedTellus";
import Businessinfo from "./Compoenet/Businessinfo";
import Yourmetalid from "./Compoenet/Yourmetalid";
import Linkyourbank from "./Compoenet/Linkyourbank";
import Fundingsources from "./Compoenet/Fundingsources";
import Useroffermap from "./Compoenet/Useroffermap";
import qrcode from "./Compoenet/qrcode";
import Bankaccountmsg from "./Compoenet/Bankaccountmsg";
import Transaction from "./Compoenet/Transaction";
import DummyScreen from "./Compoenet/DummyScreen";
import customeremails from "./Compoenet/customeremail";
import halliegobel from "./Compoenet/halliegobel";
import Loginwithfingerprint from "./Compoenet/loginwithfingerprint";
import loginwithfingerprint from "./Compoenet/loginwithfingerprint";
import invoicegen from "./Compoenet/invoicegen";
import invoicepres from "./Compoenet/invoicepres";
import transactioncomp from "./Compoenet/transactioncomp";
import customerphonenum from "./Compoenet/customerphonenum";
import businessoffer from "./Compoenet/businessoffer";
import businessofferone from "./Compoenet/businessofferone";
import businessoffertwo from "./Compoenet/businessoffertwo";
import employeeManagement from "./Compoenet/employeeManagement";

const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          options={{ headerShown: false }}
          name="Getstarted"
          component={Getstarted}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="My1122"
          component={My1122}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="My12345"
          component={My12345}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="My12346"
          component={My12346}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="My123457"
          component={My123457}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="My112211"
          component={My112211}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="Mywouldyou"
          component={Mywouldyou}
        ></stack.Screen>

        <stack.Screen
          options={{ headerShown: false }}
          name="fixedTellus"
          component={fixedTellus}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="Mytellus"
          component={Mytellus}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="Businessdet1"
          component={Businessdet1}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="Businessdet2"
          component={businessdet2}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="Balance"
          component={Balance}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="Balance1"
          component={Balance1}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="Businessinfo"
          component={Businessinfo}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="Yourmetalid"
          component={Yourmetalid}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="Linkyourbank"
          component={Linkyourbank}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="Fundingsources"
          component={Fundingsources}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="Useroffermap"
          component={Useroffermap}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="qrcode"
          component={qrcode}
        ></stack.Screen>

        <stack.Screen
          options={{
            title: "              Messages",
            headerStyle: {
              backgroundColor: "#1C213E",
            },
            headerTintColor: "#FFFFFF",
          }}
          name="Bankaccountmsg"
          component={Bankaccountmsg}
        ></stack.Screen>

        {/* <stack.Screen options={{ headerShown: false}} name ="Bankaccountmsg" component={Bankaccountmsg}></stack.Screen> */}
        <stack.Screen
          options={{ headerShown: false }}
          name="Transaction"
          component={Transaction}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="DummyScreen"
          component={DummyScreen}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="customeremails"
          component={customeremails}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="halliegobel"
          component={halliegobel}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="loginwithfingerprint"
          component={loginwithfingerprint}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="invoicegen"
          component={invoicegen}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="invoicepres"
          component={invoicepres}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="transactioncomp"
          component={transactioncomp}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="customerphonenum"
          component={customerphonenum}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="businessoffer"
          component={businessoffer}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="businessofferone"
          component={businessofferone}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="businessoffertwo"
          component={businessoffertwo}
        ></stack.Screen>
        <stack.Screen
          options={{ headerShown: false }}
          name="employeeManagement"
          component={employeeManagement}
        ></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <View style={{ alignItems: 'center', paddingTop: 100 }}>
    //     <Image
    //       source={require('./assets/Logo.png')} />

    //     <Text style={{ color: 'white', fontSize: 25, paddingTop: 5, fontWeight: "bold" }}>Meta Vest</Text>
    //     <Text style={{
    //       color: 'white', fontSize: 45, paddingTop: 80,
    //       fontWeight: "bold", paddingRight: 40
    //     }}>Easy,Fast & Rewarding Payments </Text>
    //     <Text style={{ color: 'white', fontSize: 15, paddingTop: 20, fontWeight: "bold", marginLeft: 28 }}>Pay & get paid conveniently, get rewarded,
    //       control & monetize your data.</Text>
    //     <TouchableOpacity style={{ borderWidth: 2, justifyContent: 'center', borderColor: '#6FB8A8', height: 50, width: 300, marginTop: 20, backgroundColor: '#6FB8A8', borderRadius: 10, }}>
    //       <Text style={{
    //         color: 'white', fontSize: 15, fontWeight: "bold", textAlign: "center",
    //         marginLeft: 28
    //       }}>Get Started</Text></TouchableOpacity>

    //     <StatusBar style="auto" />
    //   </View>

    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1C213E',
//     // alignItems: 'center',
//   },
// });
