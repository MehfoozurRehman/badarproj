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

const Linkyourbank = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#1C213E" }}>
        <View style={styles.container}>
          <View style={{ paddingTop: "15%", paddingLeft: "8%" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Yourmetalid")} >
              <Image source={require("../assets/leftarrow.png")} />
            </TouchableOpacity>

            <Text
              style={{
                color: "white",
                fontSize: 34,
                fontWeight: "bold",
                marginTop: 50,
              }}
            >
              Link Your Bank Account
            </Text>
            <Text style={{ color: "white", fontSize: 14, marginTop: 25 }}>
              Deposit and withdraw money seamlessly in {"\n"}
              MetaVest by linking your bank account.
            </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Fundingsources")}
              style={{
                borderWidth: 2,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#90EDD8",
                height: 40,
                width: 191,
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
                Let's Do It
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Linkyourbank;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
