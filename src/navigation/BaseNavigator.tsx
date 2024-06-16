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
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  Rubik_800ExtraBold,
  Rubik_900Black,
  Rubik_300Light_Italic,
  Rubik_400Regular_Italic,
  Rubik_500Medium_Italic,
  Rubik_600SemiBold_Italic,
  Rubik_700Bold_Italic,
  Rubik_800ExtraBold_Italic,
  Rubik_900Black_Italic,
} from "@expo-google-fonts/rubik";

const BaseNavigatior = () => {
  useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black,
    Rubik_300Light_Italic,
    Rubik_400Regular_Italic,
    Rubik_500Medium_Italic,
    Rubik_600SemiBold_Italic,
    Rubik_700Bold_Italic,
    Rubik_800ExtraBold_Italic,
    Rubik_900Black_Italic,
  });
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
