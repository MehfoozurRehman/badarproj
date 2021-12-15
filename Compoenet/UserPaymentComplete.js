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

const UserpaymentComplete = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View style={styles.container}>
      <TouchableOpacity  onPress={() => navigation.navigate("SendMoney")} style={{ marginTop: '11%', marginLeft: "8%" }}>
                <Image source={require("../assets/leftarrow.png")} />
            </TouchableOpacity>

        <View
          style={{
            marginTop: "45%",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/tickforuserpayment.png")} />
        </View>

        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "10%",
          }}
        >
          Paid

        </Text>

        <Text
          style={{
            color: "#90EDD9",
            fontSize: 48,
            fontWeight: "bold",
            textAlign: "center",
            
          }}
        >
          $65.00

        </Text>

      </View>
    </KeyboardAvoidingView>
  );
};
export default UserpaymentComplete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
