import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function Home() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0B0F23",
      }}
    >
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
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
          <Text style={{ color: "#ffffff" }}>Business Name</Text>
          <Text style={{ color: "#ffffff" }}>$MetaID</Text>
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
        <Tab.Screen name="About" component={Home} />
        <Tab.Screen name="Shop" component={Home} />
        <Tab.Screen name="Shout Outs" component={Home} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
