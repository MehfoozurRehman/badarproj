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

const employeeManagement = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ paddingTop: "13%", paddingLeft: "8%" }}>
          <TouchableOpacity>
            <Image source={require("../assets/leftarrow.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: "white",
                fontSize: 34,
                fontWeight: "bold",
                marginTop: 40,
              }}
            >
              Manage Employees
            </Text>
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 14, marginTop: 25 }}>
            Edit employee permissions or disable employee accounts
          </Text>
        </View>

        <ScrollView>
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
                style={{ marginLeft: 10 }}
                source={require("../assets/girlempl.png")}
              />
            </View>

            <View style={{ borderColor: "#FFFFFF" }}>
              <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                {" "}
                Kelly James
              </Text>
              <View style={{ margin: "2%" }}></View>
              <Text style={{ fontSize: 11, color: "#FFFFFF" }}>
                {" "}
                +1 647 653 2353
              </Text>
            </View>
            <Text style={{ fontSize: 11, color: "#707070", marginLeft: "15%" }}>
              Admin
            </Text>

            <View style={{ marginLeft: "16%" }}>
              <TouchableOpacity>
                <Image
                  style={{ marginLeft: 15 }}
                  source={require("../assets/edit.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#0B0F23",
              borderRadius: 8,
              alignItems: "center",
              alignSelf: "center",
              flexDirection: "row",
              height: 80,
              width: 335,
              marginTop: "2%",
            }}
          >
            <View>
              <Image
                style={{ marginLeft: 10 }}
                source={require("../assets/girlempl.png")}
              />
            </View>

            <View style={{ borderColor: "#FFFFFF" }}>
              <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                {" "}
                Kelly James
              </Text>
              <View style={{ margin: "2%" }}></View>
              <Text style={{ fontSize: 11, color: "#FFFFFF" }}>
                {" "}
                +1 647 653 2353
              </Text>
            </View>
            <Text style={{ fontSize: 11, color: "#707070", marginLeft: "15%" }}>
              Manager
            </Text>

            <View style={{ marginLeft: "12%" }}>
              <TouchableOpacity>
                <Image
                  style={{ marginLeft: 15 }}
                  source={require("../assets/edit.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#0B0F23",
              borderRadius: 8,
              alignItems: "center",
              alignSelf: "center",
              flexDirection: "row",
              height: 80,
              width: 335,
              marginTop: "2%",
            }}
          >
            <View>
              <Image
                style={{ marginLeft: 10 }}
                source={require("../assets/girlempl.png")}
              />
            </View>

            <View style={{ borderColor: "#FFFFFF" }}>
              <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                {" "}
                Kelly James
              </Text>
              <View style={{ margin: "2%" }}></View>
              <Text style={{ fontSize: 11, color: "#FFFFFF" }}>
                {" "}
                +1 647 653 2353
              </Text>
            </View>
            <Text style={{ fontSize: 11, color: "#707070", marginLeft: "15%" }}>
              Employee
            </Text>

            <View style={{ marginLeft: "10.5%" }}>
              <TouchableOpacity>
                <Image
                  style={{ marginLeft: 15 }}
                  source={require("../assets/edit.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#0B0F23",
              borderRadius: 8,
              alignItems: "center",
              alignSelf: "center",
              flexDirection: "row",
              height: 80,
              width: 335,
              marginTop: "2%",
            }}
          >
            <View>
              <Image
                style={{ marginLeft: 10 }}
                source={require("../assets/girlempl.png")}
              />
            </View>

            <View style={{ borderColor: "#FFFFFF" }}>
              <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                {" "}
                Kelly James
              </Text>
              <View style={{ margin: "2%" }}></View>
              <Text style={{ fontSize: 11, color: "#FFFFFF" }}>
                {" "}
                +1 647 653 2353
              </Text>
            </View>
            <Text style={{ fontSize: 11, color: "#FB0404", marginLeft: "15%" }}>
              Inactive
            </Text>

            <View style={{ marginLeft: "13.5%" }}>
              <TouchableOpacity>
                <Image
                  style={{ marginLeft: 15 }}
                  source={require("../assets/edit.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("qrcode")}
              style={{
                borderWidth: 2,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#90EDD8",
                height: 40,
                width: 131,
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
                Add Employee
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default employeeManagement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
