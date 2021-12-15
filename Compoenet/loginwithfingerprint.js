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

const loginwithfingerprint = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", paddingTop: "25%" }}>
        <Image
          style={{ alignSelf: "center" }}
          source={require("../assets/hgpic.png")}
        />

        <Text
          style={{
            marginTop: "1.5%",
            color: "white",
            textAlign: "center",
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Hallie Goebel
        </Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "45%",
        }}
      >
        <Image source={require("../assets/fingerprint.png")} />
      </View>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 29,
        }}
      >
        Secure Your Account {"\n"}
        With Touch ID
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("halliegobel")}>
        <Text
          style={{
            marginTop: "5%",
            color: "white",
            textAlign: "center",
            fontSize: 16,
          }}
        >
          Login with Pin
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default loginwithfingerprint;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
