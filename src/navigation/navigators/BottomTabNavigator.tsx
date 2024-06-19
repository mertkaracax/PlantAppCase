import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@src/screens/main/Home";
import Diagnose from "@src/screens/main/Diagnose";
import MyGarden from "@src/screens/main/MyGarden";
import Profile from "@src/screens/main/Profile";
import CustomTabBar from "../CustomTabBar";

const BottomTabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Diagnose" component={Diagnose} />
      <Tab.Screen name="My Garden" component={MyGarden} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
