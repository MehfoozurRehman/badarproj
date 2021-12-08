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

const My12346 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: "40%", alignItems: "center" }}>
        <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
          Your MetalID
        </Text>
      </View>
      <View style={{ alignSelf: "center", paddingTop: "8%" }}>
        <TextInput
          style={{
            height: 56,
            width: 231,
            borderRadius: 25,
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "#101426",
          }}
          placeholder=" $ JamesBond"
          placeholderTextColor="#707070"
          color="white"
        ></TextInput>
      </View>

      {/* <View style={{height:66,width:241,flexDirection:'row', backgroundColor:'#101426',alignSelf:'center', marginTop:'13%',borderRadius:40}}>
     <TextInput style={{height:56,width:284,borderRadius:25, fontSize: 15, fontWeight: 'bold',textAlign:'center',
           backgroundColor:'#101426' }}
            placeholder="Full Name"
            placeholderTextColor='#707070'
            color='white'>

          </TextInput>
     </View> */}
      <Text
        style={{
          color: "white",
          fontSize: 14,
          textAlign: "center",
          marginTop: 40,
        }}
      >
        Think of this as your virtual address for receiving and sending stuff
      </Text>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("My112211")}
          style={{
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#6FB8A8",
            height: 50,
            width: 300,
            marginTop: 20,
            backgroundColor: "#1C213E",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              justifyContent: "center",
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default My12346;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
