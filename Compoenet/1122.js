import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import My12345 from "./12345";

const My1122 = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      <View style={styles.container}>
        <View style={{ alignItems: "center", paddingHorizontal: "3%" }}>
          <Image
            style={{ marginTop: 80 }}
            source={require("../assets/Logo.png")}
          />
          <View style={{}}>
            <Text
              style={{
                color: "white",
                textAlign: "left",
                fontSize: 40,
                paddingTop: 35,
                fontWeight: "bold",
              }}
            >
              Get Started
            </Text>
          </View>
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
            Enter Your Mobile Phone Number
          </Text>
          <Text
            style={{
              color: "black",
              textAlign: "left",
              fontSize: 15,
              paddingTop: 15,
              paddingLeft: 30,
            }}
          >
            Phone Number
          </Text>
          <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <View
              style={{ flexDirection: "row", paddingLeft: 30, marginTop: 20 }}
            >
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
          </KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("My123457")}
              style={{
                borderWidth: 2,
                justifyContent: "center",
                borderColor: "#6FB8A8",
                height: 50,
                width: 320,
                marginTop: 40,
                backgroundColor: "#6FB8A8",
                borderRadius: 10,
                alignSelf: "center",
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

          <View
            style={{
              justifyContent: "center",
              paddingTop: 15,
              flexDirection: "row",
            }}
          >
            <Text
              style={{ color: "#24224D", fontSize: 15, fontWeight: "bold" }}
            >
              Already have acount?
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate("halliegobel")}  style={{ marginLeft: "1%" }}>
              <Text style={{ color: "#1E32FA", fontSize: 15 }}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <TouchableOpacity onPress={()=>navigation.navigate('My12345')}
         style={{ borderWidth: 2, justifyContent: 'center', borderColor: '#6FB8A8', height: 50, width: 300, marginTop: 20, backgroundColor: '#6FB8A8', borderRadius: 10, }}>
          <Text style={{
            color: 'white', fontSize: 15, fontWeight: "bold", textAlign: "center",
            marginLeft: 28
          }}>Get Started</Text></TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};
export default My1122;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
