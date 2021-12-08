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

const customerphonenum = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: "15%", paddingLeft: "4%" }}>
        <TouchableOpacity>
          <Image source={require("../assets/whitearrow.png")} />
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: "12%", alignItems: "center" }}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 36,
            fontWeight: "bold",
          }}
        >
          Enter the customer's phone number
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          paddingTop: "30%",
          width: "76%",
        }}
      >
        <TextInput
          style={{
            backgroundColor: "#1C213E",
            justifyContent: "center",
            color: "white",
            borderBottomColor: "white",
            borderBottomWidth: 2,
            fontSize: 40,
            fontWeight: "bold",
            flex: 1,
          }}
          placeholder="+1"
          keyboardType="numeric"
          placeholderTextColor="white"
        ></TextInput>

        <TextInput
          style={{
            backgroundColor: "#1C213E",
            justifyContent: "center",
            borderBottomColor: "white",
            borderBottomWidth: 2,
            fontSize: 40,
            color: "white",
            fontWeight: "bold",
            flex: 4.7,
          }}
          placeholder="9812345678"
          keyboardType="numeric"
          placeholderTextColor="#333751"
        ></TextInput>
      </View>
      {/* <View style={{ alignSelf: 'center', paddingTop: '30%', width: '70%' }}>


                    <View style={{ backgroundColor: "#1C213E", justifyContent: 'center', borderBottomColor: 'white', borderBottomWidth: 2 }}>
                        <TextInput style={{
                            textAlign:'center', fontSize: 24, fontWeight: 'bold',

                        }}
                            placeholder="johndoe@gmail.com"
                            placeholderTextColor='#707070'


                            color='white'>

                        </TextInput>
                    </View>




                </View> */}

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
            Text
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default customerphonenum;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
