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

const Transaction = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ paddingTop: "13%", paddingLeft: "7%" }}>
          <TouchableOpacity>
            <Image source={require("../assets/leftarrow.png")} />
          </TouchableOpacity>
        </View>

        {/* <View style={{ marginTop: 20, backgroundColor: '#0B0F23', borderRadius: 8, alignItems: 'center', alignSelf: 'center', flexDirection: 'row', height: 80, width: 335, marginTop: '7%' }}>

                    <View>
                        <Image style={{ marginLeft: 15 }} source={require('../assets/groupred.png')} />
                    </View>

                    <View style={{ borderColor: '#FFFFFF' }}>
                        <Text style={{ fontSize: 14, color: '#FFFFFF' }}>   HDFC Bank</Text>
                        <Text style={{ fontSize: 13, color: '#FFFFFF' }}>   *****3654</Text>
                    </View>

                    <View style={{ marginLeft: '46%' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Bankaccountmsg')}>
                            <Text style={{ color: '#90EDD8', fontSize: 26 }}>+</Text>
                        </TouchableOpacity>
                    </View>




                </View> */}

        <View style={{ marginTop: "7%", paddingLeft: "7%" }}>
          <Text style={{ fontSize: 14, color: "#FFFFFF", fontWeight: "bold" }}>
            RECENT TRANSACTIONS
          </Text>
        </View>

        <View style={{ marginLeft: "7%" }}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              flexDirection: "row",
              height: 54,
              width: 395,
              borderColor: "#FFFFFF",
              marginTop: "5%",
            }}
          >
            <View>
              <Image source={require("../assets/amazon.png")} />
            </View>

            <View
              style={{
                marginLeft: "3%",
                marginRight: "17%",
                borderColor: "#FFFFFF",
                height: 50,
                width: 170,
              }}
            >
              <Text style={{ fontSize: 15, color: "#FFFFFF" }}>
                Amazon Pantry
              </Text>
              <Text style={{ fontSize: 13, color: "#707070" }}>
                Subscription payment
              </Text>
            </View>

            <View
              style={{
                height: 29,
                width: 64,
                marginRight: "12%",
                borderColor: "#FFFFFF",
              }}
            >
              {/* <Text style={{ color: '#DB0011',fontSize:14 }}>  -1,200</Text> */}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: "center",
              flexDirection: "row",
              height: 54,
              width: 395,
              borderColor: "#FFFFFF",
              marginTop: "3%",
            }}
          >
            <View>
              <Image source={require("../assets/girlborcir.png")} />
            </View>

            <View
              style={{
                marginLeft: "3%",
                marginRight: "17%",
                borderColor: "#FFFFFF",
                height: 50,
                width: 170,
              }}
            >
              <Text style={{ fontSize: 15, color: "#FFFFFF" }}>
                Risa Midyett
              </Text>
              <Text style={{ fontSize: 13, color: "#707070" }}>
                Gift for Christmas
              </Text>
            </View>

            <View
              style={{
                height: 29,
                width: 64,
                marginRight: "12%",
                borderColor: "#FFFFFF",
              }}
            >
              <Text style={{ color: "#17C261" }}> +6,950</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: "center",
              flexDirection: "row",
              height: 54,
              width: 395,
              borderColor: "#FFFFFF",
              marginTop: "3%",
            }}
          >
            <View>
              <Image source={require("../assets/circlepaytm.png")} />
            </View>

            <View
              style={{
                marginLeft: "3%",
                marginRight: "17%",
                borderColor: "#FFFFFF",
                height: 50,
                width: 170,
              }}
            >
              <Text style={{ fontSize: 15, color: "#FFFFFF" }}>
                PayTM Auto Pay
              </Text>
              <Text style={{ fontSize: 11, color: "#707070" }}>
                Weekly Transaction through...
              </Text>
            </View>

            <View
              style={{
                height: 29,
                width: 64,
                marginRight: "12%",
                borderColor: "#FFFFFF",
              }}
            >
              {/* <Text style={{ color: '#DB0011' }}> -1,200</Text> */}
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: "5%", paddingLeft: "7%" }}>
          <Text style={{ fontSize: 14, color: "#FFFFFF", fontWeight: "bold" }}>
            LAST WEEK
          </Text>
        </View>

        <View style={{ marginLeft: "7%" }}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              flexDirection: "row",
              height: 54,
              width: 395,
              borderColor: "#FFFFFF",
              marginTop: "5%",
            }}
          >
            <View>
              <Image source={require("../assets/amazon.png")} />
            </View>

            <View
              style={{
                marginLeft: "3%",
                marginRight: "17%",
                borderColor: "#FFFFFF",
                height: 50,
                width: 170,
              }}
            >
              <Text style={{ fontSize: 15, color: "#FFFFFF" }}>
                Amazon Pantry
              </Text>
              <Text style={{ fontSize: 13, color: "#707070" }}>
                Subscription payment
              </Text>
            </View>

            <View
              style={{
                height: 29,
                width: 64,
                marginRight: "12%",
                borderColor: "#FFFFFF",
              }}
            >
              <Text style={{ color: "#DB0011", fontSize: 14 }}> -1,200</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: "center",
              flexDirection: "row",
              height: 54,
              width: 395,
              borderColor: "#FFFFFF",
              marginTop: "3%",
            }}
          >
            <View>
              <Image source={require("../assets/girlborcir.png")} />
            </View>

            <View
              style={{
                marginLeft: "3%",
                marginRight: "17%",
                borderColor: "#FFFFFF",
                height: 50,
                width: 170,
              }}
            >
              <Text style={{ fontSize: 15, color: "#FFFFFF" }}>
                Risa Midyett
              </Text>
              <Text style={{ fontSize: 13, color: "#707070" }}>
                Gift for Christmas
              </Text>
            </View>

            <View
              style={{
                height: 29,
                width: 64,
                marginRight: "12%",
                borderColor: "#FFFFFF",
              }}
            >
              <Text style={{ color: "#17C261" }}> +6,950</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: "center",
              flexDirection: "row",
              height: 54,
              width: 395,
              borderColor: "#FFFFFF",
              marginTop: "3%",
            }}
          >
            <View>
              <Image source={require("../assets/Ellipse.png")} />
            </View>

            <View
              style={{
                marginLeft: "3%",
                marginRight: "17%",
                borderColor: "#FFFFFF",
                height: 50,
                width: 170,
              }}
            >
              <Text style={{ fontSize: 15, color: "#FFFFFF" }}>
                PayTM Auto Pay
              </Text>
              <Text style={{ fontSize: 11, color: "#707070" }}>
                Weekly Transaction through...
              </Text>
            </View>

            <View
              style={{
                height: 29,
                width: 64,
                marginRight: "12%",
                borderColor: "#FFFFFF",
              }}
            >
              <Text style={{ color: "#DB0011" }}> -1,200</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              flexDirection: "row",
              height: 54,
              width: 395,
              borderColor: "#FFFFFF",
              marginTop: "3%",
            }}
          >
            <View>
              <Image source={require("../assets/girlborcir.png")} />
            </View>

            <View
              style={{
                marginLeft: "3%",
                marginRight: "17%",
                borderColor: "#FFFFFF",
                height: 50,
                width: 170,
              }}
            >
              <Text style={{ fontSize: 15, color: "#FFFFFF" }}>
                Lashunda Bologna
              </Text>
              <Text style={{ fontSize: 13, color: "#707070" }}>
                Gift for Christmas
              </Text>
            </View>

            <View
              style={{
                height: 29,
                width: 64,
                marginRight: "12%",
                borderColor: "#FFFFFF",
              }}
            >
              <Text style={{ color: "#17C261" }}> +6,950</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
