import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import HomeScreen from "../Screens/HomeScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { selectedScreen, setSelectedScreen } = React.useState("Home");
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        overlayColor: "transparent",
        drawerStyle: {
          backgroundColor: "transparent",
        },
        header: () => null,
      }}
      drawerContent={(props) => {
        return (
          <DrawerContent
            navigation={props.navigation}
            selected={selectedScreen}
            setSelected={setSelectedScreen}
          />
        );
      }}
    >
      <Drawer.Screen name="Find your vendors" component={HomeScreen} />
      <Drawer.Screen name="Manage employees" component={HomeScreen} />
      <Drawer.Screen name="Referrals" component={HomeScreen} />
      <Drawer.Screen name="Invite your customers" component={HomeScreen} />
      <Drawer.Screen name="Offers" component={HomeScreen} />
      <Drawer.Screen name="Social media" component={HomeScreen} />
      <Drawer.Screen
        name="Boost your buisness visibility"
        component={HomeScreen}
      />
      <Drawer.Screen name="Support" component={HomeScreen} />
      <Drawer.Screen name="Analytics" component={HomeScreen} />
      <Drawer.Screen name="Blog" component={HomeScreen} />
      <Drawer.Screen name="Add new buisness_location" component={HomeScreen} />
      <Drawer.Screen name="New features" component={HomeScreen} />
      <Drawer.Screen name="Crowed funding" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
