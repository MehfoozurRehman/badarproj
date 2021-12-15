import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import My1122 from "./1122";

const GetStarted = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#1C213E" }}>
      <View style={styles.container}>
        <View style={{ alignItems: "center", paddingTop: 80 }}>
          <Image source={require("../assets/Logo.png")} />

          <Text
            style={{
              color: "white",
              fontSize: 25,
              paddingTop: 5,
              fontWeight: "bold",
            }}
          >
            Meta Vest
          </Text>
        </View>
        <View style={{ paddingHorizontal: 25, marginTop: 20 }}>
          <Text
            style={{
              color: "white",
              fontSize: 45,
              paddingTop: 80,
              fontWeight: "bold",
            }}
          >
            Easy,Fast & Rewarding Payments
          </Text>

          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 30,
            }}
          >
            Pay & get paid conveniently, get rewarded, control & monetize your
            data.
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("My1122")}
            style={{
              borderWidth: 2,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#6FB8A8",
              backgroundColor: "#6FB8A8",
              height: 50,
              width: 335,
              marginTop: 20,
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
        <View
          style={{
            justifyContent: "center",
            paddingTop: 15,
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "#9CA1D2", fontSize: 15, fontWeight: "bold" }}>
            Already have acount?
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("halliegobel")}>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>

        {/* <StatusBar style="auto" /> */}
      </View>
    </ScrollView>
  );
};
export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
