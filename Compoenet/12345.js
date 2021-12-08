import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

const My12345 = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      <View style={styles.container}>
        <View style={{ paddingHorizontal: "5%", paddingTop: 50 }}>
          {/* <Image
          source={require('../assets/Logo.png')} /> */}

          <Text style={{ color: "#1C213E", fontSize: 34, fontWeight: "bold" }}>
            48 Seconds
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 29,
              paddingTop: 40,
              paddingRight: 40,
            }}
          >
            Verify your mobile phone number
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 15,
              paddingTop: 60,
            }}
          >
            Verification Code
          </Text>

          <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <TextInput
                maxLength={1}
                style={{
                  marginLeft: "2%",
                  borderRadius: 10,
                  fontSize: 40,
                  height: 60,
                  width: 20,
                  backgroundColor: "#EAECEF",
                  fontWeight: "bold",
                  flex: 1,
                }}
                keyboardType="numeric"
                placeholder=""
              ></TextInput>

              <TextInput
                maxLength={1}
                style={{
                  marginLeft: "2%",
                  borderRadius: 10,
                  fontSize: 40,
                  height: 60,
                  width: 60,
                  backgroundColor: "#EAECEF",
                  fontWeight: "bold",
                  flex: 1,
                }}
                keyboardType="numeric"
                placeholder=""
              ></TextInput>
              {/* <TextInput style={{ fontSize: 40, fontWeight: 'bold', flex: 5 }}
            placeholder="+2"
            keyboardType='numeric'
          >

          </TextInput> */}
              <TextInput
                maxLength={1}
                style={{
                  marginLeft: "2%",
                  borderRadius: 10,
                  fontSize: 40,
                  height: 60,
                  width: 20,
                  backgroundColor: "#EAECEF",
                  fontWeight: "bold",
                  flex: 1,
                }}
                keyboardType="numeric"
                placeholder=""
              ></TextInput>
              <TextInput
                maxLength={1}
                style={{
                  marginLeft: "2%",
                  borderRadius: 10,
                  fontSize: 40,
                  height: 60,
                  width: 20,
                  backgroundColor: "#EAECEF",
                  fontWeight: "bold",
                  flex: 1,
                }}
                keyboardType="numeric"
                placeholder=""
              ></TextInput>
              <TextInput
                maxLength={1}
                style={{
                  borderRadius: 10,
                  marginLeft: "2%",
                  fontSize: 40,
                  height: 60,
                  width: 20,
                  backgroundColor: "#EAECEF",
                  fontWeight: "bold",
                  flex: 1,
                }}
                keyboardType="numeric"
                placeholder=""
              ></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 50,
              }}
            >
              <TouchableOpacity>
                <Ionicons name="refresh-circle" size={30} color="#1C213E" />
              </TouchableOpacity>
              <Text style={{ fontSize: 20 }}>Send Again</Text>
            </View>

            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("My12346")}
                style={{
                  borderWidth: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                  width: 300,
                  marginTop: 20,
                  backgroundColor: "#1C213E",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    justifyContent: "center",
                    fontSize: 15,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  SUBMIT
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <StatusBar style="auto" />
        </View>
      </View>
    </ScrollView>
  );
};
export default My12345;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: 'center',
  },
});
