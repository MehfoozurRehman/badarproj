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
import My12345 from "./12345";

const halliegobel = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", paddingTop: "18%" }}>
        <Image
          style={{ alignSelf: "center" }}
          source={require("../assets/hgpic.png")}
        />

        <Text
          style={{
            marginTop: "1.5%",
            color: "white",
            textAlign: "center",
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Hallie Goebel
        </Text>
      </View>

      <View
        style={{
          flex: 2,
          backgroundColor: "white",
          marginTop: 20,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 29,
            paddingTop: 45,
            marginLeft: "8%",
          }}
        >
          Welcome Back!
        </Text>
        <Text
          style={{
            color: "black",
            textAlign: "left",
            fontSize: 15,
            paddingTop: "5%",
            marginLeft: "8%",
          }}
        >
          Login with Pin
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: "1%",
            marginHorizontal: "5%",
          }}
        >
          <TextInput
            maxLength={1}
            style={{
              margin: "2%",
              borderRadius: 10,
              fontSize: 40,
              height: 60,
              width: 60,
              backgroundColor: "#EAECEF",
              fontWeight: "bold",
              flex: 1,
            }}
            keyboardType="numeric"
            placeholder=""
          ></TextInput>

          <TextInput
            maxLength={1}
            style={{
              margin: "2%",
              borderRadius: 10,
              fontSize: 40,
              height: 60,
              width: 60,
              backgroundColor: "#EAECEF",
              fontWeight: "bold",
              flex: 1,
            }}
            keyboardType="numeric"
            placeholder=""
          ></TextInput>

          <TextInput
            maxLength={1}
            style={{
              margin: "2%",
              borderRadius: 10,
              fontSize: 40,
              height: 60,
              width: 20,
              backgroundColor: "#EAECEF",
              fontWeight: "bold",
              flex: 1,
            }}
            keyboardType="numeric"
            placeholder=""
          ></TextInput>
          <TextInput
            maxLength={1}
            style={{
              margin: "2%",
              borderRadius: 10,
              fontSize: 40,
              height: 60,
              width: 20,
              backgroundColor: "#EAECEF",
              fontWeight: "bold",
              flex: 1,
            }}
            keyboardType="numeric"
            placeholder=""
          ></TextInput>
          <TextInput
            maxLength={1}
            style={{
              borderRadius: 10,
              margin: "2%",
              fontSize: 40,
              height: 60,
              width: 20,
              backgroundColor: "#EAECEF",
              fontWeight: "bold",
              flex: 1,
            }}
            keyboardType="numeric"
            placeholder=""
          ></TextInput>
        </View>

        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("loginwithfingerprint")}
            style={{
              color: "black",
              textAlign: "center",
              fontSize: 16,
              marginTop: "27%",
            }}
          >
            Login with Fingerprint
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default halliegobel;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#1C213E",
    // alignItems: 'center',
  },
});
