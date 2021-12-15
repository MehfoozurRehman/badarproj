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
  const [active, setActive] = React.useState("vendors");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#1C213E",
        paddingHorizontal: 20,
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
          source={require("../assets/drawerClose.png")}
        />
      </TouchableOpacity>
      <ScrollView style={{ flex: 1, paddingVertical: 20 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Find your vendors");
            setActive("vendors");
          }}
          style={
            active === "vendors" ? styles.drawerItemActive : styles.drawerItem
          }
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/vendors-active.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Find your vendors
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("employeeManagement");
            setActive("employees");
          }}
          style={
            active === "employees" ? styles.drawerItemActive : styles.drawerItem
          }
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/employees-active.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Manage employees
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Referrals");
            setActive("referrals");
          }}
          style={
            active === "referrals" ? styles.drawerItemActive : styles.drawerItem
          }
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/referrals-active.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Referrals
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Invite your customers");
            setActive("customers");
          }}
          style={
            active === "customers" ? styles.drawerItemActive : styles.drawerItem
          }
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/customers-active.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Invite your customers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Offers");
            setActive("offers");
          }}
          style={
            active === "offers" ? styles.drawerItemActive : styles.drawerItem
          }
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/offers-active.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Offers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Social media");
            setActive("socials");
          }}
          style={
            active === "socials" ? styles.drawerItemActive : styles.drawerItem
          }
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/socials-active.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Social media
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Boost your buisness visibility");
            setActive("boost");
          }}
          style={
            active === "boost" ? styles.drawerItemActive : styles.drawerItem
          }
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/boost-active.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Boost your buisness visibility
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Support");
            setActive("support");
          }}
          style={
            active === "support" ? styles.drawerItemActive : styles.drawerItem
          }
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/support-active.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Support
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Analytics");
            setActive("analytics");
          }}
          style={
            active === "analytics" ? styles.drawerItemActive : styles.drawerItem
          }
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/analytics-active.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Analytics
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Blog");
            setActive("blog");
          }}
          style={
            active === "blog" ? styles.drawerItemActive : styles.drawerItem
          }
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/blog-active.png")}
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
            padding: 8,
            alignItems: "center",
          }}
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/logout-active.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Log out
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Add new buisness_location");
            setActive("newBuisness");
          }}
          style={
            active === "newBuisness"
              ? styles.drawerItemActive
              : styles.drawerItem
          }
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/newbuisness-active.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            Add new buisness/location
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("New features");
            setActive("features");
          }}
          style={
            active === "features" ? styles.drawerItemActive : styles.drawerItem
          }
        >
          <Image
            style={{
              tintColor: "#90EDD9",
              width: 20,
              height: 32,
              marginRight: 15,
            }}
            source={require("../assets/features-active.png")}
          />
          <Text numberOfLines={1} style={styles.drawerItemText}>
            New features
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Crowed funding");
            setActive("funding");
          }}
          style={
            active === "funding" ? styles.drawerItemActive : styles.drawerItem
          }
        >
          <Image
            style={styles.drawerItemIcon}
            source={require("../assets/funding-active.png")}
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
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
  },
  drawerItemActive: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(0,0,0,.1)",
    borderRadius: 10,
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
