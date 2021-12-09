import * as React from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SidePanel from "./SidePanel";

function HomeScreen({ navigation }) {
  const [sidePanel, setSidePanel] = React.useState(false);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Open drawer</Text>
      </TouchableOpacity>
      <View style={{ height: 100, width: 1000 }} />
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Text>Go to Settings</Text>
      </TouchableOpacity>
      <View style={{ height: 100, width: 1000 }} />
      <TouchableOpacity
        onPress={() => {
          setSidePanel(true);
        }}
      >
        <Text>Open sidebar</Text>
      </TouchableOpacity>
      {sidePanel ? <SidePanel setSidePanel={setSidePanel} /> : null}
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={() => navigation.openDrawer()} title="Open drawer" />
      <View style={{ height: 100 }} />
      <Button onPress={() => navigation.navigate("Home")} title="Go to Home" />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => null,
        tabBarActiveTintColor: "#90EDD9",
        tabBarInactiveTintColor: "#63656E",
        tabBarStyle: {
          backgroundColor: "#0B0F23",
          height: 60,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <Image
                source={
                  focused
                    ? require("../assets/link.png")
                    : require("../assets/threelines.png")
                }
                style={{ marginBottom: 15, width: 22, height: 22 }}
              />
              {focused && (
                <View
                  style={{
                    height: 2,
                    width: 60,
                    backgroundColor: color,
                    borderRadius: 3,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <Image
                source={
                  focused
                    ? require("../assets/link.png")
                    : require("../assets/threelines.png")
                }
                style={{ marginBottom: 15, width: 22, height: 22 }}
              />
              {focused && (
                <View
                  style={{
                    height: 2,
                    width: 60,
                    backgroundColor: color,
                    borderRadius: 3,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home1"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <Image
                source={
                  focused
                    ? require("../assets/link.png")
                    : require("../assets/threelines.png")
                }
                style={{ marginBottom: 15, width: 22, height: 22 }}
              />
              {focused && (
                <View
                  style={{
                    height: 2,
                    width: 60,
                    backgroundColor: color,
                    borderRadius: 3,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings1"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <Image
                source={
                  focused
                    ? require("../assets/link.png")
                    : require("../assets/threelines.png")
                }
                style={{ marginBottom: 15, width: 22, height: 22 }}
              />
              {focused && (
                <View
                  style={{
                    height: 2,
                    width: 60,
                    backgroundColor: color,
                    borderRadius: 3,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings2"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <Image
                source={
                  focused
                    ? require("../assets/link.png")
                    : require("../assets/threelines.png")
                }
                style={{ marginBottom: 15, width: 22, height: 22 }}
              />
              {focused && (
                <View
                  style={{
                    height: 2,
                    width: 60,
                    backgroundColor: color,
                    borderRadius: 3,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
