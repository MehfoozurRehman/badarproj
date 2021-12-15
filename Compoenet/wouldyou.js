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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

const Mywouldyou = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: "15%", paddingLeft: "8%" }}>
            <TouchableOpacity  onPress={() => navigation.navigate("My112211")} >
              <Image source={require("../assets/leftarrow.png")} />
            </TouchableOpacity>
            </View>
      <View style={{ paddingTop: "15%", alignItems: "center" }}>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Would you like to open a business account?
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Mytellus")}
          style={{
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#6FB8A8",
            height: 30,
            width: 191,
            marginTop: 55,
            backgroundColor: "#1C213E",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              justifyContent: "center",
              fontSize: 15,
              color: "#90EDD9",
              textAlign: "center",
            }}
          >
            Yes Please!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("DrawerNavigator")}
          style={{
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#6FB8A8",
            height: 55,
            width: 191,
            marginTop: 35,
            backgroundColor: "#1C213E",
            borderRadius: 10,
          }}
        >
          <Text
            multiline={true}
            style={{
              color: "white",
              justifyContent: "center",
              fontSize: 15,
              color: "#90EDD9",
              textAlign: "center",
            }}
          >
            I don't have a business...
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
   onPress={() => navigation.navigate("DrawerNavigator")}
          style={{
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#6FB8A8",
            height: 30,
            width: 191,
            marginTop: 35,
            backgroundColor: "#1C213E",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              justifyContent: "center",
              fontSize: 15,
              color: "#90EDD9",
              textAlign: "center",
            }}
          >
            Maybe later
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Mywouldyou;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
