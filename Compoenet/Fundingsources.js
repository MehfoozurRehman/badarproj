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

const Fundingsources = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ paddingTop: "13%", paddingLeft: "8%" }}>
          <TouchableOpacity>
            <Image source={require("../assets/leftarrow.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Transaction")}>
            <Text
              style={{
                color: "white",
                fontSize: 34,
                fontWeight: "bold",
                marginTop: 50,
              }}
            >
              Funding Sources
            </Text>
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 14, marginTop: 25 }}>
            Add new funding sources of update existing ones.
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            backgroundColor: "#0B0F23",
            borderRadius: 8,
            alignItems: "center",
            alignSelf: "center",
            flexDirection: "row",
            height: 80,
            width: 335,
            marginTop: "7%",
          }}
        >
          <View>
            <Image
              style={{ marginLeft: 15 }}
              source={require("../assets/groupred.png")}
            />
          </View>

          <View style={{ borderColor: "#FFFFFF" }}>
            <Text style={{ fontSize: 14, color: "#FFFFFF" }}> HDFC Bank</Text>
            <Text style={{ fontSize: 13, color: "#FFFFFF" }}> *****3654</Text>
          </View>

          <View style={{ marginLeft: "46%" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Bankaccountmsg")}
            >
              <Text style={{ color: "#90EDD8", fontSize: 26 }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={{
                        width: 315, height: 80, alignSelf: 'center', marginTop: 35, backgroundColor: '#0B0F23', borderRadius: 12,
                        flexDirection: 'row'
                    }}>
                        <Image style={{ marginLeft: 17, marginTop: 19 }}
                            source={require('../assets/groupred.png')} />
                        
                        <Text style={{ color: 'white', fontSize: 14, }}>HDFC Bank</Text>

                    </View> */}

        {/* <View style={{height:56,width:231,flexDirection:'row', backgroundColor:'#101426',alignSelf:'center', marginTop:'13%',borderRadius:40}}>
     <Text style={{color:'#90EDD9',textAlign:'center',marginTop:'6%',marginLeft:48, fontSize:24}}>$</Text>
       <Text style={{color:'white',textAlign:'center',marginTop:'6%',fontSize:24}}>JamesBond</Text>
     </View> */}
        {/* <Text style={{color:'white',fontSize:14,textAlign:'center',marginTop:40}}>Think of this as your virtual address for receiving 
and sending stuff</Text> */}
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("qrcode")}
            style={{
              borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#90EDD8",
              height: 40,
              width: 141,
              marginTop: 60,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                justifyContent: "center",
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Add More
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Useroffermap")}
            style={{
              borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#90EDD8",
              height: 40,
              width: 141,
              marginTop: 30,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                justifyContent: "center",
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("DummyScreen")}
            style={{
              borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#90EDD8",
              height: 40,
              width: 141,
              marginTop: 30,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "red",
                justifyContent: "center",
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Dummy Screen
            </Text>
          </TouchableOpacity>
        </View>

        {/* <View style={{marginTop:50,
          borderWidth: 2,justifyContent:'center',marginTop:10,         borderColor: '#101426', height: 50, width: 350, backgroundColor: '#101426', borderRadius: 10,
          marginHorizontal:10,flexDirection:'row'
        }}>
          
          <Text style={{
            color: 'white',marginTop:10 ,fontSize: 15, fontWeight: "bold", 
            marginLeft: 28
          }}>$</Text>
          <Text style={{
            color: 'white',marginTop:10, fontSize: 15, fontWeight: "bold",
          }}>Get Started</Text>
          </View> */}
      </View>
    </KeyboardAvoidingView>
  );
};
export default Fundingsources;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
