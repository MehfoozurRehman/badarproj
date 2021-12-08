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

const invoicepres = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ alignItems: "center", marginTop: "40%" }}>
          {/* <View style={{marginTop:"40%"}}>


</View> */}
          <View
            style={{
              height: 298,
              width: 281,
              borderRadius: 25,
              backgroundColor: "#333751",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "1%",
              }}
            >
              Invoice # 123456
            </Text>

            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1%",
              }}
            >
              <Image source={require("../assets/qrcodeinv.png")} />
            </View>

            <Text
              style={{
                color: "white",
                fontSize: 38,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "1%",
              }}
            >
              $57.21
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: "9%" }}>
            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Image source={require("../assets/link.png")} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    textAlign: "center",
                    marginTop: "1%",
                  }}
                >
                  Email
                </Text>
              </View>
            </TouchableOpacity>

            <View style={{ margin: "9%" }}></View>
            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Image source={require("../assets/link.png")} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    textAlign: "center",
                    marginTop: "1%",
                  }}
                >
                  Text
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{ margin: "9%" }}></View>
            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Image source={require("../assets/link.png")} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    textAlign: "center",
                    marginTop: "1%",
                  }}
                >
                  Scan
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={{ paddingTop: '13%', paddingLeft: '8%' }}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/threelines.png')} /></TouchableOpacity>
                </View> */}

        {/* <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '65%'
                }}>
                    <Image
                        source={require('../assets/qrcodegrp.png')} />
                </View> */}

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
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
export default invoicepres;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
