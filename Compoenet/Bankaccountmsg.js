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

const Bankaccountmsg = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>


      <View style={{ width: '100%', height: 120, backgroundColor: "#1C213E" }}>
        <View style={{ marginTop: '15%', flexDirection: 'row' }}>
          <TouchableOpacity style={{marginLeft:"8%",marginTop:'1.5%'}} >
            <Image source={require("../assets/whitearrow.png")} />
          </TouchableOpacity>

          <Text style={{ color: 'white', fontWeight: 'bold', marginLeft:'26%',fontSize:17 }}>Messages</Text>
        </View>
      </View>
      <View style={styles.container}>



        <ScrollView>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#0B0F23",
                alignItems: "center",
                alignSelf: "center",
                flexDirection: "row",
                height: 85,
                width: "100%",
              }}
            >
              <View>
                <Image
                  style={{ marginLeft: 13 }}
                  source={require("../assets/girlba.png")}
                />
              </View>

              <View style={{}}>
                <Text
                  style={{
                    marginBottom: "6%",
                    fontSize: 15,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  Kelly James
                </Text>
                <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                  New offers for you to see!!
                </Text>
              </View>

              <View style={{ marginLeft: "24%" }}>
                <Image
                  style={{ marginBottom: "5%", marginLeft: "11%" }}
                  source={require("../assets/onecircle.png")}
                />
                <Text style={{ color: "#707070", fontSize: 14 }}>12:37</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#0B0F23",
                alignItems: "center",
                alignSelf: "center",
                flexDirection: "row",
                height: 85,
                width: "100%",
              }}
            >
              <View>
                <Image
                  style={{ marginLeft: 13 }}
                  source={require("../assets/girlba.png")}
                />
              </View>

              <View style={{}}>
                <Text
                  style={{
                    marginBottom: "6%",
                    fontSize: 15,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  Kelly James
                </Text>
                <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                  New offers for you to see!!
                </Text>
              </View>

              <View style={{ marginLeft: "24%" }}>
                <Image
                  style={{ marginBottom: "5%", marginLeft: "11%" }}
                  source={require("../assets/onecircle.png")}
                />
                <Text style={{ color: "#707070", fontSize: 14 }}>12:37</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#0B0F23",
                alignItems: "center",
                alignSelf: "center",
                flexDirection: "row",
                height: 85,
                width: "100%",
              }}
            >
              <View>
                <Image
                  style={{ marginLeft: 13 }}
                  source={require("../assets/girlba.png")}
                />
              </View>

              <View style={{}}>
                <Text
                  style={{
                    marginBottom: "6%",
                    fontSize: 15,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  Kelly James
                </Text>
                <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                  New offers for you to see!!
                </Text>
              </View>

              <View style={{ marginLeft: "24%" }}>
                <Image
                  style={{ marginBottom: "5%", marginLeft: "11%" }}
                  source={require("../assets/onecircle.png")}
                />
                <Text style={{ color: "#707070", fontSize: 14 }}>12:37</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#0B0F23",
                alignItems: "center",
                alignSelf: "center",
                flexDirection: "row",
                height: 85,
                width: "100%",
              }}
            >
              <View>
                <Image
                  style={{ marginLeft: 13 }}
                  source={require("../assets/girlba.png")}
                />
              </View>

              <View style={{}}>
                <Text
                  style={{
                    marginBottom: "6%",
                    fontSize: 15,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  Kelly James
                </Text>
                <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                  New offers for you to see!!
                </Text>
              </View>

              <View style={{ marginLeft: "24%" }}>
                <Image
                  style={{ marginBottom: "5%", marginLeft: "11%" }}
                  source={require("../assets/onecircle.png")}
                />
                <Text style={{ color: "#707070", fontSize: 14 }}>12:37</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#0B0F23",
                alignItems: "center",
                alignSelf: "center",
                flexDirection: "row",
                height: 85,
                width: "100%",
              }}
            >
              <View>
                <Image
                  style={{ marginLeft: 13 }}
                  source={require("../assets/girlba.png")}
                />
              </View>

              <View style={{}}>
                <Text
                  style={{
                    marginBottom: "6%",
                    fontSize: 15,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  Kelly James
                </Text>
                <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                  New offers for you to see!!
                </Text>
              </View>

              <View style={{ marginLeft: "24%" }}>
                <Image
                  style={{ marginBottom: "5%", marginLeft: "11%" }}
                  source={require("../assets/onecircle.png")}
                />
                <Text style={{ color: "#707070", fontSize: 14 }}>12:37</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#0B0F23",
                alignItems: "center",
                alignSelf: "center",
                flexDirection: "row",
                height: 85,
                width: "100%",
              }}
            >
              <View>
                <Image
                  style={{ marginLeft: 13 }}
                  source={require("../assets/girlba.png")}
                />
              </View>

              <View style={{}}>
                <Text
                  style={{
                    marginBottom: "6%",
                    fontSize: 15,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  Kelly James
                </Text>
                <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                  New offers for you to see!!
                </Text>
              </View>

              <View style={{ marginLeft: "24%" }}>
                <Image
                  style={{ marginBottom: "5%", marginLeft: "11%" }}
                  source={require("../assets/onecircle.png")}
                />
                <Text style={{ color: "#707070", fontSize: 14 }}>12:37</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#0B0F23",
                alignItems: "center",
                alignSelf: "center",
                flexDirection: "row",
                height: 85,
                width: "100%",
              }}
            >
              <View>
                <Image
                  style={{ marginLeft: 13 }}
                  source={require("../assets/girlba.png")}
                />
              </View>

              <View style={{}}>
                <Text
                  style={{
                    marginBottom: "6%",
                    fontSize: 15,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  Kelly James
                </Text>
                <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                  New offers for you to see!!
                </Text>
              </View>

              <View style={{ marginLeft: "24%" }}>
                <Image
                  style={{ marginBottom: "5%", marginLeft: "11%" }}
                  source={require("../assets/onecircle.png")}
                />
                <Text style={{ color: "#707070", fontSize: 14 }}>12:37</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#0B0F23",
                alignItems: "center",
                alignSelf: "center",
                flexDirection: "row",
                height: 85,
                width: "100%",
              }}
            >
              <View>
                <Image
                  style={{ marginLeft: 13 }}
                  source={require("../assets/girlba.png")}
                />
              </View>

              <View style={{}}>
                <Text
                  style={{
                    marginBottom: "6%",
                    fontSize: 15,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  Kelly James
                </Text>
                <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                  New offers for you to see!!
                </Text>
              </View>

              <View style={{ marginLeft: "24%" }}>
                <Image
                  style={{ marginBottom: "5%", marginLeft: "11%" }}
                  source={require("../assets/onecircle.png")}
                />
                <Text style={{ color: "#707070", fontSize: 14 }}>12:37</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#0B0F23",
                alignItems: "center",
                alignSelf: "center",
                flexDirection: "row",
                height: 85,
                width: "100%",
              }}
            >
              <View>
                <Image
                  style={{ marginLeft: 13 }}
                  source={require("../assets/girlba.png")}
                />
              </View>

              <View style={{}}>
                <Text
                  style={{
                    marginBottom: "6%",
                    fontSize: 15,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  Kelly James
                </Text>
                <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                  New offers for you to see!!
                </Text>
              </View>

              <View style={{ marginLeft: "24%" }}>
                <Image
                  style={{ marginBottom: "5%", marginLeft: "11%" }}
                  source={require("../assets/onecircle.png")}
                />
                <Text style={{ color: "#707070", fontSize: 14 }}>12:37</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#0B0F23",
                alignItems: "center",
                alignSelf: "center",
                flexDirection: "row",
                height: 85,
                width: "100%",
              }}
            >
              <View>
                <Image
                  style={{ marginLeft: 13 }}
                  source={require("../assets/girlba.png")}
                />
              </View>

              <View style={{}}>
                <Text
                  style={{
                    marginBottom: "6%",
                    fontSize: 15,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  Kelly James
                </Text>
                <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                  New offers for you to see!!
                </Text>
              </View>

              <View style={{ marginLeft: "24%" }}>
                <Image
                  style={{ marginBottom: "5%", marginLeft: "11%" }}
                  source={require("../assets/onecircle.png")}
                />
                <Text style={{ color: "#707070", fontSize: 14 }}>12:37</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#0B0F23",
                alignItems: "center",
                alignSelf: "center",
                flexDirection: "row",
                height: 85,
                width: "100%",
              }}
            >
              <View>
                <Image
                  style={{ marginLeft: 13 }}
                  source={require("../assets/girlba.png")}
                />
              </View>

              <View style={{}}>
                <Text
                  style={{
                    marginBottom: "6%",
                    fontSize: 15,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  Kelly James
                </Text>
                <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                  New offers for you to see!!
                </Text>
              </View>

              <View style={{ marginLeft: "24%" }}>
                <Image
                  style={{ marginBottom: "5%", marginLeft: "11%" }}
                  source={require("../assets/onecircle.png")}
                />
                <Text style={{ color: "#707070", fontSize: 14 }}>12:37</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Bankaccountmsg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",

    // alignItems: 'center',
  },
});
