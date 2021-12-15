import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

const businessdet2 = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#1C213E" }}>
      <View style={styles.container}>
      <View style={{ paddingTop: "15%", paddingLeft: "8%" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Businessdet1")} >
              <Image source={require("../assets/leftarrow.png")} />
            </TouchableOpacity>
            </View>
        <View style={{ paddingTop: "10%", alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Business Details{"\n"}(Sole Proprietorship)
          </Text>
        </View>

        {/* <View style={{height:56,width:231,flexDirection:'row', backgroundColor:'#101426',alignSelf:'center', marginTop:'13%',borderRadius:40}}>
     <Text style={{color:'#90EDD9',textAlign:'center',marginTop:'6%',marginLeft:48, fontSize:24}}>$</Text>
       <Text style={{color:'white',textAlign:'center',marginTop:'6%',fontSize:24}}>JamesBond</Text>
     </View> */}
        {/* <Text style={{color:'white',fontSize:14,textAlign:'center',marginTop:40}}>Think of this as your virtual address for receiving 
and sending stuff</Text> */}
        <View style={{ alignItems: "center" }}>
          <TextInput
            style={{
              height: 56,
              width: 330,
              borderRadius: 25,
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 70,
              backgroundColor: "#101426",
            }}
            placeholder="Business Address"
            placeholderTextColor="#707070"
            placeholderTextColor="white"
            color="white"
          ></TextInput>

          <TextInput
            multiline={true}
            style={{
              height: 56,
              width: 330,
              borderRadius: 25,
              fontSize: 17,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 55,
              backgroundColor: "#101426",
            }}
            placeholder="Mailing Adress If different from primary adress"
            placeholderTextColor="#707070"
            placeholderTextColor="white"
            color="white"
          ></TextInput>

          <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <TextInput
              keyboardType="numeric"
              style={{
                height: 56,
                width: 330,
                borderRadius: 25,
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 55,
                backgroundColor: "#101426",
              }}
              placeholder="Business phone Number"
              placeholderTextColor="#707070"
              placeholderTextColor="white"
              color="white"
            ></TextInput>
          </KeyboardAvoidingView>
          <TouchableOpacity
            onPress={() => navigation.navigate("Businessinfo")}
            style={{
              borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#6FB8A8",
              height: 40,
              width: 100,
              marginTop: 50,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "#6FB8A8",
                justifyContent: "center",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default businessdet2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
