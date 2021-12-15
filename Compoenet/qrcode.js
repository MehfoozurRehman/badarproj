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

const qrcode = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ paddingTop: "13%", paddingLeft: "8%" }}>
        <TouchableOpacity         onPress={() => navigation.navigate("DrawerNavigator")} style={{  }}>
                <Image source={require("../assets/leftarrow.png")} />
            </TouchableOpacity>



          {/* <TouchableOpacity>
            <Image source={require("../assets/threelines.png")} />
          </TouchableOpacity> */}
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "65%",
          }}
        >
          <Image source={require("../assets/qrcodegrp.png")} />
        </View>

        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 15,
            textAlign: "center",
          }}
        >
          Scan the merchant's QR Code
        </Text>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity         onPress={() => navigation.navigate("DrawerNavigator")}
            style={{
              borderWidth: 1.5,
              justifyContent: "center",
              borderColor: "#DB3663",
              height: 42,
              width: 130,
              marginTop: "5%",
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                color: "#DB3663",
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Cancel
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
export default qrcode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
