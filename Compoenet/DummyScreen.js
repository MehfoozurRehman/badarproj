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

const DummyScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ paddingTop: "3%", paddingLeft: "8%" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("customeremails")}
          >
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 50,
              }}
            >
              Customer Email
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: "3%", paddingLeft: "8%" }}>
          <TouchableOpacity onPress={() => navigation.navigate("halliegobel")}>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              Halli Egobel
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: "3%", paddingLeft: "8%" }}>
          <TouchableOpacity onPress={() => navigation.navigate("invoicegen")}>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              Invoice Generation
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: "3%", paddingLeft: "8%" }}>
          <TouchableOpacity onPress={() => navigation.navigate("invoicepres")}>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              Invoice Presentation
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: "3%", paddingLeft: "8%" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("transactioncomp")}
          >
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              Transacation Completed
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: "3%", paddingLeft: "8%" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("customerphonenum")}
          >
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              Customer Phone number
            </Text>
          </TouchableOpacity>
        </View>

        {/* <View style={{marginTop:"3%",  paddingLeft: '8%' }}>
                       
                        <TouchableOpacity onPress={() => navigation.navigate('businessoffer')}>
                        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Business Offers </Text></TouchableOpacity>
                        
                    </View> */}

        <View style={{ marginTop: "3%", paddingLeft: "8%" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("businessofferone")}
          >
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              Business Offers One
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: "3%", paddingLeft: "8%" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("businessoffertwo")}
          >
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              Business Offers Two
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: "3%", paddingLeft: "8%" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("employeeManagement")}
          >
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              Employee Management
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default DummyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
