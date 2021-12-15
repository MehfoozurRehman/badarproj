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

const My112211 = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#1C213E" }}>
      <View style={styles.container}>
      <View    style={{ paddingTop: "15%", paddingLeft: "8%" }}>
            <TouchableOpacity onPress={() => navigation.navigate("My12346")}>
              <Image source={require("../assets/leftarrow.png")} />
            </TouchableOpacity>
            </View>
        {/* <View style={{paddingTop: '15%', paddingLeft:'8%'}}>
    <TouchableOpacity>
        <Image 
                source={require('../assets/leftarrow.png')} /></TouchableOpacity></View> */}
        <View style={{ paddingTop: "10%", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            Your Profile
          </Text>
        </View>
        <View style={{ alignSelf: "center", paddingTop: "8%" }}>
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
            placeholder="Full Name"
            placeholderTextColor="#707070"
            color="white"
          ></TextInput>
          <TextInput
            style={{
              marginTop: 13,
              height: 56,
              width: 284,
              borderRadius: 25,
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "#101426",
            }}
            placeholder="Birthday"
            placeholderTextColor="#707070"
            color="white"
          ></TextInput>
          <TextInput
            style={{
              marginTop: 13,
              height: 56,
              width: 284,
              borderRadius: 25,
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "#101426",
            }}
            placeholder="Email"
            placeholderTextColor="#707070"
            color="white"
          ></TextInput>
          <TextInput
            style={{
              marginTop: 13,
              height: 56,
              width: 284,
              borderRadius: 25,
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "#101426",
            }}
            placeholder="Socials"
            placeholderTextColor="#707070"
            color="white"
          ></TextInput>

          <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <View>
              <TextInput
                multiline={true}
                style={{
                  marginTop: 25,
                  height: 81,
                  width: 284,
                  borderRadius: 28,
                  fontSize: 15,
                  fontWeight: "bold",
                  textAlign: "center",
                  backgroundColor: "#101426",
                  color: "white",
                }}
                placeholder="How would  you  introduce yourself to the world?"
                placeholderTextColor="#707070"
                color="white"
              ></TextInput>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Mywouldyou")}
                style={{
                  borderWidth: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#6FB8A8",
                  height: 40,
                  width: 191,
                  marginTop: 80,
                  backgroundColor: "#1C213E",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: "#90EDD9",
                    justifyContent: "center",
                    fontSize: 15,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Save
                </Text>
              </TouchableOpacity>
          
          <TouchableOpacity 
          onPress={() => navigation.navigate("DrawerNavigator")}
          style={{marginTop:'9%'}}>
          <Text style={{color:'#ACACAC'}}> Remind Me Later</Text>
          </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </ScrollView>
  );
};
export default My112211;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
