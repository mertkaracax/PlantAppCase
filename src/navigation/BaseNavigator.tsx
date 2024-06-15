import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  OnboardingOne,
  OnboardingTwo,
  OnboardingThree,
} from "@src/screens/index";
import BottomTabNavigator from "./BottomTabNavigator";
import Paywall from "@src/screens/paywall/Paywall";

const BaseNavigatior = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding_1" component={OnboardingOne} />
        <Stack.Screen
          name="Onboarding_2"
          component={OnboardingTwo}
          options={{ title: "Onboarding_2" }}
        />
        <Stack.Screen
          name="Onboarding_3"
          component={OnboardingThree}
          options={{ title: "Onboarding_3" }}
        />
        <Stack.Screen
          name="Paywall"
          component={Paywall}
          options={{ title: "Paywall" }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTabNavigator}
          options={{ title: "Home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BaseNavigatior;
