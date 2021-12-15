import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

const Businessinfo = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#1C213E" }}>
      <View style={styles.container}>
        <View style={{ paddingTop: "15%", paddingLeft: "8%" }}>

          <TouchableOpacity onPress={() => navigation.navigate("Businessdet2")} >
            <Image source={require("../assets/leftarrow.png")} />
          </TouchableOpacity>

        </View>

        <View style={{ paddingTop: "10%", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            Business Profile
          </Text>
        </View>

        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <View style={{ alignSelf: "center", paddingTop: "15%" }}>
            <TextInput
              style={{
                height: 56,
                width: 284,
                borderRadius: 25,
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
                backgroundColor: "#101426",
              }}
              placeholder="Email"
              placeholderTextColor="#FFFFFF"
              color="white"
            ></TextInput>
            <TextInput
              style={{
                marginTop: 17,
                height: 56,
                width: 284,
                borderRadius: 25,
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
                backgroundColor: "#101426",
              }}
              placeholder="Phone Number"
              placeholderTextColor="#FFFFFF"
              color="white"
              keyboardType="numeric"
            ></TextInput>

            <View
              style={{
                marginTop: 17,
                backgroundColor: "#101426",
                flexDirection: "row",
                alignItems: "center",
                height: 56,
                borderRadius: 25,
                width: 290,
              }}
            >
              <TextInput
                style={{
                  marginLeft: "4%",
                  height: 56,
                  width: 234,
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                placeholder="Business Location"
                placeholderTextColor="#FFFFFF"
                color="white"
              ></TextInput>
              <TouchableOpacity>
                <Image source={require("../assets/groupp.png")} />
              </TouchableOpacity>
            </View>

            <TextInput
              style={{
                marginTop: 17,
                height: 56,
                width: 290,
                borderRadius: 25,
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
                backgroundColor: "#101426",
              }}
              placeholder="Website"
              placeholderTextColor="#FFFFFF"
              color="white"
            ></TextInput>

            <View
              style={{
                marginTop: 17,
                backgroundColor: "#101426",
                flexDirection: "row",
                alignItems: "center",
                height: 56,
                borderRadius: 25,
                width: 290,
              }}
            >
              <TextInput
                style={{
                  height: 56,
                  width: 234,
                  fontSize: 15,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                placeholder="            Socials"
                placeholderTextColor="#FFFFFF"
                color="white"
              ></TextInput>
              <TouchableOpacity style={{ marginLeft: "4%" }}>
                <Image source={require("../assets/groupp.png")} />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Yourmetalid")}
            style={{
              borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#90EDD8",
              height: 39,
              width: 191,
              marginTop: 30,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "#90EDD8",
                justifyContent: "center",
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default Businessinfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
