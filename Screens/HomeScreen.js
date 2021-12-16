import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function About() {
  return (
    <View
      style={{
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "#0B0F23",
      }}
    >
      <View style={{ margin: "9%" }}>
        <Text style={{ color: "#FFFFFF" }}>About</Text>

        <View
          style={{
            height: 62,
            marginTop: "2%",
            borderRadius: 10,
            width: 303,
            backgroundColor: "#101324",
          }}
        ></View>

        <View style={{ marginTop: "5%" }}>
          <Text style={{ marginTop: "4%", color: "#FFFFFF" }}>Address</Text>
          <Text style={{ marginTop: "4%", color: "#FFFFFF" }}>
            Phone Number
          </Text>
          <Text style={{ marginTop: "4%", color: "#FFFFFF" }}>Website</Text>
        </View>
      </View>
    </View>
  );
}

function SHOP() {
  return (
    <View
      style={{
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "#0B0F23",
      }}
    >
      <View style={{ margin: "5%" }}>
        <Text style={{ color: "#FFFFFF" }}>Offers</Text>
      </View>

      <View style={{ height: 100 }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          automaticallyAdjustContentInsets={true}
          horizontal={true}
        >
          <View
            style={{
              marginTop: "2%",
              flexDirection: "row",
              borderColor: "#FFFFFF",
              height: 86,
              width: 674,
              borderColor: "#FFFFFF",
            }}
          >
            <TouchableOpacity
              style={{
                marginLeft: "4%",
                alignItems: "center",
                flexDirection: "row",
                borderWidth: 2,
                borderRadius: 15,
                borderColor: "#90EDD9",
                height: 80,
                width: 182,
              }}
            >
              <Image
                style={{ marginLeft: "5%" }}
                source={require("../assets/nike.png")}
              />

              <View
                style={{
                  marginLeft: "2%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 80,
                  width: 100,
                  borderColor: "#FFFFFF",
                }}
              >
                <View style={{ height: 19, width: 98, borderColor: "#FFFFFF" }}>
                  <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                    Jay,s Clothing
                  </Text>
                </View>

                <View style={{ height: 19, width: 98, borderColor: "#FFFFFF" }}>
                  <Text style={{ fontSize: 13, color: "#90EDD9" }}>
                    25% Off
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginLeft: "3%",
                alignItems: "center",
                flexDirection: "row",
                borderWidth: 2,
                borderRadius: 15,
                borderColor: "#90EDD9",
                height: 80,
                width: 182,
              }}
            >
              <Image
                style={{ marginLeft: "5%" }}
                source={require("../assets/nike.png")}
              />

              <View
                style={{
                  marginLeft: "2%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 80,
                  width: 100,
                  borderColor: "#FFFFFF",
                }}
              >
                <View style={{ height: 19, width: 98, borderColor: "#FFFFFF" }}>
                  <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                    Jay,s Clothing
                  </Text>
                </View>

                <View style={{ height: 19, width: 98, borderColor: "#FFFFFF" }}>
                  <Text style={{ fontSize: 13, color: "#90EDD9" }}>
                    25% Off
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginLeft: "3%",
                alignItems: "center",
                flexDirection: "row",
                borderWidth: 2,
                borderRadius: 15,
                borderColor: "#90EDD9",
                height: 80,
                width: 182,
              }}
            >
              <Image
                style={{ marginLeft: "5%" }}
                source={require("../assets/nike.png")}
              />

              <View
                style={{
                  marginLeft: "2%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 80,
                  width: 100,
                  borderColor: "#FFFFFF",
                }}
              >
                <View style={{ height: 19, width: 98, borderColor: "#FFFFFF" }}>
                  <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
                    Jay,s Clothing
                  </Text>
                </View>

                <View style={{ height: 19, width: 98, borderColor: "#FFFFFF" }}>
                  <Text style={{ fontSize: 13, color: "#90EDD9" }}>
                    25% Off
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={{ margin: "4%" }}>
        <Text style={{ color: "#FFFFFF" }}>Category_2</Text>
      </View>
      <View
        style={{
          backgroundColor: "#101426",
          height: 86,
          width: 330,
          borderRadius: 10,
        }}
      >
        <Text style={{ margin: "3%", color: "#FFFFFF" }}>Item 1</Text>
        <Text style={{ margin: "3%", color: "#FFFFFF" }}>Item 2</Text>
      </View>
    </View>
  );
}
function SHOUT() {
  return (
    <View
      style={{
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "#0B0F23",
      }}
    >
      <View style={{ margin: "5%" }}></View>

      <Text style={{ color: "#FFFFFF" }}>SHOUT OUTS</Text>

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
            <Text style={{ fontSize: 14, color: "#FFFFFF" }}>$ArchTopCafe</Text>
            <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
              Thank you for the coffee!
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
            <Text style={{ fontSize: 14, color: "#FFFFFF" }}>$RisaMidyett</Text>
            <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
              Thank you for the coffee!
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
            <Text style={{ fontSize: 14, color: "#FFFFFF" }}>$21Suppliers</Text>
            <Text style={{ fontSize: 13, color: "#FFFFFF" }}>
              Thank you for the coffee!
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
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#0B0F23",
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
      }}
    >
      <TouchableOpacity style={{ paddingVertical: 10 }}>
        <Image source={require("../assets/leftarrow.png")} />
      </TouchableOpacity>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("../assets/profilebg.png")}
          style={{ width: "100%", height: 150 }}
        />
        <View
          style={{ position: "absolute", bottom: -50, alignItems: "center" }}
        >
          <Image
            source={require("../assets/kelly.png")}
            style={{ width: 70, height: 70, marginBottom: 5 }}
          />
          <Text style={{ color: "#ffffff" }}>(Business Name)</Text>
          <Text style={{ color: "#ffffff" }}>($MetaID)</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          height: 60,
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity style={{ padding: 5 }}>
          <Image source={require("../assets/link.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 5 }}>
          <Image source={require("../assets/link.png")} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity style={{ padding: 5, alignItems: "center" }}>
          <Image source={require("../assets/link.png")} />
          <Text style={{ color: "#ffffff" }}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 5, alignItems: "center" }}>
          <Image source={require("../assets/link.png")} />
          <Text style={{ color: "#ffffff" }}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 5, alignItems: "center" }}>
          <Image source={require("../assets/link.png")} />
          <Text style={{ color: "#ffffff" }}>Social</Text>
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#90EDD9",
          tabBarInactiveTintColor: "#63656E",
          tabBarIndicatorStyle: {
            backgroundColor: "#242424",
          },
          tabBarStyle: {
            backgroundColor: "#0B0F23",
            borderRadius: 10,
            borderWidth: 1.5,
            borderColor: "#7CE5CF",
            paddingVertical: 10,
          },
          tabBarItemStyle: {
            borderLeftWidth: 0.5,
            borderRightWidth: 0.5,
            borderColor: "#7CE5CF",
            borderRadius: 1,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        })}
      >
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Shop" component={SHOP} />
        <Tab.Screen name="Shout Outs" component={SHOUT} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
