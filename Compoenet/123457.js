import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import My12345 from "./12345";

const My123457 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Image style={{ marginTop: 80 }}
          source={require('../assets/Logo.png')} /> */}
      <View style={{ paddingLeft: 30, paddingTop: 60 }}>
        <Text
          style={{
            color: "white",
            textAlign: "left",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          Get Started
        </Text>
      </View>

      <View
        style={{
          flex: 2,
          backgroundColor: "white",
          marginTop: 20,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        }}
      >
        <Text
          style={{
            color: "black",
            textAlign: "left",
            fontSize: 30,
            paddingTop: 45,
            paddingLeft: 30,
          }}
        >
          Enter your mobile phone number
        </Text>
        <Text
          style={{
            color: "black",
            textAlign: "left",
            fontSize: 15,
            paddingTop: 20,
            paddingLeft: 30,
          }}
        >
          Phone Number
        </Text>

        <View style={{ flexDirection: "row", paddingLeft: 30, marginTop: 20 }}>
          <TextInput
            style={{ fontSize: 40, fontWeight: "bold", flex: 1 }}
            placeholder="+1"
          ></TextInput>
          <TextInput
            style={{ fontSize: 40, fontWeight: "bold", flex: 5 }}
            placeholder="9812345678"
            keyboardType="numeric"
          ></TextInput>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("My12345")}
            style={{
              borderWidth: 2,
              justifyContent: "center",
              borderColor: "#6FB8A8",
              height: 50,
              width: 320,
              marginTop: 40,
              backgroundColor: "#6FB8A8",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontSize: 15,
            paddingTop: 35,
          }}
        >
          Already Have account? Sign in
        </Text>
      </View>

      {/* <TouchableOpacity onPress={()=>navigation.navigate('My12345')}
         style={{ borderWidth: 2, justifyContent: 'center', borderColor: '#6FB8A8', height: 50, width: 300, marginTop: 20, backgroundColor: '#6FB8A8', borderRadius: 10, }}>
          <Text style={{
            color: 'white', fontSize: 15, fontWeight: "bold", textAlign: "center",
            marginLeft: 28
          }}>Get Started</Text></TouchableOpacity> */}
    </View>
  );
};
export default My123457;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
