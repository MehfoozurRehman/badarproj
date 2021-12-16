import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  ImageBackground,
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

const Useroffermap = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.container}
    >
      <View style={{ paddingTop: "15%", marginLeft: "10%" }}>
        <TouchableOpacity>
          <Image source={require("../assets/leftarrow.png")} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: "3.5%" }}></View>

      <View
        style={{
          opacity: 0.7,
          marginTop: 17,
          alignSelf: "center",
          backgroundColor: "#0B0F23",
          flexDirection: "row",
          alignItems: "center",
          height: 44,
          borderRadius: 25,
          width: 322,
        }}
      >
        <TextInput
          style={{
            height: 44,
            width: 215,
            fontSize: 14,
            fontWeight: "bold",
            marginLeft: "5%",
          }}
          placeholder="Search"
          placeholderTextColor="#FFFFFF"
          color="white"
        ></TextInput>

        <View style={{ flexDirection: "row", marginTop: "1.5%" }}>
          <TouchableOpacity>
            <Image source={require("../assets/mapmarker.png")} />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate("UserOfferList")}
          >
            <Image
              style={{ marginLeft: "15%" }}
              source={require("../assets/grid.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Useroffermap;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: 'center',
  },
});
