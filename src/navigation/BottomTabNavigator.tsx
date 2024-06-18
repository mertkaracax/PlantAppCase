import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@src/screens/home/Home";
import { Image, StyleSheet, View } from "react-native";
import { ch, cw } from "@src/style/dimensions";
import { ICONS } from "@src/assets/icons";
import Diagnose from "@src/screens/home/Diagnose";
import MyGarden from "@src/screens/home/MyGarden";
import Profile from "@src/screens/home/Profile";
import TabBar from "./TabBar";

const BottomTabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Diagnose" component={Diagnose} />
      <Tab.Screen name="My Garden" component={MyGarden} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
