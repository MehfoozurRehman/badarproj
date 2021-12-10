import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SidePanel({ setSidePanel }) {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%",
        height: "100%",
        zIndex: 988,
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setSidePanel(false);
        }}
        style={{ width: "30%" }}
      />
      <View
        style={{
          backgroundColor: "#1C213E",
          width: "70%",
          height: "100%",
          zIndex: 988,
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 40,
          paddingBottom: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setSidePanel(false);
          }}
          style={{ marginRight: "auto" }}
        >
          <Image
            style={{ tintColor: "#90EDD9", width: 25, height: 15 }}
            source={require("../assets/sidePanelClose.png")}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Find your vendors");
            }}
            style={styles.sidePanelItem}
          >
            <Text numberOfLines={1} style={styles.sidePanelItemText}>
              Find your vendors
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Find your vendors");
            }}
            style={styles.sidePanelItem}
          >
            <Text numberOfLines={1} style={styles.sidePanelItemText}>
              Find your vendors
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Find your vendors");
            }}
            style={styles.sidePanelItem}
          >
            <Text numberOfLines={1} style={styles.sidePanelItemText}>
              Find your vendors
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Find your vendors");
            }}
            style={styles.sidePanelItem}
          >
            <Text numberOfLines={1} style={styles.sidePanelItemText}>
              Find your vendors
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Find your vendors");
              }}
              style={styles.sidePanelItem}
            >
              <Text
                numberOfLines={1}
                style={{ color: "#ffffff", fontSize: 16 }}
              >
                Find your vendors
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: 150,
                height: 1,
                backgroundColor: "#ffffff",
                marginVertical: 5,
                marginBottom: 10,
              }}
            />
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Image
                source={require("../assets/girlborcir.png")}
                style={{ width: 35, height: 35, marginRight: 15 }}
              />
              <Text numberOfLines={1} style={styles.sidePanelItemText}>
                $adaada
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Find your vendors");
            }}
            style={styles.sidePanelItem}
          >
            <Text numberOfLines={1} style={styles.sidePanelItemText}>
              Find your vendors
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  sidePanelItem: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
  },
  sidePanelItemText: {
    color: "#90EDD9",
  },
});
