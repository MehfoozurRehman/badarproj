import * as React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function DrawerContent({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#1C213E",
        paddingHorizontal: 30,
        paddingVertical: 40,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.closeDrawer();
        }}
        style={{ marginLeft: "auto" }}
      >
        <Image
          style={{ tintColor: "#90EDD9", width: 20, height: 20 }}
          source={require("../assets/link.png")}
        />
      </TouchableOpacity>
      <ScrollView style={{ flex: 1, paddingVertical: 20 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Find your vendors");
          }}
          style={styles.drawerItem}
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/link.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Find your vendors
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Manage employees");
          }}
          style={styles.drawerItem}
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/link.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Manage employees
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Referrals");
          }}
          style={styles.drawerItem}
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/link.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Referrals
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Invite your customers");
          }}
          style={styles.drawerItem}
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/link.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Invite your customers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Offers");
          }}
          style={styles.drawerItem}
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/link.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Offers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Social media");
          }}
          style={styles.drawerItem}
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/link.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Social media
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Boost your buisness visibility");
          }}
          style={styles.drawerItem}
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/link.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Boost your buisness visibility
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Support");
          }}
          style={styles.drawerItem}
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/link.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Support
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Analytics");
          }}
          style={styles.drawerItem}
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/link.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Analytics
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Blog");
          }}
          style={styles.drawerItem}
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/link.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Blog
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={{
            flexDirection: "row",
            marginVertical: 40,
            alignItems: "center",
          }}
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/link.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Log out
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Add new buisness_location");
          }}
          style={styles.drawerItem}
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/link.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Add new buisness/location
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("New features");
          }}
          style={styles.drawerItem}
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/link.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            New features
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Crowed funding");
          }}
          style={styles.drawerItem}
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/link.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Crowed funding
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  drawerItem: {
    flexDirection: "row",
    marginVertical: 6,
    alignItems: "center",
  },
  drawerItemIcon: {
    tintColor: "#90EDD9",
    width: 20,
    height: 20,
    marginRight: 15,
  },
  drawerItemText: {
    color: "#ffffff",
  },
});
