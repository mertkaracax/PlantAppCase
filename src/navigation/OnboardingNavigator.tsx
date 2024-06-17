import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  // OnboardingOne,
  OnboardingTwo,
  OnboardingOne,
} from "@src/screens/index";
import { OnboardingScreenNames } from "@src/screens/types";

// import SwiperComponent from "@src/screens/onboarding/Swiper";

const OnboardingNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen
        name={OnboardingScreenNames.ONBOARDING_ONE}
        component={OnboardingOne}
      /> */}
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
