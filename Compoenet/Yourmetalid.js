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

const Yourmetalid = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#1C213E" }}>
      <View style={styles.container}>
        <View style={{ paddingTop: "25%", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            Your MetaID
          </Text>
        </View>
        <View style={{ alignSelf: "center", paddingTop: "15%" }}>
          <View
            style={{
              backgroundColor: "#101426",
              justifyContent: "center",
              height: 56,
              width: 213,
              borderRadius: 25,
            }}
          >
            <TextInput
              style={{
                marginLeft: "8%",
                fontSize: 18,
                fontWeight: "bold",
              }}
              placeholder="$"
              placeholderTextColor="#7BE4CE"
              color="white"
            ></TextInput>
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              textAlign: "center",
              marginTop: 60,
            }}
          >
            Why MetaID?
          </Text>

          <View style={{ paddingTop: "9%", flexDirection: "row" }}>
            <Image source={require("../assets/check.png")} />
            <Text style={{ color: "white", fontSize: 14, marginLeft: 5 }}>
              Build your brand
            </Text>
          </View>
          <View style={{ paddingTop: "9%", flexDirection: "row" }}>
            <Image source={require("../assets/check.png")} />
            <Text style={{ color: "white", fontSize: 14, marginLeft: 5 }}>
              Differentiate yourself
            </Text>
          </View>
          <View style={{ paddingTop: "9%", flexDirection: "row" }}>
            <Image source={require("../assets/check.png")} />
            <Text style={{ color: "white", fontSize: 14, marginLeft: 5 }}>
              Receive & send payments
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Linkyourbank")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderColor: "#90EDD8",
              height: 40,
              width: 101,
              marginTop: 70,
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
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default Yourmetalid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
