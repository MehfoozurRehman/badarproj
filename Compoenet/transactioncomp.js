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

const transactioncomp = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            marginTop: "45%",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/tickcircle.png")} />
        </View>

        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 48,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "4%",
          }}
        >
          Transaction Completed
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};
export default transactioncomp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
