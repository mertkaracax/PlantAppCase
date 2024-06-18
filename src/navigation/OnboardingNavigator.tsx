import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingTwo, OnboardingOne } from "@src/screens/index";
import { OnboardingScreenNames } from "@src/screens/types";
import { Text, View } from "react-native";

const OnboardingNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={OnboardingScreenNames.ONBOARDING_ONE}
        component={OnboardingOne}
        options={{ title: "Onboarding 1" }}
      />
      <Stack.Screen
        name={OnboardingScreenNames.ONBOARDING_TWO}
        component={OnboardingTwo}
        options={{ title: "Onboarding 2" }}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
