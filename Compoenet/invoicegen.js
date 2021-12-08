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

const invoicegen = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#1C213E" }}>
      <View style={styles.container}>
        <View style={{ paddingTop: "15%", paddingLeft: "8%" }}>
          <TouchableOpacity>
            <Image source={require("../assets/leftarrow.png")} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: "12%", alignItems: "center" }}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Invoice # 67529
          </Text>
        </View>
        <View style={{ alignSelf: "center", paddingTop: "30%", width: "73%" }}>
          <View
            style={{
              backgroundColor: "#1C213E",
              justifyContent: "center",
              borderBottomColor: "white",
              borderBottomWidth: 7,
            }}
          >
            <TextInput
              style={{
                textAlign: "center",
                fontSize: 91,
                fontWeight: "bold",
              }}
              placeholder="$57.21"
              placeholderTextColor="white"
              color="white"
            ></TextInput>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderColor: "#90EDD8",
              height: 40,
              width: 146,
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
              Create
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default invoicegen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
