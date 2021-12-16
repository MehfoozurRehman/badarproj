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
import { CheckBox } from "react-native-elements";
import { useState } from "react";
const businessoffer = ({ navigation }) => {
  const [checked, setchecked] = useState(false);
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ paddingTop: "14%", paddingLeft: "8%" }}>
          <TouchableOpacity>
            <Image source={require("../assets/leftarrow.png")} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                marginTop: "7%",
              }}
            >
              Offers
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            height: 70,
            width: 440,
            
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                justifyContent: "center",
                height: 60,
                width: 45,

                marginTop:'1%'
              }}
            >
              <CheckBox
                checked={checked}
                onPress={() => setchecked(!checked)}
                checkedColor="#90EDD9"
                uncheckedColor="#90EDD9"
              />
            </View>
            <View style={{ height: 50, width: 150 }}>
              <Text style={{ marginTop: "14%", color: "white", fontSize: 14 }}>
                Show expired offers
              </Text>
              
            </View>
            <View style={{ height: 50, marginTop:'4%',width: 200,flexDirection:"row" }}>
            <View style={{marginTop:'1%'}}>
            <Image source={require('../assets/img/plusg.png')} />
            </View>
              <TouchableOpacity
              
              onPress={()=>navigation.navigate("businessofferone")}
              >
              <Text style={{ marginTop: "1%",marginLeft:'5%', color: "white", fontSize: 14 }}>
                Create New offer
              </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* <View style={{ margin: '4%' }}>

                        </View> */}

          {/* <Image
                            source={require('../assets/iconplus.png')} /> */}
          {/* <View style={{ margin: '.2%' }}>

                        </View> */}
          {/* <Text style={{
                            color: 'white', fontSize: 14, marginTop: '.5%'

                        }}>Create New Offer</Text> */}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#90EDD8",
                height: 44,
                width: 115,
                borderRadius: 25,
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
                In store
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ margin: "4%" }}></View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#90EDD8",
                height: 44,
                width: 115,
                borderRadius: 25,
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
                Online
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={{ marginTop: "3%" }}>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                alignItems: "center",
                marginTop: "4%",
                alignSelf: "center",
                borderColor: "#333751",
                height: 99,
                width: 322,
                borderRadius: 25,
                flexDirection: "row",
              }}
            >
              <Image
                style={{ marginTop: "1.7%", height: 113.5, width: 100 }}
                source={require("../assets/shirtpic.png")}
              />

              <View></View>
              <View style={{ flexDirection: "column", marginLeft: "8%" }}>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Jay's Clothing
                </Text>
                <View style={{ margin: "4%" }}></View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  25% off
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                alignItems: "center",
                marginTop: "8%",
                alignSelf: "center",
                borderColor: "#333751",
                height: 99,
                width: 322,
                borderRadius: 25,
                flexDirection: "row",
              }}
            >
              <Image
                style={{ marginTop: "1.7%", height: 113.5, width: 100 }}
                source={require("../assets/shirtpic.png")}
              />

              <View></View>
              <View style={{ flexDirection: "column", marginLeft: "8%" }}>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Jay's Clothing
                </Text>
                <View style={{ margin: "4%" }}></View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  25% off
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                alignItems: "center",
                marginTop: "8%",
                alignSelf: "center",
                borderColor: "#333751",
                height: 99,
                width: 322,
                borderRadius: 25,
                flexDirection: "row",
              }}
            >
              <Image
                style={{ marginTop: "1.7%", height: 113.5, width: 100 }}
                source={require("../assets/shirtpic.png")}
              />

              <View></View>
              <View style={{ flexDirection: "column", marginLeft: "8%" }}>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Jay's Clothing
                </Text>
                <View style={{ margin: "4%" }}></View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  25% off
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                alignItems: "center",
                marginTop: "8%",
                alignSelf: "center",
                borderColor: "#333751",
                height: 99,
                width: 322,
                borderRadius: 25,
                flexDirection: "row",
              }}
            >
              <Image
                style={{ marginTop: "1.7%", height: 113.5, width: 100 }}
                source={require("../assets/shirtpic.png")}
              />

              <View></View>
              <View style={{ flexDirection: "column", marginLeft: "8%" }}>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Jay's Clothing
                </Text>
                <View style={{ margin: "4%" }}></View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  25% off
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                alignItems: "center",
                marginTop: "8%",
                alignSelf: "center",
                borderColor: "#333751",
                height: 99,
                width: 322,
                borderRadius: 25,
                flexDirection: "row",
              }}
            >
              <Image
                style={{ marginTop: "1.7%", height: 113.5, width: 100 }}
                source={require("../assets/shirtpic.png")}
              />

              <View></View>
              <View style={{ flexDirection: "column", marginLeft: "8%" }}>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Jay's Clothing
                </Text>
                <View style={{ margin: "4%" }}></View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  25% off
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            
            onPress={()=>navigation.navigate("businessofferone")}
            style={{
              borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#90EDD8",
              height: 44,
              width: 115,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "#90EDD8",
                justifyContent: "center",
                fontSize: 14,
                textAlign: "center",
              }}
            >
              Add Offer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default businessoffer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
