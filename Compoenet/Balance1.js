import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ScrollViewBase,
} from "react-native";

const Balance1 = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#1C213E" }}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", marginTop: "15%" }}>
          <TouchableOpacity style={{ marginRight: "70%" }}>
            <Image source={require("../assets/component.png")} />
          </TouchableOpacity>

          <View
            style={{
              borderColor: "#FFFFFF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image source={require("../assets/choti.png")} />
          </View>
        </View>

        <View
          style={{
            borderColor: "#FFFFFF",
            height: 21,
            width: 67,
            marginRight: "75%",
          }}
        >
          <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Balance</Text>
        </View>

        <View
          style={{
            marginLeft: "8%",
            height: 65,
            width: 346,
            borderColor: "#FFFFFF",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 49, color: "#90EDD9", fontWeight: "bold" }}>
            $ 4,142.19 +
          </Text>
        </View>

        <View
          style={{
            marginTop: "5%",
            borderColor: "#FFFFFF",
            height: 21,
            width: 67,
            marginRight: "75%",
          }}
        >
          <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Revenue</Text>
        </View>

        <View style={{ height: 164, width: 300, borderColor: "#FFFFFF" }}>
          <Image source={require("../assets/te.png")} />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: "5%",
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#FFFFFF",
            height: 86,
            width: 400,
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 2,
              borderColor: "#90EDD9",
              height: 86,
              width: 94,
              borderRadius: 15,
            }}
          >
            <View>
              <Image source={require("../assets/plane.png")} />
            </View>

            <View>
              <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Send</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 2,
              borderColor: "#90EDD9",
              height: 86,
              marginLeft: "5%",
              width: 94,
              borderRadius: 15,
            }}
          >
            <View>
              <Image source={require("../assets/cheers.png")} />
            </View>

            <View>
              <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Request</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 2,
              borderColor: "#90EDD9",
              height: 86,
              width: 94,
              marginLeft: "5%",
              borderRadius: 15,
            }}
          >
            <View>
              <Image source={require("../assets/dolar.png")} />
            </View>

            <View>
              <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Pay</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: "5%",
            borderColor: "#FFFFFF",
            height: 21,
            width: 93,
            marginRight: "70%",
          }}
        >
          <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Transactons</Text>
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
                marginLeft: "1%",
                marginRight: "17%",
                borderColor: "#FFFFFF",
                height: 50,
                width: 170,
              }}
            >
              <Text style={{ fontSize: 14, color: "#FFFFFF" }}>$AlphaBeta</Text>
              <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                Transaction ID: 119009
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
              <Text style={{ color: "#17C261" }}>+ $11.89</Text>
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
              <Image source={require("../assets/amazon.png")} />
            </View>

            <View
              style={{
                marginLeft: "1%",
                marginRight: "17%",
                borderColor: "#FFFFFF",
                height: 50,
                width: 170,
              }}
            >
              <Text style={{ fontSize: 14, color: "#FFFFFF" }}>
                $RisaMidyett
              </Text>
              <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                Transaction ID: 119009
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
              <Text style={{ color: "#17C261" }}>+ $69.50</Text>
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
              <Image source={require("../assets/amazon.png")} />
            </View>

            <View
              style={{
                marginLeft: "1%",
                marginRight: "17%",
                borderColor: "#FFFFFF",
                height: 50,
                width: 170,
              }}
            >
              <Text style={{ fontSize: 14, color: "#FFFFFF" }}>
                $21Suppliers
              </Text>
              <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                Transaction ID: 119009
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
              <Text style={{ color: "#DB3663" }}>- $49.99</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={{ fontSize: 14, color: "#FFFFFF" }}>Show more</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};
export default Balance1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C213E",
    alignItems: "center",
  },
});
